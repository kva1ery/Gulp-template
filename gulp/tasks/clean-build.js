module.exports = function() {
    $.gulp.task('clean-build', function () {
        return $.gulp.src('build', {read: false})
            .pipe($.gp.clean());
    });
};