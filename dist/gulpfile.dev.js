"use strict";

// Oligatoire en début de fichier
var gulp = require('gulp'); // Pour SASS


var sass = require('gulp-sass'); // Pour watch


var watch = require('gulp-watch-sass'); // Pour Compress


var minify = require('gulp-minify'); // Variables de chemins


var source = './sass'; // dossier de travail

var destination = './css'; // dossier à livrer
// Pour sass:watch

var watchSass = require("gulp-watch-sass"); // Juste prepros le sass


gulp.task('sass', function () {
  return gulp.src(source + '/*.scss').pipe(sass({
    outputStyle: 'compressed',
    // Decomment for compressing css
    includePaths: ['node_modules/susy/sass']
  }).on('error', sass.logError)).pipe(gulp.dest(destination));
}); // gulp.task('compress', function() {
//   gulp.src(['css/*.css'])
//     .pipe(minify())
//     .pipe(gulp.dest(destination))
// });
// WATCH + Converti le fichier scss de /app en css dans /dist 

gulp.task("sass:watch", function () {
  return watchSass([source + '/*scss']).pipe(sass()).pipe(gulp.dest(destination));
});