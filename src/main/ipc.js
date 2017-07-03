'use strict';

// IPC通信を行うモジュール
import {ipcMain} from "electron";

import http from 'http';
import fs from 'fs';

ipcMain.on('message', (event, arg) => {
  const url = arg['url'];
  const savepath = arg['savepath'];
  const outfile = fs.createWriteStream(savepath);

  http.get(url, function(res) {
    res.pipe(outfile);
    res.on('end', function () {
      outfile.close();
      event.sender.send('reply', 'ok');
    });
  });
});
