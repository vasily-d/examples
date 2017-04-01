var gulp = require('gulp');
var concat = require('gulp-concat');
var uglyfly = require('gulp-uglyfly');	//minify
//var jscs = require('gulp-jscs');
//var babel = require('gulp-babel');

 
gulp.task('default', function() {
	return gulp.src('js/*.js')
		.pipe(concat('all.js'))
		//.pipe(jscs())
		//.pipe(jscs.reporter());
		.pipe(uglyfly())
		//.pipe(babel({
		//        presets: ['es2015']
		//    }))
		.pipe(gulp.dest('dist'));
});