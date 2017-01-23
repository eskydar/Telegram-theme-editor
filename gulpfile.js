var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    stylish = require('jshint-stylish'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    minifycss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    template = require('./gulp-tasks/template'),
    plugins = require('gulp-load-plugins')();

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('images', function(){
  gulp.src('assets/src/img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('assets/img/'));
});

gulp.task('styles', function(){
  gulp.src(['assets/css/src/base.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('assets/css/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('jshint', function() {
  return gulp.src('assets/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('compileHtml', function() {
  return gulp.src('assets/templates/src/*.html')
      .pipe(
          template('_.extend(tpl, {{tpl}});')
      )
      .pipe(
          plugins.concat('templates.js')
      )
      .pipe(
          plugins.tap(function(file) {
              file.contents = Buffer.concat([
                  new Buffer('define(["underscore"], function(_) { var tpl = {}; '),
                  file.contents,
                  new Buffer(' return tpl; });')
              ])
          })
      )
      .pipe(
          uglify()
      )
      .pipe(
          gulp.dest('assets/templates/')
      )
      .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', ['browser-sync', 'compileHtml'], function(){
  gulp.watch('assets/css/src/**/*.scss', ['styles']);
  gulp.watch('assets/js/**/*.js', ['jshint']);
  gulp.watch('*.html', ['bs-reload']);
  gulp.watch('assets/templates/src/*.html', ['compileHtml'])
});