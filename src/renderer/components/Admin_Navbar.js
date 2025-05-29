function AdminNavbar() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Admin Panel</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNavbar" aria-controls="adminNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="adminNavbar">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../employee/employeelist.html">Employees</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../employee/employeeReport.html">Employee Report</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../report.html">Shifts Report</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}
