const { app } = require('electron');
const path = require('path');
const Database = require('better-sqlite3');

let db;

function init() {
  const userDataPath = app.getPath('userData');
  const dbPath = path.join(userDataPath, 'app.db');
  db = new Database(dbPath);
  db.prepare(`CREATE TABLE IF NOT EXISTS shifts (
    id INTEGER PRIMARY KEY,
    employee TEXT,
    date TEXT,
    sales INTEGER
  )`).run();
  console.log('Database initialized');
}

function getDb() {
  if (!db) throw new Error('DB not initialized!');
  return db;
}

function addShift(employee, date, sales) {
  if (!db) throw new Error('DB not initialized!');
  const stmt = db.prepare('INSERT INTO shifts (employee, date, sales) VALUES (?, ?, ?)');
  stmt.run(employee, date, sales);
}

function deleteShift(id) {
  if (!db) throw new Error('DB not initialized!');
  const stmt = db.prepare('DELETE FROM shifts WHERE id = ?');
  stmt.run(id);
}


module.exports = { init, getDb, addShift, deleteShift };
