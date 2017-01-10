/* eslint no-param-reassign: 0 */
/* eslint arrow-body-style: 0 */

const stylelint = require('stylelint');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const markdown = require('gulp-markdown');
const rename = require('gulp-rename');
const sprites = require('gulp-svg-symbols');
const svgo = require('gulp-svgo');
const globby = require('globby');
const path = require('path');
const bSync = require('browser-sync');
const merge = require('merge2');
const browserify = require('browserify');
const watchify = require('watchify');
const source = require('vinyl-source-stream');
const eslint = require('gulp-eslint');
const packageData = require('./package.json');
const zip = require('gulp-zip');
const s3 = require('gulp-s3');
const replace = require('gulp-replace');

/*
* Metalsmith dependencies
*/
const metalsmith = require('metalsmith');
const inplace = require('metalsmith-in-place');
const layouts = require('metalsmith-layouts');
const handlebars = require('handlebars');
const handlebarsLayout = require('handlebars-layouts');
const markdownms = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const navigation = require('metalsmith-navigation');
const sitemap = require('metalsmith-sitemap');
const components = require('./build/plugins/components');
const requiredir = require('require-dir');
const flatnav = require('./build/plugins/flatnav');
const addmeta = require('./build/plugins/addmeta');
const highlight = require('./build/plugins/highlight');
const capitalizeFirstLetter = require('./build/util/capitalizeFirstLetter');

const version = packageData.version;

const styleFiles = 'src/**/*.scss';
const scriptFiles = 'src/**/*.js';

const site = {};
site.components = globby
  .sync('src/**/README.md')
  .map(el => {
    el = el.replace('README.md', '').replace('src/', '');
    const parts = el.split('/');
    return {
      url: el,
      name: capitalizeFirstLetter(parts[parts.length - 2]),
    };
  });

gulp.task('styles:lint', () => {
  return stylelint.lint({
    files: [styleFiles],
    syntax: 'scss',
    formatter: 'string',
  })
  .then(data => { if (data.errored) { console.error(data.output); } })
  .catch(err => console.error(err.stack));
});

