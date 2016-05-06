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
  runSequence('copy-assets', 'styles:lint', 'styles', 'doc', 'pages', 'serve', done);
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function buildElem(file, data) {
  let template = file.page.layout || 'components';
  const templateFile = path.join(__dirname, 'docs', '_templates', `${template}.html`);
  const tpl = swig.compileFile(templateFile, {cache: false});
  file.contents = new Buffer(tpl(data));
}

function buildSite() {
  return through2.obj(function(file, enc, cb) {
    let els = file.path.split('/');
    const data = {
      site,
      page: file.page,
      title: capitalizeFirstLetter(els[els.length - 2]),
      content: file.contents.toString()
    };

    els.pop();
    data.samples = globby
      .sync(els.join('/') + '/samples/**/*.html')
      .map(file => fs.readFileSync(file).toString());
    buildElem(file, data);
    cb(null, file);
  });
}

function buildPage() {
  return through2.obj(function(file, enc, cb) {
    const data = {
      site,
      page: file.page,
      title: file.page.title,
      content: file.contents.toString()
    };
    buildElem(file, data);
    cb(null, file);
  });
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


gulp.task('doc', function() {
  return gulp.src('src/**/README.md')
    .pipe(markdown())
    .pipe(frontmatter({
      property: 'page',
      remove: true
    }))
    .pipe(rename(function(path) {
      path.basename = 'index';
      path.extname = '.html';
    }))
    .pipe(through2.obj(function(file, enc, cb) {
      file.page.permalink = file.page.permalink
        || 'components/' + path.dirname(path.relative(path.resolve(__dirname, 'src'), file.path)) + '/';
      cb(null, file);
    }))
    .pipe(buildSite())
    .pipe(gulp.dest('dist/doc/components'));
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
    .pipe(svgo())
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
