//IMPORTAÇÃO de pacotes
const gulp = require('gulp'); //npm i --save-dev gulp gulp-sass
const sass = require('gulp-sass')(require('sass')); //npm i --save-dev sass


//CONFIGURANDO 
function styles() {
    return gulp.src('./src/styles/*.scss') // recupera arquivos
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}