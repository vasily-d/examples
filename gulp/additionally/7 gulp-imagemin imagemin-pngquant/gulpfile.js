// npm i --save-dev gulp-imagemin imagemin-pngquant
var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
		.pipe(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			une: [pngquant()]
		}))
		.pipe(gulp.dest('dist/img'));
});