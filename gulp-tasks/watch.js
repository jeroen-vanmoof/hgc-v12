var project = require('./_project.js');
var gulp    = require('gulp');

/*
  Watch folders for changess
*/
gulp.task("watch", function () {
  gulp.watch(project.buildSrc + "/meta/**/*", gulp.parallel('meta'));
  gulp.watch(project.buildSrc + "/scss/**/*", gulp.parallel('styles'));
  gulp.watch(project.buildSrc + "/site/**/*",  gulp.parallel('generate'));
});
