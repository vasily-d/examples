var gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css');

//tasks
gulp.task('cssmin', function() {
	return gulp.src('css/*.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('css'));	
});

//main point
gulp.task('default', ['cssmin'], function() {
	//
	
});