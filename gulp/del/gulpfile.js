var gulp = require('gulp');
var del = require('del');

//tasks
gulp.task('clean', function() {
	return del.sync('temp');
});

//main point
gulp.task('default', ['clean'], function() {
	//
	
});