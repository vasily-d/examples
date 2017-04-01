const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', function() {
    gulp.src('css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 3 versions', '> 5%', 'ie 8', 'ie 7'],
			cascade: false
		}))
		.pipe(gulp.dest('autoprefixer'));
});