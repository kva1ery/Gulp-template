module.exports = function() {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/*.html', $.gulp.series('html'));
        $.gulp.watch('src/scss/**/*.scss', $.gulp.series('scss'));
        $.gulp.watch('src/js/*.js', $.gulp.series('scripts'));
        $.gulp.watch('src/img/**/*.{png,jpg,jpeg,gif}', $.gulp.series('img:dev'));
        $.gulp.watch('src/img/**/*.svg', $.gulp.series('svg'));
    });
};