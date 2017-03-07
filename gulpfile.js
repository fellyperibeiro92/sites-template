'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
const strip = require('gulp-strip-comments');
const removeEmptyLines = require('gulp-remove-empty-lines');

const paths = {
    css: [
        './public/css/*.css'
    ],

    js: [
        './public/js/jquery.min.js', //OK
        './public/js/jquery.appear.min.js', //OK
        './public/js/jquery.magnific-popup.min.js', //OK
        './public/js/jquery.themepunch.revolution.min.js', //OK
        './public/js/jquery.themepunch.tools.min.js', //OK
        './public/js/bootstrap.min.js ', //OK
        './public/js/revolution.extension.layeranimation.min.js', //OK
        './public/js/revolution.extension.slideanims.min.js', //OK
        './public/js/revolution.extension.parallax.min.js', //OK
        './public/js/imagesloaded.pkgd.min.js', //OK
        './public/js/owl.carousel.min.js', //OK
        './public/js/main.min.js' //OK
    ]
};

gulp.task('minify:js', function () {
    return gulp.src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(strip())
        .pipe(removeEmptyLines())
        .pipe(gulp.dest('./public/bundle/'));
});


gulp.task('minify:css', function(done) {
    gulp.src(paths.css)
        .pipe(concat('bundle.css'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./public/bundle/'))
        .on('end', done);
});
