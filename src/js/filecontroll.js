import {remote} from 'electron';
import {ipcRenderer} from 'electron';
import $ from 'jquery';
import marked from 'marked';
const fs = require('fs');
const Dialog = remote.dialog;
const browserWindow = remote.BrowserWindow;

$(function () {
  $('#fileSelect').click(() => {
    Dialog.showOpenDialog(null, {
      properties: ['openDirectory'],
      title: 'フォルダ(単独選択)',
      defaultPath: '.'
    }, (folderNames) => {
      $("#outputDirectory").val(fileNames);
    });
  });
});

/**
 * テキストを読み込み、テキストをログに出力する
 */
function readFile(path) {
  fs.readFile(path, function (error, text) {
    if (error != null) {
      alert('error : ' + error);
      return;
    }
    $("#contents").html(marked(text.toString(), {sanitize: true}));
  });
}

ipcRenderer.send('message', 'ping');
ipcRenderer.on('reply', (event, arg) => {
  console.log(arg);
});
