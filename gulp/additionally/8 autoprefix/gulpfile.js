//npm i gulp-autoprefixer --save-dev
var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', function() {
    return gulp.src('css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 3 versions', '> 5%', 'ie 8', 'ie 7'],
			cascade: false
		}))
		.pipe(gulp.dest('autoprefixer'));
});