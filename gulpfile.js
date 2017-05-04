// *** dependencies *** //

const path = require('path');
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const batch = require('gulp-batch');
const runSequence = require('run-sequence');
const nodemon = require('gulp-nodemon');
const plumber = require('gulp-plumber');
const server = require('tiny-lr')();

// *** config *** //

const paths = {
  scripts: [
    path.join('server', '**', '*.js'),
    path.join('server', '*.js')
  ],
  server: path.join('server', 'server.js')
};

const lrPort = 35729;

const nodemonConfig = {
  script: paths.server,
  ext: 'html js css',
  ignore: ['node_modules']
};

// *** default task *** //

gulp.task('default', () => {
  runSequence(
    ['lr'],
    ['nodemon'],
    ['watch']
  );
});

// *** sub tasks ** //
gulp.task('lr', () => {
  server.listen(lrPort, (err) => {
    if (err) {
      return console.error(err);
    }
  });
});

gulp.task('nodemon', () => {
  return nodemon(nodemonConfig);
});

gulp.task('watch', () => {
  gulp.watch(['server/**', 'test/server/**'], batch((events, cb) => {
    return gulp.src(['test/server/**/*.js', 'test/server/*.js'])
    .pipe(mocha({reporter: 'list'}))
    .on('error', (err) => {
      console.log(err.stack);
    });
  }));
});
