var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");


gulp.task('default', function () {
	return gulp.src('css/*.css')
		.pipe(concatCss('css/bundle.css'))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(rename('bundle.min.css'))
		.pipe(gulp.dest('out'));
});
