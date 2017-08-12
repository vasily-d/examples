var gulp = require('gulp');

//tasks
gulp.task('moveIndex', function() {
	return gulp.src('app/index.html')
		.pipe(gulp.dest('dist'))
});

gulp.task('moveCss', function() {
	return gulp.src('app/css/*')
		.pipe(gulp.dest('dist/css'))
});

gulp.task('moveImg', function() {
	return gulp.src('app/img/*')
		.pipe(gulp.dest('dist/img'))
});

gulp.task('moveJs', function() {
	return gulp.src('app/js/*')
		.pipe(gulp.dest('dist/js'))
});

//main point
gulp.task('default', ['moveIndex', 'moveCss', 'moveImg', 'moveJs'], function() {
	//
	console.log('moving...');
	
});