gulp.task('styles', () => {
  return gulp.src(styleFiles)
    .pipe(sass())
    .pipe(prefix())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts:lint', () => {
  return gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

const b = browserify({
  entries: ['src/main.js'],
}).transform('babelify');

const bundle = () => b.bundle()
  .on('error', (e) => console.log('Browserify Error', e))
  .pipe(source('main.js'))
  .pipe(gulp.dest('dist/js/'));

gulp.task('scripts', bundle);

gulp.task('serve', (done) => {
  bSync.init({
    server: {
      baseDir: './dist',
      open: false,
    },
  });
  done();
});

markdown.marked.Renderer.prototype.table = (header, body) => `<table class="table">
  <thead>
    ${header}
  </thead>
  <tbody>
    ${body}
  </tbody>
</table>`;


gulp.task('doc', (taskDone) => {
  /*
  * setup handlebars
  */
  handlebars.registerHelper(handlebarsLayout(handlebars));
  const layoutPartials = requiredir('./docs/_templates/layouts');
  const templatePartials = requiredir('./docs/_templates/partials');
  const hbsPartials = Object.assign(layoutPartials, templatePartials);
  Object.keys(hbsPartials).forEach((key) => handlebars.registerPartial(key, hbsPartials[key]));
  const helpers = requiredir('./docs/_templates/helpers');
  Object.keys(helpers).forEach((key) => handlebars.registerHelper(key, helpers[key]));

  metalsmith('./')
    .source('./docs/_pages/')
    .clean(false)
    .destination('dist')
    .use(addmeta('./package.json', 'package'))
    .use(addmeta('./docs/_data/site.json', 'site'))
    .use(addmeta('./docs/_data/nav.json', 'nav'))
    .use(components())
    .use(inplace({
      engine: 'handlebars',
      partials: './docs/_templates/partials/',
    }))
    .use(markdownms())
    .use(highlight())
    .use((files, smith, done) => {
      Object.keys(files).forEach((key) => {
        files[key].name = path.basename(key, '.html');
      });
      done();
    })
    .use(permalinks({
      pattern: 'doc/:name',
      relative: false,
      linksets: [{
        match: { type: 'component' },
        pattern: 'doc/components/:name',
      }, {
        match: { type: 'layout' },
        pattern: 'doc/layouts/:name',
      }],
    }))
    .use(navigation({
      componentsNav: {
        includeDirs: true,
        filterProperty: 'type',
        filterValue: 'component',
      },
    }, {
      navListProperty: 'nav',
      permalinks: false,
    }))
    .use(flatnav())
    .use(layouts({
      engine: 'handlebars',
      directory: './docs/_templates/layouts',
      default: 'default.hbs',
    }))
    .use(sitemap({
      hostname: 'http://groundhog.dynalabs.io',
      omitIndex: true,
      priority: 0.5,
      changefreq: 'monthly',
    }))
    .build((err) => {
      if (err) {
        console.log(err);
        throw new Error(err);
      }
      taskDone();
    });
});

gulp.task('copy-assets', () => {
  return merge(
    gulp.src('assets/**/*')
      .pipe(gulp.dest('dist/assets')),
    gulp.src('docs/_assets/**/*')
      .pipe(gulp.dest('dist/doc')));
});

gulp.task('test', ['styles:lint', 'scripts:lint']);

gulp.task('icons', () => {
  return gulp.src('assets/icons/**/*.svg')
    .pipe(svgo({
      plugins: [
        { removeAttrs: { attrs: 'fill' } },
      ],
    }))
    .pipe(rename((p) => {
      p.basename = p.basename.toLowerCase();
      p.basename = p.basename.replace(/icons_file_00._/, '');
      p.basename = p.basename.replace(/_/g, '-');
      p.basename = p.basename.replace(/[^\w\s-]/gi, '');
    }))
    .pipe(gulp.dest('dist/assets/images/icons'))
    .pipe(sprites({ templates: ['default-svg'] }))
    .pipe(gulp.dest('dist/assets/images'));
});


gulp.task('package', () => {
  gulp.src(['./dist/js/main.js', './dist/css/main.css'])
    .pipe(zip(`groundhog-v${version}.zip`))
    .pipe(gulp.dest('./dist/download/'));
});

gulp.task('replace-asset-urls', () => {
  gulp.src('dist/**/*.css')
    .pipe(replace('url(/assets/', `url(//assets.dynatrace.com/groundhog/v${version}/assets/`))
    .pipe(gulp.dest('dist'));
});

gulp.task('replace-asset-urls-in-html', () => {
  gulp.src('dist/**/*.html')
    .pipe(replace('="/assets/', `="//assets.dynatrace.com/groundhog/v${version}/assets/`))
    .pipe(replace('="http://groundhog.dynalab/assets/', `="//assets.dynatrace.com/groundhog/v${version}/assets/`))
    .pipe(replace('="/css/', `="//assets.dynatrace.com/groundhog/v${version}/css/`))
    .pipe(replace('="/js/', `="//assets.dynatrace.com/groundhog/v${version}/js/`))
    .pipe(gulp.dest('dist'));
});

gulp.task('upload-s3', () => {
  const aws = {
    key: process.env.AWS_KEY,
    secret: process.env.AWS_SECRET,
    bucket: process.env.AWS_BUCKET,
    region: 'us-standard',
  };
  return gulp.src(['dist/assets/**/*',
    'dist/css/**/*',
    'dist/js/**/*',
    'dist/download/**/*'], { base: 'dist' })
    .pipe(rename(p => {
      p.dirname = `groundhog/v${version}/${p.dirname}`;
    }))
    .pipe(s3(aws));
});

gulp.task('dev', (done) => {
  gulp.watch([styleFiles], ['styles:lint', 'styles']);
  gulp.watch([scriptFiles], ['scripts:lint', 'scripts']);
  gulp.watch(['src/**/samples/**/*.html', 'src/**/README.md', 'docs/**/*'], ['doc']);
  runSequence('copy-assets', 'icons', 'styles:lint', 'styles',
    'scripts:lint', 'scripts', 'doc', 'serve', done);
});

gulp.task('build', (done) => {
  runSequence('copy-assets', 'icons',
    ['styles:lint', 'scripts:lint'], ['styles', 'scripts'], 'doc', done);
});

gulp.task('publish', (done) => {
  runSequence('replace-asset-urls', 'replace-asset-urls-in-html', 'package', 'upload-s3', done);
});
