var gulp = require('gulp');
var gutil = require('gulp-util');
var babelify = require('babelify'); 
var transform = require('vinyl-transform'); 
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var rmHtmlComments  = require('gulp-remove-html-comments');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var del = require('del');
var ftp = require( 'vinyl-ftp' );
var ghPages = require('gulp-gh-pages');

// Config of project folders
var config = {
  desDir: './dist' /* répértoire de destination (prod) */
}
// Task to build JS files
gulp.task("build-js", function(){
 return browserify("src/main.js",{
    debug: true
  })
  .transform(babelify.configure({
    presets : ['@babel/preset-env']
  }))
  .bundle()
  // display better error message on error
  .on('error', err => {
    gutil.log("Browserify Error", err.message);
    gutil.log(gutil.colors.red('#############################'))
    gutil.log(gutil.colors.red('#############################'))
    gutil.log(gutil.colors.red('[Gulp] Error compilation !!!'))
  })
  .pipe(source("bundle.js"))
  .pipe(gulp.dest(config.desDir + '/js'))
  .pipe(reload({stream:true}));
});

// Task to build JS files 
gulp.task("build-js-prod", function(){
  return browserify("src/app/app.js",{
      debug: false
    })
    .transform(babelify.configure({
      presets : ['@babel/preset-env']
    }))
    .bundle()
    // display better error message on error
    .on('error', err => {
      gutil.log(gutil.colors.red('#############################'))
      gutil.log(gutil.colors.red('#############################'))
      gutil.log(gutil.colors.red('[Gulp] Error compilation !!!'))
    })
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(config.desDir + '/js'));
 });


gulp.task("copy-html", function(){
  return gulp.src(['./src/*.html'])
  .pipe(rmHtmlComments())
  .pipe(gulp.dest(config.desDir))
  .pipe(reload({stream:true}))
});

gulp.task("copy-css", function(){
  return gulp.src(['./src/theme/*.css'])
  .pipe(concatCss("style.css"))
  .pipe(gulp.dest(config.desDir + '/css'))
  .pipe(reload({stream:true}))
});

gulp.task("css-dependecies", function(){
  return gulp.src([
    'node_modules/materialize-css/dist/css/materialize.min.css'
  ])
  .pipe(gulp.dest(config.desDir + '/css'))
});

gulp.task("js-dependecies", function(){
  return gulp.src([
    'node_modules/materialize-css/dist/js/materialize.min.js'
  ])
  .pipe(concat('vendors.js'))
  .pipe(gulp.dest(config.desDir + '/js'))
});

// Task to run local server
gulp.task("startServer",  function(cb) {
  browserSync.init({
    server: {
        baseDir: config.desDir
    },
    notify: true
  }, cb);
});


gulp.task('clean', function (cb) {
  return del('./dist', cb);
});


gulp.task( 'deploy', function () {
  var conn = ftp.create( {
      host:     'xxx',
      user:     'xxx',
      password: 'xxx',
      parallel: 10,
      log:      gutil.log
  });
  var globs = [
      './dist/**/*'
  ];
  // using base = '.' will transfer everything to /public_html correctly
  // turn off buffering in gulp.src for best performance
  return gulp.src( globs, { base: './dist', buffer: false } )
      .pipe( conn.newer( '/public_html' ) ) // only upload newer files
      .pipe( conn.dest( '/public_html/testjs' ) );
});
 
gulp.task('deploy:gh', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});


// speed dev build using parallel()
gulp.task('dev', gulp.parallel(
  'build-js',
  'copy-html',
  'copy-css',
  'js-dependecies',
  'css-dependecies',
));

// use series() for build prod
gulp.task('prod',  gulp.series(
  'clean',
  'build-js-prod',
  'copy-html',
  'copy-css',
  'js-dependecies',
  'css-dependecies',
));

gulp.task('watch', function () {
  gulp.watch('./src/app/**/*.js', { events: 'all' }, gulp.series('build-js'));
  gulp.watch('./src/**/*.html', { events: 'all' }, gulp.series('copy-html'));
  gulp.watch('./src/**/*.css', { events: 'all' }, gulp.series('copy-css'));
});

gulp.task('default',  
  gulp.series('clean', 'dev', 'startServer', 'watch')
);

