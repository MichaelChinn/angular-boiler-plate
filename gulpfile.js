var gulp = require('gulp');
var $ = require('gulp-load-plugins')({"lazy": true});
var browserSync = require('browser-sync');

gulp.task('start', ['browser-sync'], function () {
    return gulp.run('watch');
});

gulp.task('test', [], function () {
    console.log('test');
});

gulp.task('browser-sync', [], function() {
    return browserSync({
        server: {
            baseDir: '../boiler-plate'
        }
    })
});

gulp.task('watch', [], function() {
    return gulp.watch(['index.html', 'app.js', 'style.css'], browserSync.reload);
});