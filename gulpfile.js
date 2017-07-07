var gulp = require('gulp');
var gulpif = require('gulp-if');
var sprity = require('sprity');

gulp.task('sprites', function () {
  return sprity.src({
    src: './sprites/*.{png,jpg}',
    style: './sprite.css',
    processor: 'sass'
  })
  .pipe(gulpif('*.png', gulp.dest('./img/'), gulp.dest('./components/')))
});
