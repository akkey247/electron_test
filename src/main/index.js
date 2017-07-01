'use strict';

import {app, BrowserWindow} from "electron";
import path from "path";

const ROOT_PATH = "file://" + path.resolve("");

app.on("ready", e => {
  const mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(`${ROOT_PATH}/app/index.html`);

  // ChromiumのDevツールを開く
  mainWindow.webContents.openDevTools();
});

app.on("window-all-closed", e => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

require('./ipc.js');
