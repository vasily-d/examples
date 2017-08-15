var gulp = require('gulp');

gulp.task('myTask', function(){
	return gulp.src('app')
	.pipe(plugin())
	.pipe(gulp.dest('dist'))
});