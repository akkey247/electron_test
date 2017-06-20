'use strict';

var gulp = require('gulp');
var packager = require('electron-packager');

// パッケージ作成(Windows)
gulp.task('package:win32', function (done) {
  packager({
    dir: './',                // アプリケーションのパッケージとなるディレクトリ
    out: './dist',            // .app や .exeの出力先ディレクトリ
    name: 'ElectronApp',      // アプリケーション名
    arch: 'x64',              // CPU種別. x64 or ia32
    platform: 'win32',        // OS種別. darwin or win32 or linux
    version: '1.4.13',        // Electronのversion
    overwrite: true           // 上書き
  }, function (err, path) {
    // 追加でパッケージに手を加えたければ, path配下を適宜いじる
    done();
  });
});