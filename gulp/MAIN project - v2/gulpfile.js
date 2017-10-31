var gulp = require('gulp'),
	less = require('gulp-less'),
	browserSync = require('browser-sync')
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	cssnano = require('gulp-cssnano'),	//gulp-csso
	rename = require('gulp-rename'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify');

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('less', function(){
	return gulp.src('app/less/**/*.less')
		.pipe(less())
		.on('error', notify.onError(function(err){
		    return {
		      title: 'Styles',
		      message: err.message
		    };
		  }))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
		.pipe(gulp.dest('app/css'));
		//.pipe(browserSync.reload({stream: true}));
});

gulp.task('ccsnano-rename', ['less'], function(){
	return gulp.src('app/css/style.css')
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('concat-min-rename-js', function(){
	return gulp.src(['app/js/js.js', 'app/js/jquery-3.2.1.js'])
		.pipe(concat('script.js'))
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('img', function(){
	return gulp.src('app/img/**/*.{png,jpg,gif,svg}')
		.pipe(imagemin({
			imagemin.optipng({optimizationLevel: 3}),
			imagemin.jpegtran({progressive: true})
		}))
		.pipe(gulp.dest('dist/img'));
});



gulp.task('build', ['clean', 'img', 'ccsnano-rename', 'concat-min-rename-js'], function(){
	var cssBuild = gulp.src('app/css/style.min.css')
		.pipe(gulp.dest('dist/css'));

	var jsBuild = gulp.src('app/js/script.min.js')
		.pipe(gulp.dest('dist/js'));

	//var imgBuild = gulp.src('app/img/**/*')
	//	.pipe(gulp.dest('dist/img'));

	var fontBuild = gulp.src('app/font/**/*')
		.pipe(gulp.dest('dist/font'));

	var indexBuild = gulp.src('app/index.html')
		.pipe(gulp.dest('dist'));
});

//not less to run!
gulp.task('watch', ['browser-sync', 'ccsnano-rename', 'concat-min-rename-js'], function(){
	gulp.watch('app/less/**/*.less', ['ccsnano-rename']);

	//весь html reload
	gulp.watch('app/*.html', browserSync.reload);

	//внимание на порядок действий в [] при выполнении!
	gulp.watch(['app/js/**/*.js', '!app/js/script.min.js'], ['concat-min-rename-js']);
});

//main point
gulp.task('default', ['watch'], function(){
	//

});