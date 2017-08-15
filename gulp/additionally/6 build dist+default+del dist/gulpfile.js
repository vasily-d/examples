var gulp = require('gulp'),
	del  = require('del');

// удалает папку dist
gulp.task('del', function(){
	return del.sync('dist');
});


gulp.task('build', ['del'], function(){
	// присваиваем переменным какие либо действия
	var css = gulp.src('app/css/**/*')
		.pipe(gulp.dest('dist/css'));

	var js = gulp.src('app/js/one.js')
		.pipe(gulp.dest('dist/js'));

	var img = gulp.src('app/img/1.png')
		.pipe(gulp.dest('dist/img'));

	var html = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['build'], function(){
	//
})