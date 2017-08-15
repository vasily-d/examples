//npm i gulp-cssnano gulp-rename --save-dev
var gulp = require('gulp'),
	cssnano = require('gulp-cssnano'),
	rename = require('gulp-rename');

gulp.task('cssnanorename', function(){
	return gulp.src('app/css/style.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'))
});

