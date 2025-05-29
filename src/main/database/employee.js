const db = require('./db');

function addEmployee(name, role) {
  db.prepare('INSERT INTO employees (name, role) VALUES (?, ?)').run(name, role);
}

function getAllEmployees() {
  return db.prepare('SELECT * FROM employees').all();
}

module.exports = { addEmployee, getAllEmployees };