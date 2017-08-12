var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var server = require('gulp-server-livereload');

gulp.task('less', function() {
	return gulp.src('css/*.less')
		.pipe(less())
		.pipe(gulp.dest('css'));
});

// run once
gulp.task('live', function() {
	gulp.src('')
		.pipe(server({
		  livereload: true,
		  defaultFile: 'index.html',
		  directoryListing: false,
		  open: false
		}));
});

gulp.task('default', ['live'], function() {
	gulp.watch('css/*.less', ['less']);	
});


/*
	//gulp.run is depricated
gulp.task('default', function(){
	return watch('css/*.less', function(e){
		gulp.run('less');	//depricated
		gulp.run('live');
		console.log('less+livereload');
	});	
});
*/

/*
gulp.task('stream', function () {
    // Endless stream mode 
    return watch('css/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});
 
gulp.task('callback', function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event 
    return watch('css/*.css', function () {
        gulp.src('css/*.css')
            .pipe(gulp.dest('build'));
    });
});
*/