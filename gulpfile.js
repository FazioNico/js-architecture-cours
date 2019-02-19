var gulp = require('gulp');
var babel = require('gulp-babel'); 
var babelify = require('babelify'); 
var transform = require('vinyl-transform'); 
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var rmHtmlComments  = require('gulp-remove-html-comments');
var concat = require('gulp-concat');

// Config of project folders
var config = {
  desDir: './dist' /* répértoire de destination (prod) */
}
// Task to build JS files
gulp.task("build-js", function(){
 return browserify("src/app/app.js",{
    debug: true
  })
  .transform(babelify.configure({
    presets : ['@babel/preset-env']
  }))
  .bundle()
  .pipe(source("bundle.js"))
  .pipe(gulp.dest(config.desDir + '/js'))
  .pipe(reload({stream:true}));
});

gulp.task("copy-html", function(){
  return gulp.src(['./src/*.html'])
  .pipe(rmHtmlComments())
  .pipe(gulp.dest(config.desDir))
  .pipe(reload({stream:true}))
});

gulp.task("copy-css", function(){
  return gulp.src(['./src/theme/*.css'])
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

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
// Task to run local server
gulp.task("startServer",  function() {
  browserSync.init({
    server: {
        baseDir: config.desDir
    },
    notify: true
  });
});

gulp.watch('./src/app/**/*.js', { events: 'all' }, gulp.series('build-js'));
gulp.watch('./src/**/*.html', { events: 'all' }, gulp.series('copy-html'));
gulp.watch('./src/**/*.css', { events: 'all' }, gulp.series('copy-css'));

gulp.task('default',  gulp.series(
  'build-js',
  'copy-html',
  'copy-css',
  'js-dependecies',
  'css-dependecies',
  // run startServer at end
  'startServer'
));


