const stylelint = require('stylelint');
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
