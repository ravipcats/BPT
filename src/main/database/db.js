const { app } = require('electron');
const path = require('path');
const Database = require('better-sqlite3');

let db;

function init() {
  const userDataPath = app.getPath('userData');
  const dbPath = path.join(userDataPath, 'app.db');
  db = new Database(dbPath);

  // shifts table
  db.prepare(`CREATE TABLE IF NOT EXISTS shifts (
    id INTEGER PRIMARY KEY,
    employee TEXT,
    date TEXT,
    sales INTEGER
  )`).run();

  // addmoney table
  db.prepare(`CREATE TABLE IF NOT EXISTS addmoney (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    note500 INTEGER DEFAULT 0,
    note200 INTEGER DEFAULT 0,
    note100 INTEGER DEFAULT 0,
    note50 INTEGER DEFAULT 0,
    note20 INTEGER DEFAULT 0,
    note10 INTEGER DEFAULT 0,
    coins REAL DEFAULT 0.00,
    total_amount REAL DEFAULT 0.00,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();

  // adminsignup table
  db.prepare(`CREATE TABLE IF NOT EXISTS adminsignup (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    aadhaar TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();

  // advancea table
  db.prepare(`CREATE TABLE IF NOT EXISTS advancea (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    advancea TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // advanceb table
  db.prepare(`CREATE TABLE IF NOT EXISTS advanceb (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    advanceb TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // advancec table
  db.prepare(`CREATE TABLE IF NOT EXISTS advancec (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    advancec TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // attendance table
  db.prepare(`CREATE TABLE IF NOT EXISTS attendance (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_name TEXT NOT NULL,
    in_time TEXT NOT NULL,
    out_time TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // bank table
  db.prepare(`CREATE TABLE IF NOT EXISTS bank (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    denomination INTEGER NOT NULL,
    pieces INTEGER NOT NULL,
    amount REAL NOT NULL,
    date_time TEXT NOT NULL
  )`).run();

  // banka2 table
  db.prepare(`CREATE TABLE IF NOT EXISTS banka2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    denomination INTEGER NOT NULL,
    pieces INTEGER NOT NULL,
    amount REAL NOT NULL,
    date_time TEXT NOT NULL
  )`).run();

  // banka3 table
  db.prepare(`CREATE TABLE IF NOT EXISTS banka3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    denomination INTEGER NOT NULL,
    pieces INTEGER NOT NULL,
    amount REAL NOT NULL,
    date_time TEXT NOT NULL
  )`).run();

  // banka4 table
  db.prepare(`CREATE TABLE IF NOT EXISTS banka4 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    denomination INTEGER NOT NULL,
    pieces INTEGER NOT NULL,
    amount REAL NOT NULL,
    date_time TEXT NOT NULL
  )`).run();

  // bankb1 table
  db.prepare(`CREATE TABLE IF NOT EXISTS bankb1 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    denomination INTEGER NOT NULL,
    pieces INTEGER NOT NULL,
    amount REAL NOT NULL,
    date_time TEXT NOT NULL
  )`).run();

  // bankb2 table
  db.prepare(`CREATE TABLE IF NOT EXISTS bankb2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    denomination INTEGER NOT NULL,
    pieces INTEGER NOT NULL,
    amount REAL NOT NULL,
    date_time TEXT NOT NULL
  )`).run();

  // bankb3 table
  db.prepare(`CREATE TABLE IF NOT EXISTS bankb3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    denomination INTEGER NOT NULL,
    pieces INTEGER NOT NULL,
    amount REAL NOT NULL,
    date_time TEXT NOT NULL
  )`).run();

  // bankb4 table
  db.prepare(`CREATE TABLE IF NOT EXISTS bankb4 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    denomination INTEGER NOT NULL,
    pieces INTEGER NOT NULL,
    amount REAL NOT NULL,
    date_time TEXT NOT NULL
  )`).run();

  // bankc1 table
  db.prepare(`CREATE TABLE IF NOT EXISTS bankc1 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    denomination INTEGER NOT NULL,
    pieces INTEGER NOT NULL,
    amount REAL NOT NULL,
    date_time TEXT NOT NULL
  )`).run();

  // bankc2 table
  db.prepare(`CREATE TABLE IF NOT EXISTS bankc2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    denomination INTEGER NOT NULL,
    pieces INTEGER NOT NULL,
    amount REAL NOT NULL,
    date_time TEXT NOT NULL
  )`).run();

  // bankc3 table
  db.prepare(`CREATE TABLE IF NOT EXISTS bankc3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    denomination INTEGER NOT NULL,
    pieces INTEGER NOT NULL,
    amount REAL NOT NULL,
    date_time TEXT NOT NULL
  )`).run();

  // bankc4 table
  db.prepare(`CREATE TABLE IF NOT EXISTS bankc4 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    denomination INTEGER NOT NULL,
    pieces INTEGER NOT NULL,
    amount REAL NOT NULL,
    date_time TEXT NOT NULL
  )`).run();

  // challans table
  db.prepare(`CREATE TABLE IF NOT EXISTS challans (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    challan_no TEXT NOT NULL UNIQUE,
    challan_date TEXT NOT NULL,
    customer TEXT NOT NULL,
    shift TEXT NOT NULL,
    vehicle_no TEXT NOT NULL,
    shift_date TEXT NOT NULL,
    employee TEXT NOT NULL,
    grand_total REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // challan_items table
  db.prepare(`CREATE TABLE IF NOT EXISTS challan_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    challan_id INTEGER NOT NULL,
    product TEXT NOT NULL,
    quantity REAL NOT NULL,
    uom TEXT NOT NULL,
    rate REAL NOT NULL,
    total_amount REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (challan_id) REFERENCES challans(id) ON DELETE CASCADE
  )`).run();

  // challanslip table
  db.prepare(`CREATE TABLE IF NOT EXISTS challanslip (
    slip_no INTEGER NOT NULL,
    Challan_Date TEXT NOT NULL,
    customer_name TEXT NOT NULL,
    shift TEXT NOT NULL,
    shift_date TEXT NOT NULL,
    vehicle_no INTEGER NOT NULL,
    employee_name TEXT NOT NULL,
    item TEXT NOT NULL,
    uom TEXT NOT NULL,
    rate INTEGER NOT NULL,
    qty TEXT NOT NULL,
    Total_Amt TEXT NOT NULL
  )`).run();

  // collection table
  db.prepare(`CREATE TABLE IF NOT EXISTS collection (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Date_And_Time TEXT NOT NULL,
    Employee_Name1 TEXT NOT NULL,
    Collection_Name1 TEXT NOT NULL,
    Collection_Name2 TEXT NOT NULL,
    Amount1 REAL NOT NULL,
    Amount2 REAL NOT NULL,
    Employee_Name2 TEXT NOT NULL
  )`).run();

  // collectiona2 table
  db.prepare(`CREATE TABLE IF NOT EXISTS collectiona2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Date_And_Time TEXT NOT NULL,
    Employee_Name1 TEXT NOT NULL,
    Collection_Name1 TEXT NOT NULL,
    Collection_Name2 TEXT NOT NULL,
    Amount1 REAL NOT NULL,
    Amount2 REAL NOT NULL,
    Employee_Name2 TEXT NOT NULL
  )`).run();

  // collectiona3 table
  db.prepare(`CREATE TABLE IF NOT EXISTS collectiona3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Date_And_Time TEXT NOT NULL,
    Employee_Name1 TEXT NOT NULL,
    Collection_Name1 TEXT NOT NULL,
    Collection_Name2 TEXT NOT NULL,
    Amount1 REAL NOT NULL,
    Amount2 REAL NOT NULL,
    Employee_Name2 TEXT NOT NULL
  )`).run();

  // collectiona4 table
  db.prepare(`CREATE TABLE IF NOT EXISTS collectiona4 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Date_And_Time TEXT NOT NULL,
    Employee_Name1 TEXT NOT NULL,
    Collection_Name1 TEXT NOT NULL,
    Collection_Name2 TEXT NOT NULL,
    Amount1 REAL NOT NULL,
    Amount2 REAL NOT NULL,
    Employee_Name2 TEXT NOT NULL
  )`).run();

  // collectionb1 table
  db.prepare(`CREATE TABLE IF NOT EXISTS collectionb1 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Date_And_Time TEXT NOT NULL,
    Employee_Name1 TEXT NOT NULL,
    Collection_Name1 TEXT NOT NULL,
    Collection_Name2 TEXT NOT NULL,
    Amount1 REAL NOT NULL,
    Amount2 REAL NOT NULL,
    Employee_Name2 TEXT NOT NULL
  )`).run();

  // collectionb2 table
  db.prepare(`CREATE TABLE IF NOT EXISTS collectionb2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Date_And_Time TEXT NOT NULL,
    Employee_Name1 TEXT NOT NULL,
    Collection_Name1 TEXT NOT NULL,
    Collection_Name2 TEXT NOT NULL,
    Amount1 REAL NOT NULL,
    Amount2 REAL NOT NULL,
    Employee_Name2 TEXT NOT NULL
  )`).run();

  // collectionb3 table
  db.prepare(`CREATE TABLE IF NOT EXISTS collectionb3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Date_And_Time TEXT NOT NULL,
    Employee_Name1 TEXT NOT NULL,
    Collection_Name1 TEXT NOT NULL,
    Collection_Name2 TEXT NOT NULL,
    Amount1 REAL NOT NULL,
    Amount2 REAL NOT NULL,
    Employee_Name2 TEXT NOT NULL
  )`).run();

  // collectionb4 table
  db.prepare(`CREATE TABLE IF NOT EXISTS collectionb4 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Date_And_Time TEXT NOT NULL,
    Employee_Name1 TEXT NOT NULL,
    Collection_Name1 TEXT NOT NULL,
    Collection_Name2 TEXT NOT NULL,
    Amount1 REAL NOT NULL,
    Amount2 REAL NOT NULL,
    Employee_Name2 TEXT NOT NULL
  )`).run();

  // collectionc1 table
  db.prepare(`CREATE TABLE IF NOT EXISTS collectionc1 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Date_And_Time TEXT NOT NULL,
    Employee_Name1 TEXT NOT NULL,
    Collection_Name1 TEXT NOT NULL,
    Collection_Name2 TEXT NOT NULL,
    Amount1 REAL NOT NULL,
    Amount2 REAL NOT NULL,
    Employee_Name2 TEXT NOT NULL
  )`).run();

  // collectionc2 table
  db.prepare(`CREATE TABLE IF NOT EXISTS collectionc2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Date_And_Time TEXT NOT NULL,
    Employee_Name1 TEXT NOT NULL,
    Collection_Name1 TEXT NOT NULL,
    Collection_Name2 TEXT NOT NULL,
    Amount1 REAL NOT NULL,
    Amount2 REAL NOT NULL,
    Employee_Name2 TEXT NOT NULL
  )`).run();

  // collectionc3 table
  db.prepare(`CREATE TABLE IF NOT EXISTS collectionc3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Date_And_Time TEXT NOT NULL,
    Employee_Name1 TEXT NOT NULL,
    Collection_Name1 TEXT NOT NULL,
    Collection_Name2 TEXT NOT NULL,
    Amount1 REAL NOT NULL,
    Amount2 REAL NOT NULL,
    Employee_Name2 TEXT NOT NULL
  )`).run();

  // collectionc4 table
  db.prepare(`CREATE TABLE IF NOT EXISTS collectionc4 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Date_And_Time TEXT NOT NULL,
    Employee_Name1 TEXT NOT NULL,
    Collection_Name1 TEXT NOT NULL,
    Collection_Name2 TEXT NOT NULL,
    Amount1 REAL NOT NULL,
    Amount2 REAL NOT NULL,
    Employee_Name2 TEXT NOT NULL
  )`).run();

  // customer table
  db.prepare(`CREATE TABLE IF NOT EXISTS customer (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_name TEXT NOT NULL,
    gst_no TEXT NOT NULL,
    pan_no TEXT NOT NULL,
    contact_no TEXT NOT NULL,
    contact_person_no TEXT NOT NULL
  )`).run();

  // employee table
  db.prepare(`CREATE TABLE IF NOT EXISTS employee (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    company_name TEXT NOT NULL,
    pan_no TEXT NOT NULL,
    contact_no TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();

  // employeesignup table
  db.prepare(`CREATE TABLE IF NOT EXISTS employeesignup (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    aadhaar TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();

  // expense table
  db.prepare(`CREATE TABLE IF NOT EXISTS expense (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    expense_name TEXT NOT NULL,
    amount REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now')),
    vehicle_number TEXT
  )`).run();

  // expensea2 table
  db.prepare(`CREATE TABLE IF NOT EXISTS expensea2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    expense_name TEXT NOT NULL,
    vehicle_number TEXT NOT NULL,
    amount REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // expensea3 table
  db.prepare(`CREATE TABLE IF NOT EXISTS expensea3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    expense_name TEXT NOT NULL,
    vehicle_number TEXT NOT NULL,
    amount REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // expensea4 table
  db.prepare(`CREATE TABLE IF NOT EXISTS expensea4 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    expense_name TEXT NOT NULL,
    vehicle_number TEXT NOT NULL,
    amount REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // expenseb1 table
  db.prepare(`CREATE TABLE IF NOT EXISTS expenseb1 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    expense_name TEXT NOT NULL,
    vehicle_number TEXT NOT NULL,
    amount REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // expenseb2 table
  db.prepare(`CREATE TABLE IF NOT EXISTS expenseb2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    expense_name TEXT NOT NULL,
    vehicle_number TEXT NOT NULL,
    amount REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // expenseb3 table
  db.prepare(`CREATE TABLE IF NOT EXISTS expenseb3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    expense_name TEXT NOT NULL,
    vehicle_number TEXT NOT NULL,
    amount REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // expenseb4 table
  db.prepare(`CREATE TABLE IF NOT EXISTS expenseb4 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    expense_name TEXT NOT NULL,
    vehicle_number TEXT NOT NULL,
    amount REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // expensec1 table
  db.prepare(`CREATE TABLE IF NOT EXISTS expensec1 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    expense_name TEXT NOT NULL,
    vehicle_number TEXT NOT NULL,
    amount REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // expensec2 table
  db.prepare(`CREATE TABLE IF NOT EXISTS expensec2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    expense_name TEXT NOT NULL,
    vehicle_number TEXT NOT NULL,
    amount REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // expensec3 table
  db.prepare(`CREATE TABLE IF NOT EXISTS expensec3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    expense_name TEXT NOT NULL,
    vehicle_number TEXT NOT NULL,
    amount REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // expensec4 table
  db.prepare(`CREATE TABLE IF NOT EXISTS expensec4 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    expense_name TEXT NOT NULL,
    vehicle_number TEXT NOT NULL,
    amount REAL NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`).run();

  // expenses table
  db.prepare(`CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    expense_date TEXT NOT NULL,
    employee TEXT NOT NULL,
    expense_name TEXT NOT NULL,
    amount REAL NOT NULL
  )`).run();

  // item table
  db.prepare(`CREATE TABLE IF NOT EXISTS item (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    item_name TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`).run();

  // liquida1 table
  db.prepare(`CREATE TABLE IF NOT EXISTS liquida1 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datetime TEXT NOT NULL,
    product1 TEXT,
    product2 TEXT,
    product3 TEXT,
    product4 TEXT,
    employee1 TEXT,
    employee2 TEXT,
    employee3 TEXT,
    employee4 TEXT,
    xg1_start_reading REAL,
    xg2_start_reading REAL,
    ms1_close_reading REAL,
    ms2_close_reading REAL,
    xg1_net_sale REAL,
    xg2_net_sale REAL,
    ms1_net_sale REAL,
    ms2_net_sale REAL,
    xg1_rate REAL,
    xg2_rate REAL,
    ms1_rate REAL,
    ms2_rate REAL,
    xg1_total_amount REAL,
    xg2_total_amount REAL,
    ms1_total_amount REAL,
    ms2_total_amount REAL,
    ms1_start_reading INTEGER,
    ms2_start_reading INTEGER,
    xg1_close_reading INTEGER,
    xg2_close_reading INTEGER
  )`).run();

  // liquida2 table
  db.prepare(`CREATE TABLE IF NOT EXISTS liquida2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datetime TEXT NOT NULL,
    product1 TEXT,
    product2 TEXT,
    product3 TEXT,
    product4 TEXT,
    employee1 TEXT,
    employee2 TEXT,
    employee3 TEXT,
    employee4 TEXT,
    xg1_start_reading REAL,
    xg2_start_reading REAL,
    ms1_close_reading REAL,
    ms2_close_reading REAL,
    xg1_net_sale REAL,
    xg2_net_sale REAL,
    ms1_net_sale REAL,
    ms2_net_sale REAL,
    xg1_rate REAL,
    xg2_rate REAL,
    ms1_rate REAL,
    ms2_rate REAL,
    xg1_total_amount REAL,
    xg2_total_amount REAL,
    ms1_total_amount REAL,
    ms2_total_amount REAL,
    ms1_start_reading INTEGER,
    ms2_start_reading INTEGER,
    xg1_close_reading INTEGER,
    xg2_close_reading INTEGER
  )`).run();

  // liquida3 table
  db.prepare(`CREATE TABLE IF NOT EXISTS liquida3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datetime TEXT NOT NULL,
    product1 TEXT,
    product2 TEXT,
    product3 TEXT,
    product4 TEXT,
    employee1 TEXT,
    employee2 TEXT,
    employee3 TEXT,
    employee4 TEXT,
    xg1_start_reading REAL,
    xg2_start_reading REAL,
    ms1_close_reading REAL,
    ms2_close_reading REAL,
    xg1_net_sale REAL,
    xg2_net_sale REAL,
    ms1_net_sale REAL,
    ms2_net_sale REAL,
    xg1_rate REAL,
    xg2_rate REAL,
    ms1_rate REAL,
    ms2_rate REAL,
    xg1_total_amount REAL,
    xg2_total_amount REAL,
    ms1_total_amount REAL,
    ms2_total_amount REAL,
    ms1_start_reading INTEGER,
    ms2_start_reading INTEGER,
    xg1_close_reading INTEGER,
    xg2_close_reading INTEGER
  )`).run();

  // liquida4 table
  db.prepare(`CREATE TABLE IF NOT EXISTS liquida4 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datetime TEXT NOT NULL,
    product1 TEXT,
    product2 TEXT,
    product3 TEXT,
    product4 TEXT,
    employee1 TEXT,
    employee2 TEXT,
    employee3 TEXT,
    employee4 TEXT,
    xg1_start_reading REAL,
    xg2_start_reading REAL,
    ms1_close_reading REAL,
    ms2_close_reading REAL,
    xg1_net_sale REAL,
    xg2_net_sale REAL,
    ms1_net_sale REAL,
    ms2_net_sale REAL,
    xg1_rate REAL,
    xg2_rate REAL,
    ms1_rate REAL,
    ms2_rate REAL,
    xg1_total_amount REAL,
    xg2_total_amount REAL,
    ms1_total_amount REAL,
    ms2_total_amount REAL,
    ms1_start_reading INTEGER,
    ms2_start_reading INTEGER,
    xg1_close_reading INTEGER,
    xg2_close_reading INTEGER
  )`).run();

  // liquidb1 table
  db.prepare(`CREATE TABLE IF NOT EXISTS liquidb1 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datetime TEXT NOT NULL,
    product1 TEXT,
    product2 TEXT,
    product3 TEXT,
    product4 TEXT,
    employee1 TEXT,
    employee2 TEXT,
    employee3 TEXT,
    employee4 TEXT,
    xg1_start_reading REAL,
    xg2_start_reading REAL,
    ms1_close_reading REAL,
    ms2_close_reading REAL,
    xg1_net_sale REAL,
    xg2_net_sale REAL,
    ms1_net_sale REAL,
    ms2_net_sale REAL,
    xg1_rate REAL,
    xg2_rate REAL,
    ms1_rate REAL,
    ms2_rate REAL,
    xg1_total_amount REAL,
    xg2_total_amount REAL,
    ms1_total_amount REAL,
    ms2_total_amount REAL,
    ms1_start_reading INTEGER,
    ms2_start_reading INTEGER,
    xg1_close_reading INTEGER,
    xg2_close_reading INTEGER
  )`).run();

  // liquidb2 table
  db.prepare(`CREATE TABLE IF NOT EXISTS liquidb2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datetime TEXT NOT NULL,
    product1 TEXT,
    product2 TEXT,
    product3 TEXT,
    product4 TEXT,
    employee1 TEXT,
    employee2 TEXT,
    employee3 TEXT,
    employee4 TEXT,
    xg1_start_reading REAL,
    xg2_start_reading REAL,
    ms1_close_reading REAL,
    ms2_close_reading REAL,
    xg1_net_sale REAL,
    xg2_net_sale REAL,
    ms1_net_sale REAL,
    ms2_net_sale REAL,
    xg1_rate REAL,
    xg2_rate REAL,
    ms1_rate REAL,
    ms2_rate REAL,
    xg1_total_amount REAL,
    xg2_total_amount REAL,
    ms1_total_amount REAL,
    ms2_total_amount REAL,
    ms1_start_reading INTEGER,
    ms2_start_reading INTEGER,
    xg1_close_reading INTEGER,
    xg2_close_reading INTEGER
  )`).run();

  // liquidb3 table
  db.prepare(`CREATE TABLE IF NOT EXISTS liquidb3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datetime TEXT NOT NULL,
    product1 TEXT,
    product2 TEXT,
    product3 TEXT,
    product4 TEXT,
    employee1 TEXT,
    employee2 TEXT,
    employee3 TEXT,
    employee4 TEXT,
    xg1_start_reading REAL,
    xg2_start_reading REAL,
    ms1_close_reading REAL,
    ms2_close_reading REAL,
    xg1_net_sale REAL,
    xg2_net_sale REAL,
    ms1_net_sale REAL,
    ms2_net_sale REAL,
    xg1_rate REAL,
    xg2_rate REAL,
    ms1_rate REAL,
    ms2_rate REAL,
    xg1_total_amount REAL,
    xg2_total_amount REAL,
    ms1_total_amount REAL,
    ms2_total_amount REAL,
    ms1_start_reading INTEGER,
    ms2_start_reading INTEGER,
    xg1_close_reading INTEGER,
    xg2_close_reading INTEGER
  )`).run();

  // liquidb4 table
  db.prepare(`CREATE TABLE IF NOT EXISTS liquidb4 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datetime TEXT NOT NULL,
    product1 TEXT,
    product2 TEXT,
    product3 TEXT,
    product4 TEXT,
    employee1 TEXT,
    employee2 TEXT,
    employee3 TEXT,
    employee4 TEXT,
    xg1_start_reading REAL,
    xg2_start_reading REAL,
    ms1_close_reading REAL,
    ms2_close_reading REAL,
    xg1_net_sale REAL,
    xg2_net_sale REAL,
    ms1_net_sale REAL,
    ms2_net_sale REAL,
    xg1_rate REAL,
    xg2_rate REAL,
    ms1_rate REAL,
    ms2_rate REAL,
    xg1_total_amount REAL,
    xg2_total_amount REAL,
    ms1_total_amount REAL,
    ms2_total_amount REAL,
    ms1_start_reading INTEGER,
    ms2_start_reading INTEGER,
    xg1_close_reading INTEGER,
    xg2_close_reading INTEGER
  )`).run();

  // shift table
  db.prepare(`CREATE TABLE IF NOT EXISTS shift (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    shifta1_datetime TEXT NOT NULL,
    shifta1_product1 TEXT,
    shifta1_product2 TEXT,
    shifta1_emp1 TEXT,
    shifta1_emp2 TEXT,
    shifta1_nozzle1 TEXT,
    shifta1_nozzle2 TEXT,
    xp_paytmM1 TEXT,
    ms_paytmM2 TEXT,
    xp_paytm_amount REAL,
    ms_paytm_amount REAL,
    xp_cardM1 TEXT,
    ms_cardM2 TEXT,
    xp_card_amount REAL,
    ms_card_amount REAL,
    xp_start_reading REAL,
    ms_start_reading REAL DEFAULT 0.00,
    xp_close_reading REAL,
    ms_close_reading REAL,
    xp_reading_difference REAL,
    ms_reading_difference REAL,
    xp_testing_less REAL,
    ms_testing_less REAL,
    xp_net_sale REAL,
    ms_net_sale REAL,
    xp_rate REAL,
    ms_rate REAL,
    xp_cash REAL,
    ms_cash REAL,
    xp_sortage REAL,
    ms_sortage REAL,
    xp_surplus REAL,
    ms_surplus REAL,
    xp_total_amount REAL,
    ms_total_amount REAL
  )`).run();

  // shifta2 table
  db.prepare(`CREATE TABLE IF NOT EXISTS shifta2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    shifta1_datetime TEXT NOT NULL,
    shifta1_product1 TEXT,
    shifta1_product2 TEXT,
    shifta1_emp1 TEXT,
    shifta1_emp2 TEXT,
    shifta1_nozzle1 TEXT,
    shifta1_nozzle2 TEXT,
    xp_paytmM1 TEXT,
    ms_paytmM2 TEXT,
    xp_paytm_amount REAL,
    ms_paytm_amount REAL,
    xp_cardM1 TEXT,
    ms_cardM2 TEXT,
    xp_card_amount REAL,
    ms_card_amount REAL,
    xp_start_reading REAL,
    ms_start_reading REAL,
    xp_close_reading REAL,
    ms_close_reading REAL,
    xp_reading_difference REAL,
    ms_reading_difference REAL,
    xp_testing_less REAL,
    ms_testing_less REAL,
    xp_net_sale REAL,
    ms_net_sale REAL,
    xp_rate REAL,
    ms_rate REAL,
    xp_cash REAL,
    ms_cash REAL,
    xp_sortage REAL,
    ms_sortage REAL,
    xp_surplus REAL,
    ms_surplus REAL,
    xp_total_amount REAL,
    ms_total_amount REAL
  )`).run();

  // shifta3 table
  db.prepare(`CREATE TABLE IF NOT EXISTS shifta3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    shifta1_datetime TEXT NOT NULL,
    shifta1_product1 TEXT,
    shifta1_product2 TEXT,
    shifta1_emp1 TEXT,
    shifta1_emp2 TEXT,
    shifta1_nozzle1 TEXT,
    shifta1_nozzle2 TEXT,
    xp_paytmM1 TEXT,
    ms_paytmM2 TEXT,
    xp_paytm_amount REAL,
    ms_paytm_amount REAL,
    xp_cardM1 TEXT,
    ms_cardM2 TEXT,
    xp_card_amount REAL,
    ms_card_amount REAL,
    xp_start_reading INTEGER,
    ms_start_reading REAL,
    xp_close_reading REAL,
    ms_close_reading REAL,
    xp_reading_difference REAL,
    ms_reading_difference REAL,
    xp_testing_less REAL,
    ms_testing_less REAL,
    xp_net_sale REAL,
    ms_net_sale REAL,
    xp_rate REAL,
    ms_rate REAL,
    xp_cash REAL,
    ms_cash REAL,
    xp_sortage REAL,
    ms_sortage REAL,
    xp_surplus REAL,
    ms_surplus REAL,
    xp_total_amount REAL,
    ms_total_amount REAL
  )`).run();

  // shifta4 table
  db.prepare(`CREATE TABLE IF NOT EXISTS shifta4 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datetime TEXT,
    product1 TEXT,
    product2 TEXT,
    product3 TEXT,
    product4 TEXT,
    employee1 TEXT,
    employee2 TEXT,
    employee3 TEXT,
    employee4 TEXT,
    shift_1 TEXT,
    shift_2 TEXT,
    shift_3 TEXT,
    shift_4 TEXT,
    nozzle1 TEXT,
    nozzle2 TEXT,
    nozzle3 TEXT,
    nozzle4 TEXT,
    xg1_start_reading REAL,
    xg2_start_reading REAL,
    ms1_start_reading REAL,
    ms2_start_reading REAL,
    xg1_close_reading REAL,
    xg2_close_reading REAL,
    ms1_close_reading REAL,
    ms2_close_reading REAL,
    xg1_reading_difference REAL,
    xg2_reading_difference REAL,
    ms1_reading_difference REAL,
    ms2_reading_difference REAL,
    xg1_testing_less REAL,
    xg2_testing_less REAL,
    ms1_testing_less REAL,
    ms2_testing_less REAL,
    xg1_net_sale REAL,
    xg2_net_sale REAL,
    ms1_net_sale REAL,
    ms2_net_sale REAL,
    xg1_rate REAL,
    xg2_rate REAL,
    ms1_rate REAL,
    ms2_rate REAL,
    xg1_cash REAL,
    xg2_cash REAL,
    ms1_cash REAL,
    ms2_cash REAL,
    paytm_1 REAL,
    paytm_0 REAL,
    paytm_2 REAL,
    paytm_3 REAL,
    card_0 INTEGER,
    card_1 INTEGER,
    card_2 INTEGER,
    card_3 INTEGER,
    xg1_paytm_amount REAL,
    xg2_paytm_amount REAL,
    ms1_paytm_amount REAL,
    ms2_paytm_amount REAL,
    xg1_card_amount TEXT,
    xg2_card_amount REAL,
    ms1_card_amount REAL,
    ms2_card_amount REAL,
    xg1_sortage REAL,
    ms1_sortage REAL,
    ms2_sortage REAL,
    xg1_surplus REAL,
    ms1_surplus REAL,
    ms2_surplus REAL,
    xg2_surplus REAL,
    xg2_sortage REAL,
    xg1_total_amount REAL,
    xg2_total_amount REAL,
    ms1_total_amount REAL,
    ms2_total_amount REAL
  )`).run();

  // shiftb1 table
  db.prepare(`CREATE TABLE IF NOT EXISTS shiftb1 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    shifta1_datetime TEXT,
    shifta1_product1 TEXT,
    shifta1_product2 TEXT,
    shifta1_emp1 TEXT,
    shifta1_emp2 TEXT,
    shifta1_nozzle1 TEXT,
    shifta1_nozzle2 TEXT,
    xp_paytmM1 TEXT,
    ms_paytmM2 TEXT,
    xp_paytm_amount REAL,
    ms_paytm_amount REAL,
    xp_cardM1 TEXT,
    ms_cardM2 TEXT,
    xp_card_amount REAL,
    ms_card_amount REAL,
    xp_start_reading REAL,
    ms_start_reading REAL,
    xp_close_reading REAL,
    ms_close_reading REAL,
    xp_reading_difference REAL,
    ms_reading_difference REAL,
    xp_testing_less REAL,
    ms_testing_less REAL,
    xp_net_sale REAL,
    ms_net_sale REAL,
    xp_rate REAL,
    ms_rate REAL,
    xp_cash REAL,
    ms_cash REAL,
    xp_sortage REAL,
    ms_sortage REAL,
    xp_surplus REAL,
    ms_surplus REAL,
    ms_total_amount REAL,
    xp_total_amount REAL
  )`).run();

  // shiftb2 table
  db.prepare(`CREATE TABLE IF NOT EXISTS shiftb2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    shifta1_datetime TEXT,
    shifta1_product1 TEXT,
    shifta1_product2 TEXT,
    shifta1_emp1 TEXT,
    shifta1_emp2 TEXT,
    shifta1_nozzle1 TEXT,
    shifta1_nozzle2 TEXT,
    xp_paytmM1 TEXT,
    ms_paytmM2 TEXT,
    xp_paytm_amount REAL,
    ms_paytm_amount REAL,
    xp_cardM1 TEXT,
    ms_cardM2 TEXT,
    xp_card_amount REAL,
    ms_card_amount REAL,
    xp_start_reading REAL,
    ms_start_reading REAL,
    xp_close_reading REAL,
    ms_close_reading REAL,
    xp_reading_difference REAL,
    ms_reading_difference REAL,
    xp_testing_less REAL,
    ms_testing_less REAL,
    xp_net_sale REAL,
    ms_net_sale REAL,
    xp_rate REAL,
    ms_rate REAL,
    xp_cash REAL,
    ms_cash REAL,
    xp_sortage REAL,
    ms_sortage REAL,
    xp_surplus REAL,
    ms_surplus REAL,
    ms_total_amount REAL,
    xp_total_amount REAL
  )`).run();

  // shiftb3 table
  db.prepare(`CREATE TABLE IF NOT EXISTS shiftb3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    shifta1_datetime TEXT,
    shifta1_product1 TEXT,
    shifta1_product2 TEXT,
    shifta1_emp1 TEXT,
    shifta1_emp2 TEXT,
    shifta1_nozzle1 TEXT,
    shifta1_nozzle2 TEXT,
    xp_paytmM1 TEXT,
    ms_paytmM2 TEXT,
    xp_paytm_amount REAL,
    ms_paytm_amount REAL,
    xp_cardM1 TEXT,
    ms_cardM2 TEXT,
    xp_card_amount REAL,
    ms_card_amount REAL,
    xp_start_reading REAL,
    ms_start_reading REAL,
    xp_close_reading REAL,
    ms_close_reading REAL,
    xp_reading_difference REAL,
    ms_reading_difference REAL,
    xp_testing_less REAL,
    ms_testing_less REAL,
    xp_net_sale REAL,
    ms_net_sale REAL,
    xp_rate REAL,
    ms_rate REAL,
    xp_cash REAL,
    ms_cash REAL,
    xp_sortage REAL,
    ms_sortage REAL,
    xp_surplus REAL,
    ms_surplus REAL,
    ms_total_amount REAL,
    xp_total_amount REAL
  )`).run();

  // shiftb4 table
  db.prepare(`CREATE TABLE IF NOT EXISTS shiftb4 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datetime TEXT NOT NULL,
    product1 TEXT,
    product2 TEXT,
    product3 TEXT,
    product4 TEXT,
    employee1 TEXT,
    employee2 TEXT,
    employee3 TEXT,
    employee4 TEXT,
    nozzle1 TEXT,
    nozzle2 TEXT,
    nozzle3 TEXT,
    nozzle4 TEXT,
    card_0 REAL,
    card_1 REAL,
    card_2 REAL,
    card_3 REAL,
    paytm_0 REAL,
    paytm_1 REAL,
    paytm_2 REAL,
    paytm_3 REAL,
    xg1_start_reading REAL,
    xg2_start_reading REAL,
    ms1_start_reading REAL,
    ms2_start_reading REAL,
    xg1_close_reading REAL,
    xg2_close_reading REAL,
    ms1_close_reading REAL,
    ms2_close_reading REAL,
    xg1_reading_difference REAL,
    xg2_reading_difference REAL,
    ms1_reading_difference REAL,
    ms2_reading_difference REAL,
    xg1_testing_less REAL,
    xg2_testing_less REAL,
    ms1_testing_less REAL,
    ms2_testing_less REAL,
    xg1_net_sale REAL,
    xg2_net_sale REAL,
    ms1_net_sale REAL,
    ms2_net_sale REAL,
    xg1_rate REAL,
    xg2_rate REAL,
    ms1_rate REAL,
    ms2_rate REAL,
    xg1_cash REAL,
    xg2_cash REAL,
    ms1_cash REAL,
    ms2_cash REAL,
    xg1_paytm_amount REAL,
    xg2_paytm_amount REAL,
    ms1_paytm_amount REAL,
    ms2_paytm_amount REAL,
    xg1_card_amount REAL,
    xg2_card_amount REAL,
    ms1_card_amount REAL,
    ms2_card_amount REAL,
    xg1_sortage REAL,
    xg2_sortage REAL,
    ms1_sortage REAL,
    ms2_sortage REAL,
    xg1_surplus REAL,
    xg2_surplus REAL,
    ms1_surplus REAL,
    ms2_surplus REAL,
    xg1_total_amount REAL,
    xg2_total_amount REAL,
    ms1_total_amount REAL,
    ms2_total_amount REAL
  )`).run();

  // shiftc1 table
  db.prepare(`CREATE TABLE IF NOT EXISTS shiftc1 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    shifta1_datetime TEXT,
    shifta1_product1 TEXT,
    shifta1_product2 TEXT,
    shifta1_emp1 TEXT,
    shifta1_emp2 TEXT,
    shifta1_nozzle1 TEXT,
    shifta1_nozzle2 TEXT,
    xp_paytmM1 TEXT,
    ms_paytmM2 TEXT,
    xp_paytm_amount REAL,
    ms_paytm_amount REAL,
    xp_cardM1 TEXT,
    ms_cardM2 TEXT,
    xp_card_amount REAL,
    ms_card_amount REAL,
    xp_start_reading REAL,
    ms_start_reading REAL,
    xp_close_reading REAL,
    ms_close_reading REAL,
    xp_reading_difference REAL,
    ms_reading_difference REAL,
    xp_testing_less REAL,
    ms_testing_less REAL,
    xp_net_sale REAL,
    ms_net_sale REAL,
    xp_rate REAL,
    ms_rate REAL,
    xp_cash REAL,
    ms_cash REAL,
    xp_sortage REAL,
    ms_sortage REAL,
    xp_surplus REAL,
    ms_surplus REAL,
    ms_total_amount REAL,
    xp_total_amount REAL
  )`).run();

  // shiftc2 table
  db.prepare(`CREATE TABLE IF NOT EXISTS shiftc2 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    shifta1_datetime TEXT,
    shifta1_product1 TEXT,
    shifta1_product2 TEXT,
    shifta1_emp1 TEXT,
    shifta1_emp2 TEXT,
    shifta1_nozzle1 TEXT,
    shifta1_nozzle2 TEXT,
    xp_paytmM1 TEXT,
    ms_paytmM2 TEXT,
    xp_paytm_amount REAL,
    ms_paytm_amount REAL,
    xp_cardM1 TEXT,
    ms_cardM2 TEXT,
    xp_card_amount REAL,
    ms_card_amount REAL,
    xp_start_reading REAL,
    ms_start_reading REAL,
    xp_close_reading REAL,
    ms_close_reading REAL,
    xp_reading_difference REAL,
    ms_reading_difference REAL,
    xp_testing_less REAL,
    ms_testing_less REAL,
    xp_net_sale REAL,
    ms_net_sale REAL,
    xp_rate REAL,
    ms_rate REAL,
    xp_cash REAL,
    ms_cash REAL,
    xp_sortage REAL,
    ms_sortage REAL,
    xp_surplus REAL,
    ms_surplus REAL,
    ms_total_amount REAL,
    xp_total_amount REAL
  )`).run();

  // shiftc3 table
  db.prepare(`CREATE TABLE IF NOT EXISTS shiftc3 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    shifta1_datetime TEXT,
    shifta1_product1 TEXT,
    shifta1_product2 TEXT,
    shifta1_emp1 TEXT,
    shifta1_emp2 TEXT,
    shifta1_nozzle1 TEXT,
    shifta1_nozzle2 TEXT,
    xp_paytmM1 TEXT,
    ms_paytmM2 TEXT,
    xp_paytm_amount REAL,
    ms_paytm_amount REAL,
    xp_cardM1 TEXT,
    ms_cardM2 TEXT,
    xp_card_amount REAL,
    ms_card_amount REAL,
    xp_start_reading REAL,
    ms_start_reading REAL,
    xp_close_reading REAL,
    ms_close_reading REAL,
    xp_reading_difference REAL,
    ms_reading_difference REAL,
    xp_testing_less REAL,
    ms_testing_less REAL,
    xp_net_sale REAL,
    ms_net_sale REAL,
    xp_rate REAL,
    ms_rate REAL,
    xp_cash REAL,
    ms_cash REAL,
    xp_sortage REAL,
    ms_sortage REAL,
    xp_surplus REAL,
    ms_surplus REAL,
    ms_total_amount REAL,
    xp_total_amount REAL
  )`).run();

  // shiftc4 table
  db.prepare(`CREATE TABLE IF NOT EXISTS shiftc4 (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    datetime TEXT NOT NULL,
    product1 TEXT,
    product2 TEXT,
    product3 TEXT,
    product4 TEXT,
    employee1 TEXT,
    employee2 TEXT,
    employee3 TEXT,
    employee4 TEXT,
    nozzle1 TEXT,
    nozzle2 TEXT,
    nozzle3 TEXT,
    nozzle4 TEXT,
    card_0 REAL,
    card_1 REAL,
    card_2 REAL,
    card_3 REAL,
    paytm_0 REAL,
    paytm_1 REAL,
    paytm_2 REAL,
    paytm_3 REAL,
    xg1_start_reading REAL,
    xg2_start_reading REAL,
    ms1_start_reading REAL,
    ms2_start_reading REAL,
    xg1_close_reading REAL,
    xg2_close_reading REAL,
    ms1_close_reading REAL,
    ms2_close_reading REAL,
    xg1_reading_difference REAL,
    xg2_reading_difference REAL,
    ms1_reading_difference REAL,
    ms2_reading_difference REAL,
    xg1_testing_less REAL,
    xg2_testing_less REAL,
    ms1_testing_less REAL,
    ms2_testing_less REAL,
    xg1_net_sale REAL,
    xg2_net_sale REAL,
    ms1_net_sale REAL,
    ms2_net_sale REAL,
    xg1_rate REAL,
    xg2_rate REAL,
    ms1_rate REAL,
    ms2_rate REAL,
    xg1_cash REAL,
    xg2_cash REAL,
    ms1_cash REAL,
    ms2_cash REAL,
    xg1_paytm_amount REAL,
    xg2_paytm_amount REAL,
    ms1_paytm_amount REAL,
    ms2_paytm_amount REAL,
    xg1_card_amount REAL,
    xg2_card_amount REAL,
    ms1_card_amount REAL,
    ms2_card_amount REAL,
    xg1_sortage REAL,
    xg2_sortage REAL,
    ms1_sortage REAL,
    ms2_sortage REAL,
    xg1_surplus REAL,
    xg2_surplus REAL,
    ms1_surplus REAL,
    ms2_surplus REAL,
    xg1_total_amount REAL,
    xg2_total_amount REAL,
    ms1_total_amount REAL,
    ms2_total_amount REAL
  )`).run();
}

module.exports = { init };
