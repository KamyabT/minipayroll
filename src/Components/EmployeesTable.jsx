import style from "./DashboardTable.module.css";

const EmployeesTable = ({ employees, onDelete, onEdit }) => {
  console.log(employees, "employees 1111");

  return (
    <>
      {employees.length === 0 ? (
        <p className="d-flex justify-content-center h5">
          No employees found. Add your employees
        </p>
      ) : (
        <>
          <h5 className="ps-2 mb-3">Employees List</h5>
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
