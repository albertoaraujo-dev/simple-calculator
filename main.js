const { app, BrowserWindow } = require('electron')

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 550,
    resizable: false,
  })
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.removeMenu()
})
