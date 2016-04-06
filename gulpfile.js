'use strict';

const stylelint    = require('stylelint');
const sass         = require('gulp-sass');
const prefix       = require('gulp-autoprefixer');
const gulp         = require('gulp');
const runSequence  = require('run-sequence');
const markdown     = require('gulp-markdown');
const frontmatter  = require('gulp-front-matter');
const rename       = require('gulp-rename');
const swig         = require('swig');
const globby       = require('globby');
const through2     = require('through2');
const path         = require('path');
const bSync        = require('browser-sync');

const styleFiles = 'src/**/*.scss';

const files = globby
  .sync('src/**/README.md');

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
  runSequence('styles:lint', 'styles', done);
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function buildSite() {
  return through2.obj(function(file, enc, cb) {
    let template = file.page.template || 'components';
    const templateFile = path.join(__dirname, 'docs', '_templates', `${template}.html`);
    const els = file.path.split('/');
    const data = {
      page: file.page,
      title: capitalizeFirstLetter(els[els.length - 2]),
      content: file.contents.toString()
    };
    const tpl = swig.compileFile(templateFile, {cache: false});
    file.contents = new Buffer(tpl(data));
    cb(null, file);
  });
}

gulp.task('serve', function(done) {
  bSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  done();
});

gulp.task('doc', function() {
  return gulp.src('src/**/README.md')
    .pipe(frontmatter({
      property: 'page',
      remove: true
    }))
    .pipe(markdown())
    .pipe(rename(function(path) {
      path.basename = 'index';
      path.extname = '.html';
    }))
    .pipe(buildSite())
    .pipe(gulp.dest('dist/doc'));
});
