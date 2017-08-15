var gulp = require('gulp'),
	less = require('gulp-less');

gulp.task('less', function(){
	return gulp.src('app/less/style.less')
	.pipe(less())
	.pipe(gulp.dest('app/css'))	//только имя папки
});


gulp.task('watch', function(){
	gulp.watch('app/less/*.less', ['less']);
});