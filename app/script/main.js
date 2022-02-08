const {app, BrowserWindow, ipcMain, nativeTheme } = require('electron');
const path = require('path');
const ipc = ipcMain;
var mainWindow;

ipcMain.handle('dark-mode:system', () => {
    nativeTheme.themeSource = 'dark'
})

ipc.on('minimizeApp', () => {
	mainWindow.minimize();
});

ipc.on('closeApp', () => {
	mainWindow.close();
});

function createWindow () {
	mainWindow = new BrowserWindow({
		width: 754,
		height: 560,
		minWidth: 754,
		minHeight: 560,
		maxWidth: 754,
		maxHeight: 560,
		frame: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			devTools: true,
			preload: path.join(__dirname, 'preload.js')
		}
	});

	mainWindow.loadFile('web/index.html');
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit();
});