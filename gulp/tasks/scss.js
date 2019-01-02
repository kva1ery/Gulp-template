module.exports = function() {
    $.gulp.task('scss', function () {
        return $.gulp.src('src/scss/*.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({outputStyle: 'expanded'}))
            .pipe($.gp.autoprefixer(['last 5 versions', '> 1%'], { cascade: true }))
            .on('error', $.gp.notify.onError({
                message: 'Error: <%= error.message %>',
                title: 'scss error'
            }))
            .pipe($.gp.csso())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/css'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};