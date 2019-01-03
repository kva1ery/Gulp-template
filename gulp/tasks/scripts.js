module.exports = function() {
    $.gulp.task('scripts', function () {
        return $.gulp.src(['src/js/main.js'])
            .pipe($.gulp.dest('build/js'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('scripts:libs', function () {
        return $.gulp.src(['']) //Добавить пути до библиотек
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('build/js'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};