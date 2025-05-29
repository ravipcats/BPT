const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const db = require('./database/db');

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
  db.init();
  createWindow();
});

// IPC handler to get all shifts from DB
ipcMain.handle('get-shifts', async () => {
  const database = db.getDb();
  const rows = database.prepare('SELECT * FROM shifts').all();
  return rows;
});

// IPC handler to add a shift
ipcMain.handle('add-shift', async (event, shift) => {
  db.addShift(shift.employee, shift.date, shift.sales);
  return { success: true };
});

// IPC handler to delete a shift
ipcMain.handle('delete-shift', async (event, id) => {
  db.deleteShift(id);
  return { success: true };
});

// IPC handler to get all employees from DB
ipcMain.handle('get-employees', async () => {
  const database = db.getDb();
  const rows = database.prepare('SELECT * FROM employees').all();
  return rows;
});

// IPC handler to add an employee
ipcMain.handle('add-employee', async (event, employee) => {
  db.addEmployee(employee.name, employee.role);
  return { success: true };
});

