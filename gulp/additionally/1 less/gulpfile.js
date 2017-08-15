var gulp = require('gulp'),
	less = require('gulp-less');

gulp.task('less', function(){
	return gulp.src('app/less/style.less')
	// return gulp.src('app/less/*.less')
	// return gulp.src('app/less/**/*')
	.pipe(less())
	.pipe(gulp.dest('app/css'))	//только имя папки
});