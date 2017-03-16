var gulp = require('gulp');
var ngc = require('gulp-ngc');
var del = require('del');
var tsLint = require('gulp-tslint');
var inlineResources = require('inline-ng2-resources');
var runSequence = require('run-sequence');


gulp.task('watch', () => {
  gulp.watch('./src/**/*', ['build.ts', 'clean.staging']);
});

gulp.task('build', (done) => {
  runSequence(
    'clean.dist',
    'build.ts',
    'clean.staging',
    done);
});

gulp.task('clean.staging', () => del(['staging']));

gulp.task('clean.dist', () => del(['dist']));

gulp.task('build.ts', (done) => {
  runSequence(
    'tslint',
    'copy-to-staging-and-inline-resources',
    'compile.ts',
    done);
});

gulp.task('tslint', () => {
  return gulp.src('./src/**/*.ts')
    .pipe(tsLint({
      configuration: 'tslint.json',
      formatter: 'prose'
    }))
    .pipe(tsLint.report({
      summarizeFailureOutput: true
    }))
});

gulp.task('copy-to-staging-and-inline-resources', (done) => {
  runSequence(
    'copy-to-staging.src',
    'copy-to-staging.index',
    'inline-resources',
    done);
});

gulp.task('compile.ts', () => {
  return ngc('tsconfig.json');
});

gulp.task('inline-resources', (done) => {
  inlineResources('./staging/src');
  done();
});

gulp.task('copy-to-staging.src', () => {
  return gulp.src('./src/**/*')
    .pipe(gulp.dest('./staging/src'))
});

gulp.task('copy-to-staging.index', () => {
  return gulp.src('index.ts')
    .pipe(gulp.dest('./staging'))
})
