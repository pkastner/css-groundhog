const stylelint = require('stylelint');
const sass      = require('gulp-sass');
const prefix    = require('gulp-autoprefixer');
const gulp      = require('gulp');

gulp.task('styles:lint', () => {
  return stylelint.lint({
    files: ['src/**/*.scss'],
    syntax: 'scss',
    formatter: "string"
  })
  .then(data => { if(data.errored) { console.error(data.output); } })
  .catch(err => console.error(err.stack));
});

gulp.task('styles', () => {
  return gulp.src('src/**/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(gulp.dest('dist'));
});
