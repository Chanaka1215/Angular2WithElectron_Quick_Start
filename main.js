"use strict";
/**
 * Created by Chanaka Fernando on 3/25/2017.
 */
/// <reference path="typings/index.d.ts" />
var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
// Global reference to the main window, so the garbage collector doesn't close it.
var mainWindow;
// Opens the main window, with a native menu bar.
function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        minWidth: 800,
        minHeight: 600,
        width: 1024,
        height: 768,
        frame: true
    });
    // and load the index.html of the app.
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    // Open the DevTools.
    // mainWindow.webContents.openDevTools();
    // Emitted when the window is closed.
    mainWindow.on("closed", function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}
// Call 'createWindow()' on startup.
app.on("ready", function () {
    createWindow();
});
// On OS X it is common for applications and their menu bar to stay active until the user quits explicitly
// with Cmd + Q.
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
// On OS X it's common to re-create a window in the app when the dock icon is clicked and there are no other
// windows open.
app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map