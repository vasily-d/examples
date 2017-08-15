var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	less = require('gulp-less'),
	rename = require('gulp-rename'),
	cssnano = require('gulp-cssnano'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	del = require('del');

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'	//папка нашего корневика c сайтом, иначе '' если gulp там же
    },
    notify: false
  });
});

gulp.task('concatUglify', function(){
	return gulp.src(['app/js/one.js', 'app/js/two.js'])
	.pipe(concat('js.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))

});

gulp.task('lessNanoRename', function(){
	return gulp.src('app/less/style.less')
	.pipe(less())
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

// удалает папку dist
gulp.task('del', function(){
	return del.sync('dist');
});

gulp.task('build', ['del'], function(){
	var css = gulp.src('app/css/style.min.css')
		.pipe(gulp.dest('dist/css'));

	var js = gulp.src('app/js/js.min.js')
		.pipe(gulp.dest('dist/js'));

	var img = gulp.src('app/img/**/*')
		.pipe(gulp.dest('dist/img'));

	var html = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));
});



gulp.task('default', ['browserSync', 'lessNanoRename', 'concatUglify'], function(){
	gulp.watch('app/less/**/*', ['lessNanoRename']);

	// Обновляем браузер при любых изменениях в HTML или JS
  	gulp.watch('app/*.html', browserSync.reload); 
  	gulp.watch('app/js/**/*.js', ['concatUglify', browserSync.reload]); //?????????????
})