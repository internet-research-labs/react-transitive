var gulp = require('gulp');
var gutil = require("gulp-util");
var connect = require('gulp-connect');
var browserify = require('gulp-browserify');
var watch = require('gulp-watch');
var react = require('gulp-react');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var webpackStream = require('webpack-stream');
var webpackConfig = require("./webpack.config.js");
var plumber = require('gulp-plumber');
var path = require('path');

gulp.task('jsx-components', function () {
  return gulp.src('src/components/**.jsx')
              .pipe(plumber())
              .pipe(react())
              .pipe(gulp.dest('src/components'));
});

gulp.task('webpack-stream', function () {
  return gulp.src('src/**.js')
             .pipe(webpackStream(webpackConfig))
             .pipe(gulp.dest('app/'))
             .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(
    ['src/**/*.jsx', 'src/**/*.js'],
    ['jsx-components', 'webpack-stream']
  );
});

gulp.task('connect', function () {
  connect.server({
    root: 'app',
    port: 8000,
    livereload: { port: 8001 },
  });
});

gulp.task('default', ['watch', 'connect']);
