"use strict";

// Oligatoire en début de fichier
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    // Pour SASS
watch = require('gulp-watch-sass'),
    // Pour watch
watchSass = require("gulp-watch-sass"),
    // sass:watch
minify = require('gulp-minify'),
    // Pour Compress code
imagemin = require('gulp-imagemin'),
    // Pour compress img
imageminWebp = require('imagemin-webp'),
    // Spécifique au WebP
imageminJpegtran = require('imagemin-jpegtran'),
    // Spécifique au jpeg
fs = require('fs'),
    // Pour faire marcher la compression d'image
path = require('path'); // Pour faire marcher la compression d'image


var paths = {
  styles: {
    src: 'src/sass',
    dest: 'src/css'
  },
  scripts: {
    src: 'src/js/*.js',
    dest: 'assets/js'
  },
  html: {
    src: 'views/*.hbs',
    dest: 'assets/'
  },
  images: {
    src: '/var/www/my-theme/content/images/2018/',
    dest: '/var/www/my-theme/content/images/2018/'
  }
}; // Variables de chemins
// var source = 'src/sass'; // dossier de travail
// var destination = 'src/css'; // dossier à livrer
// ---------------------------  PREPROCESSOR --------------------------- //
// Juste prepros le sass

gulp.task('sass', function () {
  return gulp.src(paths.styles.src + '/*.scss').pipe(sass({
    outputStyle: 'compressed',
    // Decomment for compressing css
    includePaths: ['node_modules/susy/sass']
  }).on('error', sass.logError)).pipe(gulp.dest(paths.styles.dest));
}); // gulp.task('compress', function() {
//   gulp.src(['css/*.css'])
//     .pipe(minify())
//     .pipe(gulp.dest(destination))
// });
// WATCH + Converti le fichier scss de /app en css dans /dist 

gulp.task("sass:watch", function () {
  return watchSass([paths.styles.src + '/*scss']).pipe(sass()).pipe(gulp.dest(paths.styles.dest));
});