const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function comprimeImagens() {
    return gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, comprimeImagens);
exports.watch = function() {
    gulp.watch('./src/styles/**/*.scss', {ignoreInitial: false}, gulp.series(styles));
    gulp.watch('./images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));
} 