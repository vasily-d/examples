var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('test', function() {
	console.log('test1');
});

gulp.task('test2', function() {
	console.log('test2');
});

gulp.task('less', function() {
	return gulp.src('css/*.less')
		.pipe(less())
		.pipe(gulp.dest('css'));
});


gulp.task('default', ['test', 'test2'], function() {
	gulp.watch('css/*.less', ['less']);
});