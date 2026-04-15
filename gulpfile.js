var gulp        = require('gulp');
var browserSync = require('browser-sync').create(); // Updated for BS 3.x
var sass        = require('gulp-sass')(require('sass')); // Updated for Dart Sass
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var cssnano     = require('gulp-cssnano');

var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'}).on('close', done);
});

/**
 * Compile sass files
 */
gulp.task('sass', function () {
    return gulp.src('assets/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix(['last 3 versions']))
        .pipe(cssnano())
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', gulp.series('jekyll-build', function (done) {
    browserSync.reload();
    done();
}));

/**
 * Launch the Server
 */
gulp.task('browser-sync', function(done) {
    browserSync.init({
        server: {
            baseDir: '_site'
        }
    });
    done();
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['assets/scss/*.scss', 'assets/scss/*/*.scss'], gulp.series('sass'));
    gulp.watch(['*.html', '_layouts/*.html', '_posts/*'], gulp.series('jekyll-rebuild'));
});

/**
 * Default task
 */
gulp.task('default', gulp.series('sass', 'jekyll-build', gulp.parallel('browser-sync', 'watch')));