'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();

});

$.gulp.task('default',
    $.gulp.series(
        $.gulp.parallel('html', 'scss', 'scripts', 'img:dev', 'svg'), //Добавить scripts:libs когда появятся библиотеки
        $.gulp.parallel('watch', 'serve')
    ));

$.gulp.task('build',
    $.gulp.series(
        $.gulp.parallel('html', 'scss', 'scripts', 'img:build', 'svg'), //Добавить scripts:libs когда появятся библиотеки
        $.gulp.parallel('watch', 'serve')
    ));

$.gulp.task('clean-build',
    $.gulp.series('clean-build')
);