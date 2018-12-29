'use strict';

let gulp = require('gulp'),
    gp   = require('gulp-load-plugins')();

gulp.task('scss', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(gp.sass({outputStyle: 'expanded'}))
        .pipe(gp.csso())
        .pipe(gulp.dest('build/css'));
});
