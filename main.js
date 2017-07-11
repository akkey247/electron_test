// Electron側の初期設定
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

// アプリを閉じた時にquit
app.on('window-all-closed', function() {
  app.quit();
});

// アプリ起動後の処理
app.on('ready', function() {
  var sub = require('child_process').spawn('python',['./sub.py']);
  // FIX: Node.jsプロセスだと何故かうまくプロセスが終了しない。プロセスIDが違ってる。
  //var sub = require('child_process').spawn('node',['./sub.js']);
  var rq = require('request-promise');
  var mainAddr = 'http://localhost:5000';

  var openWindow = function() {
    mainWindow = new BrowserWindow({width: 400, height: 300 });
    mainWindow.loadURL(mainAddr);

    // 終了処理
    mainWindow.on('closed', function() {
      mainWindow = null;
      sub.kill('SIGINT');
      console.log('server stoped PID: ' + sub.pid);
    });
  };

  var startUp = function() {
    rq(mainAddr)
      .then(function(htmlString) {
        console.log('server started PID: ' + sub.pid);
        openWindow();
      })
      .catch(function(err) {
        startUp();
      });
  };

  startUp();
});