var gulp        = require('gulp');
var browserSync = require('browser-sync');
var watch = watch = require('gulp-watch');
var paths = gulp.paths;


// Static server
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: "."
        }
    });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('default', ['serve'], function () {
  gulp.watch('app/**/*.js',   ['bs-reload']);
  gulp.watch('css/*.css',  ['bs-reload']);
  gulp.watch('*.html', ['bs-reload']);
});
