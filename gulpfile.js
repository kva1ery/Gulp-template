'use strict';

let gulp = require('gulp'),
    gp   = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('build'))
        .on('end', browserSync.reload);
});

gulp.task('scss', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(gp.sourcemaps.init())
        .pipe(gp.sass({outputStyle: 'expanded'}))
        .pipe(gp.autoprefixer(['last 5 versions', '> 1%'], { cascade: true }))
        .on('error', gp.notify.onError({
            message: 'Error: <%= error.message %>',
            title: 'scss error'
        }))
        .pipe(gp.csso())
        .pipe(gp.sourcemaps.write())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', function () {
    gulp.watch('src/*.html', gulp.series('html'));
    gulp.watch('src/scss/**/*.scss', gulp.series('scss'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });
});

gulp.task('default',
    gulp.series(
        gulp.parallel('html', 'scss'),
        gulp.parallel('watch', 'serve')
    ));