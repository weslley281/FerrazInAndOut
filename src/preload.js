const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  ipcRenderer: {
    send: (channel, data) => {
      ipcRenderer.send(channel, data);
    },
    receive: (channel, callback) => {
      ipcRenderer.on(channel, (event, ...args) => callback(...args));
    },
  },
});
