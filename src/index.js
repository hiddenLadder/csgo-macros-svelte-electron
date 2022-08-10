// This file is the entry point for the Electron application.

const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: 'hidden',
    resizable: false,
    titleBarOverlay: {
      color: '#1C1B21',
      symbolColor: '#ffffff',
    },
    webPreferences: {
      webSecurity: false,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'renderer/public/icon.jpg'),
  })
  win.loadFile(`${__dirname}/renderer/dist/index.html`)
  // win.loadURL('http://localhost:3000/')
}

app.whenReady()
  .then(() => {
    createWindow()

    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on("titlebar", (event, arg) => {
  console.log(event);
})