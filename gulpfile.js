var gulp = require('gulp');
var sass = require('gulp-sass');
  
gulp.task('sass', function () {
    return gulp.src('style/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('style/style.scss', ['sass']);
});