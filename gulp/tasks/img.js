module.exports = function() {
    $.gulp.task('img:dev', function () {
        return $.gulp.src(['src/img/**/*.{png,jpg,jpeg,gif}'])
            .pipe($.gulp.dest('build/img'))
    });
    $.gulp.task('img:build', function () {
        return $.gulp.src(['src/img/**/*.{png,jpg,jpeg,gif}'])
            .pipe($.gp.tinypng('API_KEY'))
            .pipe($.gulp.dest('build/img'))
    });

    $.gulp.task('svg', function () {
       return $.gulp.src('./src/img/**/*.svg')
           .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
           }))
           .pipe($.gulp.dest('./build/img'))
    });
};