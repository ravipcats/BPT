const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getShifts: () => ipcRenderer.invoke('get-shifts'),
  addShift: (shift) => ipcRenderer.invoke('add-shift', shift),
  deleteShift: (id) => ipcRenderer.invoke('delete-shift', id),
  getEmployees: () => ipcRenderer.invoke('get-employees'),
  addEmployee: (employee) => ipcRenderer.invoke('add-employee', employee),
});