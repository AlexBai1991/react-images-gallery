var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webpack = require('webpack'),
  sass = require('gulp-ruby-sass'),
  uglify = require('gulp-uglify'),
  minifyCSS = require('gulp-clean-css'),
  del = require('del'),
  rename = require('gulp-rename');

var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');

/**
 * clean
 */
gulp.task('clean', function () {
  del(['dist/*.js','dist/*.css'], { force: true });
});

/**
 * webpack build
 */
gulp.task('build', ['style', 'webpack:build'], function () {

});
gulp.task('webpack:build', function () {
  return gulp.src('./dist/*.debug.js')
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename = path.basename.replace(/\.debug/, '');
    }))
    .pipe(gulp.dest('./dist/'));
});

/**
 * webpack dev
 */
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = 'sourcemap';
myDevConfig.debug = true;

var devComplier = webpack(myDevConfig);

gulp.task('dev', ['style', 'webpack:dev'], function () {

});
gulp.task('webpack:dev', function (callback) {
  devComplier.run(function (err, stats) {
    if (err) throw new gutil.PluginError('webpack:dev', err);
    gutil.log('[webpack:dev]', stats.toString({
      colors: true
    }));
    callback();
  });
});

/**
 * style
 */
gulp.task('style', function () {
  return sass('./src/css/**/*.scss')
    .pipe(rename(function (path) {
      console.log(path);
      path.basename += '.debug';
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(minifyCSS({ debug: true }, function (details) {
      console.log(details.name + 'originalSize: ' + details.stats.originalSize);
      console.log(details.name + 'minifiedSize: ' + details.stats.minifiedSize);
    }))
    .pipe(rename(function (path) {
      path.basename = path.basename.replace(/\.debug/, '');
    }))
    .pipe(gulp.dest('./dist/'));
});

/**
 * webpack-dev-server
 */
gulp.task('webpack-dev-server', function () {
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = 'eval';
  myConfig.debug = true;
  // myConfig.entry.app.unshift(
  //   'webpack-dev-server/client?http://localhost:8090',
  //   'webpack/hot/dev-server'  
  // );
  // myConfig.plugins = myConfig.plugins.concat(
    
  // );

  var myComplier = webpack(myConfig);
  var devServer = new WebpackDevServer(myComplier, {
    publicPath: '/' + myConfig.output.publicPath,
    hot: true,
    historyApiFallback: false,
    stats: {
      colors: true
    }
  });
  devServer.listen(8090, 'localhost', function (err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', 'http://localhost:8090/webpack-dev-server/index.html');
  });
});

/**
 * default
 */
gulp.task('default', ['build'], function () {
  console.log('default task is running.');
});
/**
 * watch
 */
gulp.task('watch', function() {
  gulp.watch(['./src/js/**/*.js'], ['dev']);
  gulp.watch(['./src/css/**/*.scss'], ['style']);
});
