var gulp = require('gulp');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var postCSS = require('gulp-postcss');
var autoPrefixer = require('autoprefixer');
var browserify = require('browserify');
var vueify = require('vueify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');
var uglify = require('gulp-uglify');


gulp.task('frontend-js', function(){

    return browserify('./src/index.js')//, { noParse : 'drift-zoom' })
        .transform(vueify)
        .transform(babelify)
        .bundle()
        // .pipe(concat('build.js'))
        .pipe(source('build.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./assets/'));
});

gulp.task('frontend-css', function(){

    return gulp.src('./src/styles/index.styl')
        .pipe(stylus({ compress: true }))
        .pipe(concat('build.css'))
        .pipe(postCSS([ autoPrefixer ]))
        .pipe(gulp.dest('./assets/'));
});

gulp.task('backend-js', function(){

    return browserify('./src/manager/index.js')
            .transform(vueify)
            .transform(babelify)
            .bundle()
            .pipe(source('build.js'))
            .pipe(buffer())
	    .pipe(uglify())
            .pipe(gulp.dest('./assets/manager/'))

});

gulp.task('watch', function(){

    gulp.watch('./src/styles/**/*.styl', ['frontend-css']);
    gulp.watch(['./src/**/*.js', './src/**/*.vue'], ['frontend-js']);

})

gulp.task('default', ['frontend-js', 'frontend-css', 'backend-js']);
