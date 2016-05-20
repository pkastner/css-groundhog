'use strict';

const stylelint    = require('stylelint');
const sass         = require('gulp-sass');
const prefix       = require('gulp-autoprefixer');
const gulp         = require('gulp');
const runSequence  = require('run-sequence');
const markdown     = require('gulp-markdown');
const frontmatter  = require('gulp-front-matter');
const rename       = require('gulp-rename');
const sprites      = require('gulp-svg-symbols');
const svgo         = require('gulp-svgo');
const swig         = require('swig');
const hljs         = require('highlight.js');
const globby       = require('globby');
const through2     = require('through2');
const path         = require('path');
const bSync        = require('browser-sync');
const fs           = require('fs');
const merge        = require('merge2');

/*
* Metalsmith dependencies
*/
const Metalsmith        = require('metalsmith');
const inplace           = require('metalsmith-in-place');
const layouts           = require('metalsmith-layouts');
const handlebars        = require('handlebars');
const handlebarsLayout  = require('handlebars-layouts');
const markdownms        = require('metalsmith-markdown');
const permalinks        = require('metalsmith-permalinks');
const navigation        = require('metalsmith-navigation');


const styleFiles = 'src/**/*.scss';
const site = {};
site.components = globby
  .sync('src/**/README.md')
  .map(el => {
    el = el.replace('README.md', '').replace('src/', '');
    var parts = el.split('/');
    return {
      url: el,
      name: capitalizeFirstLetter(parts[parts.length - 2])
    }
  });

swig.setFilter('highlight', (input, lang) => hljs.highlight(lang, input).value);

gulp.task('styles:lint', () => {
  return stylelint.lint({
    files: [styleFiles],
    syntax: 'scss',
    formatter: "string"
  })
  .then(data => { if(data.errored) { console.error(data.output); } })
  .catch(err => console.error(err.stack));
});

gulp.task('styles', () => {
  return gulp.src(styleFiles)
    .pipe(sass())
    .pipe(prefix())
    .pipe(gulp.dest('dist/css'));
});


gulp.task('dev', (done) => {
  gulp.watch([styleFiles], ['styles:lint', 'styles']);
  gulp.watch(['src/**/samples/**/*.html','src/**/README.md'], ['doc']);
  runSequence('copy-assets', 'icons', 'styles:lint', 'styles', 'doc', 'pages', 'serve', done);
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

gulp.task('serve', function(done) {
  bSync.init({
    server: {
      baseDir: "./dist",
      open: false
    }
  });
  done();
});

gulp.task('pages', function() {
  return gulp.src(['docs/_pages/**/*.md', 'docs/_pages/**/*.html'])
    .pipe(frontmatter({
      property: 'page',
      remove: true
    }))
    .pipe(markdown())
    .pipe(through2.obj(function(file, enc, cb) {
      if(file.page.permalink) {
        file.path = path.resolve('docs/_pages') + '/' + file.page.permalink;
        if(!file.page.permalink.endsWith('.html')) {
          file.path += '/index.html';
        }
      }
      cb(null, file);
    }))
    .pipe(buildPage())
    .pipe(gulp.dest('dist/doc'));
});

markdown.marked.Renderer.prototype.table = function(header, body) {
  return '<table class="table">\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};


gulp.task('doc', function(taskDone) {
  Metalsmith('./')
    .source('./docs/_pages/')
    // .use((files, metalsmith, done) => {
    //   console.log(files);
    //   done();
    // })
    .destination('dist2')
    .use((files, metalsmith, done) => {
      globby('*/', {
        cwd: path.resolve(metalsmith._directory, 'src')
      })
      .then((paths) => console.log(paths))
      .then(() => done());
    })
    // .use(inplace({
    //   engine: 'handlebars',
    //   partials: './docs/_templates/partials/',
    // }))
    .use(markdownms())
    .use(permalinks())
    // .use(navigation())
    //
    // .use(layouts({
    //   engine: 'handlebars',
    //   directory: './docs/_templates/layouts/',
    //   partials: './docs/_templates/partials/',
    //   default: 'default.hbs'
    // }))
    .build((err) => {
      if (err) {
        throw new Error(err);
      }
      taskDone();
    });
});

gulp.task('copy-assets', function() {
  return merge(
    gulp.src('assets/**/*')
      .pipe(gulp.dest('dist/assets')),
    gulp.src('docs/_assets/**/*')
      .pipe(gulp.dest('dist/doc')));
});

gulp.task('icons', function() {
  return gulp.src('assets/icons/**/*.svg')
    .pipe(svgo({
      plugins: [
        { removeAttrs: { attrs: 'fill' } }
      ]
    }))
    .pipe(rename(function(path) {
      path.basename = path.basename.toLowerCase();
      path.basename = path.basename.replace(/icons_file_00._/, '');
      path.basename = path.basename.replace(/_/g, '-');
      path.basename = path.basename.replace(/[^\w\s-]/gi, '');
    }))
    .pipe(gulp.dest('dist/assets/images/icons'))
    .pipe(sprites({ templates: ['default-svg']}))
    .pipe(gulp.dest('dist/assets/images'));
})
