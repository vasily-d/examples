var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('default', function() {
	gulp.src('img/*.{png,jpg,jpeg}')
		.pipe(imagemin())
		.pipe(gulp.dest('imagemin'));
});