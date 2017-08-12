var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');

//tasks
gulp.task('console1', function() {
	console.log('console1');	
});

gulp.task('console2', function() {
	console.log('console2');	
});

gulp.task('console3', function() {
	console.log('console3');	
});

gulp.task('cssmin', function() {
	return gulp.src('css/*.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('css/cssmin'));
});

gulp.task('watch', function(callback) {
	runSequence('console1', 'console2', 'cssmin', 'console3', callback);	
});

//main point
gulp.task('default', function() {
	gulp.watch('css/*.css', ['watch']);
});