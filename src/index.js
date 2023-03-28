const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true
      //devTools: false
    },
    resizable: false
  })

  win.loadFile(__dirname+'/windows/index.html')
  win.setMenuBarVisibility(false)
}

app.whenReady().then(() => {
  createWindow()
})