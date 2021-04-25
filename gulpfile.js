'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp
    .src('sass/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('sass/*.sass', gulp.series(['sass']));
});
