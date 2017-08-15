//npm i gulp-concat --save-dev
//npm i gulp-uglify --save-dev
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

gulp.task('concat', function(){
	return gulp.src(['app/js/one.js', 'app/js/two.js'])
	.pipe(concat('result.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
});