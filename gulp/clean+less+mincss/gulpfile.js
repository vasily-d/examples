var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-less');
var del = require('del');

//tasks
gulp.task('clean', function(){
	return del.sync('css/*.css');	
});

gulp.task('less', function(){
	return gulp.src('css/*.less')
		.pipe(less())
		.pipe(gulp.dest('css'));
});

gulp.task('cssmin', function(){
	return gulp.src('css/*.css')
		.pipe(cssmin({compatibility: 'ie8'}))
		.pipe(gulp.dest('css'));
});

gulp.task('log', function(){
	console.log('change html');
});


//main point
gulp.task('default', ['clean'], function(){
	//clean + less to css + min css
	gulp.watch('css/*.less', ['less', 'cssmin']);
	
	//watch change *.html - add
	gulp.watch('*.html', ['log']);
});