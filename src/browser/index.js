import {app, BrowserWindow} from "electron";
import path from "path";

const ROOT_PATH = "file://" + path.resolve("");

app.on("ready", e => {
  const mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(`${ROOT_PATH}/app/renderer/index.html`);
});

app.on("window-all-closed", e => {
  app.quit();
});
