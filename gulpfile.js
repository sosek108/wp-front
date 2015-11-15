var gulp = require('gulp');
var sass = require('gulp-sass');

var sprite = require('gulp-svg-sprite');

gulp.task('sass', function() {
    gulp.src('./source/scss/application.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./source/scss/*.scss', ['sass']);
});

gulp.task('sprite', function() {
    var config = {
        mode: {
            view: {
                render: {
                    css: true
                }
            }
        },
        sprite: 'sprite.css.svg'
    }
    gulp.src('./source/icons/*.svg')
        .pipe(sprite(config))
        .pipe(gulp.dest('./icons'));
});