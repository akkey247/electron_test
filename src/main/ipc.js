'use strict';

// IPC通信を行うモジュール
import {ipcMain} from "electron";

ipcMain.on('message', (event, arg) => {
  console.log(arg);
  event.sender.send('reply', 'pong');
});