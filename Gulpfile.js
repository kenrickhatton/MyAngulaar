var gulp = require('gulp'),
	connet = require('gulp-connect');

gulp.task('webserver',function(){
	connet.server();
});

gulp.task('default', ['webserver'])