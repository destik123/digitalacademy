// eslint-disable-next-line object-curly-newline
const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass');

function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: './public/',
        },
        port: 3000,
    });
    done();
}

function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function css() {
    return gulp
        .src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css/'))
        .pipe(browsersync.stream());
}

function watchFiles(done) {
    gulp.watch('./src/scss/*.scss', css);
    gulp.watch('./public/*.html', browserSyncReload);
    done();
}

const watch = gulp.parallel(watchFiles, browserSync);
exports.watch = watch;
