//IMPORTAÇÃO de pacotes
const gulp = require('gulp'); //npm i --save-dev gulp gulp-sass
const sass = require('gulp-sass')(require('sass')); //npm i --save-dev sass
const imagemin = require('gulp-imagemin');

//CONFIGURANDO 
function styles() {
    return gulp.src('./src/styles/*.scss') // recupera arquivos
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*') // recupera arquivos
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
        
}

exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}