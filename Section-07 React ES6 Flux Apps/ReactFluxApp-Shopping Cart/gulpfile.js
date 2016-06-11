var gulp = require('gulp');  // gulp to define tasks 
var browserify = require('browserify'); // bundler 
var reactify = require('reactify');  // transformer for jsx using browserify
var source = require('vinyl-source-stream');   // providing platform for gulp
var uglify  = require('gulp-uglify');   // uglify js
var concat = require('gulp-concat');   // concat js and css
var minify = require('gulp-minify-css');  // contact only css


const sync = browserSync.create();

gulp.task('browserify', function() {
    browserify('./src/js/main.js') // ES6 only
      .transform('reactify') // es6 TO es5
      .bundle()
      .pipe(source('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy',function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));

    gulp.src('src/assets/**/*.*')
      .pipe(gulp.dest('dist/assets'));
});

gulp.task('css', function(){
  gulp.src('./src/css/*.css')
    .pipe(concat('style.css'))
    .pipe(minify({ keepBreaks: true }))
    .pipe(gulp.dest('dist/css/'));

});

gulp.task('default',['browserify', 'copy' , 'css'], function() {
     gulp.watch('src/**/*.*', ['browserify', 'copy','css'])
});

//gulp
