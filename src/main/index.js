import {app, BrowserWindow} from "electron";
import path from "path";

const ROOT_PATH = "file://" + path.resolve("");

app.on("ready", e => {
  const mainWindow = new BrowserWindow({width: 800, height: 600, "nodeIntegration": false});
  mainWindow.loadURL(`${ROOT_PATH}/app/renderer/index.html`);

  // ChromiumのDevツールを開く
  mainWindow.webContents.openDevTools();
});

app.on("window-all-closed", e => {
  app.quit();
});
