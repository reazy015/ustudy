const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
		.pipe(reload({stream: true}));

});

gulp.task('browserSync', function(){
	browserSync({
		server: {
			baseDir: './'
		},
		port: 3333,
		open: true,
		notify: false
	});
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch', 'browserSync'])
