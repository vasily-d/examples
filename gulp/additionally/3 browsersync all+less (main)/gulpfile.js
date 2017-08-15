//npm i browser-sync --save-dev
//npm i gulp-less --save-dev
var gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync');

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'	//папка нашего корневика c сайтом, иначе '' если gulp там же
    },
    notify: false
  });
});

gulp.task('less', function(){
  return gulp.src('app/less/*.less')
  .pipe(less())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream: true}))
});


gulp.task('default', ['browserSync', 'less'], function (){
  gulp.watch('app/less/**/*.less', ['less']);
  
  //gulp.watch('app/less/**/*', browserSync.reload); 
  //gulp.watch('app/css/**/*.css', browserSync.reload); 
  
  // Обновляем браузер при любых изменениях в HTML или JS
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
});