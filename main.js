const { app, ipcMain,BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 640,
    height: 360,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile("index.html")


}


app.whenReady().then(createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


ipcMain.on("Timer",(event,args)=>{
  CreateTimerWindow(args)
  
})








function CreateTimerWindow (time) {
  const win = new BrowserWindow({
    width: 640,
    height: 360,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile("timer.html")
  win.webContents.once('dom-ready', () => {
    win.webContents.send("time",time);
  })
}