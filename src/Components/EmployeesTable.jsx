import style from "./DashboardTable.module.css";

const EmployeesTable = ({ employees, onDelete, onEdit, setSortType }) => {
  console.log(employees, "employees 1111");

  return (
    <>
      {employees.length === 0 ? (
        <p className="d-flex justify-content-center h5">
          No employees found. Add your employees
        </p>
      ) : (
        <>
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h5 className="ps-2 mb-3 w-100">Employees List</h5>
            <div className="d-flex align-items-center justify-content-center w-100">
              <label htmlFor="" className="w-25 h6 mb-0">
                Sort Employees List
              </label>
              <select
                className="form-select"
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="">No Sort</option>
                <option value="name-asc">Sort by Name (Ascending)</option>
                <option value="name-dsc">Sort by Name (Descending)</option>
                <option value="department">Sort by Department</option>
                <option value="salary">Sort by Salary</option>
                <option value="status">Sort by Status</option>
              </select>
            </div>
          </div>
          <table className="w-100">
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => {
                return (
                  <tr key={emp.id}>
                    <td className="h6">{emp.name}</td>
                    <td>{emp.department}</td>
                    <td>${emp.salary}</td>
                    <td>{emp.status}</td>
                    <td>
                      <button className="btn btn-warning" onClick={() => onEdit(emp)}>
                        Edit
                      </button>
                      <span> | </span>
                      <button className="btn btn-danger" onClick={() => onDelete(emp.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default EmployeesTable;
