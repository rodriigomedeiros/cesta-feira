var gulp = require('gulp'),
  uglify = require('gulp-uglifyjs'),
  rm = require('gulp-rm'),
  stripDebug = require('gulp-strip-debug'),
  serve = require('gulp-serve');

gulp.task('clean', function () {
  return gulp.src('./dist/**/*.*')
    .pipe(stripDebug())
    .pipe(rm());
});

gulp.task('serve', serve({
  root: '.',
  port: 2003
}));

gulp.task('build', ['clean'], function () {
  return gulp.src('./src/cesta-feira.js')
    .pipe(gulp.dest('./dist/'))
    .pipe(stripDebug())
    .pipe(uglify('cesta-feira.min.js'))
    .pipe(gulp.dest('./dist'));
});