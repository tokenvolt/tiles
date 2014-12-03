var gulp        = require('gulp'),
    connect     = require('gulp-connect'),
    jshint      = require('gulp-jshint'),
    uglify      = require('gulp-uglify'),
    clean       = require('gulp-clean'),
    browserify  = require('gulp-browserify'),
    concat      = require('gulp-concat'),
    reactify    = require('reactify'),
    gulpif      = require('gulp-if'),
    sass        = require('gulp-ruby-sass');

var env      = process.env.NODE_ENV || 'development';
var config   = require('./environments/' + env);
var buildDir = 'builds/' + env

// tasks
gulp.task('lint', function() {
  gulp.src(['app/**/*.js', '!./app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('clean', function() {
    gulp.src(buildDir + '/*')
      .pipe(clean({force: true}));
});

gulp.task('styles', function() {
  gulp.src('app/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest(buildDir + '/styles'))
    .on('error', function (err) { console.log(err.message); })
    .pipe(connect.reload())
});

gulp.task('copy-bower-components', function () {
  gulp.src('app/bower_components/**')
    .pipe(gulp.dest(buildDir + '/bower_components'));
});

gulp.task('copy-index', function() {
  gulp.src('app/index.html')
    .pipe(gulp.dest(buildDir))
    .pipe(connect.reload())
});


gulp.task('js', function() {
  gulp.src('app/js/app.js', {read: false})
    .pipe(browserify({
      insertGlobals : false,
      transform: ['reactify'],
      extensions: ['.jsx'],
      debug: config.debug
    }))
    .pipe(gulp.dest(buildDir + '/js'))
    .pipe(connect.reload())
});

gulp.task('connect', function () {
  connect.server({
    root: buildDir,
    port: config.port,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/js/**/*.jsx', ['js']);
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/index.html', ['copy-index']);
})


// default task
gulp.task('default', ['lint',
                      'styles',
                      'js',
                      'copy-bower-components',
                      'copy-index',
                      'watch',
                      'connect']
);

// build task
gulp.task('build');