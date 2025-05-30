const { app, BrowserWindow } = require('electron');
const path = require('path');
const db = require('./database/db'); // Just to initialize the DB

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../main/preload.js')
    }
  });
  win.loadFile('src/renderer/index.html');
}

app.whenReady().then(() => {
  createWindow();
});

