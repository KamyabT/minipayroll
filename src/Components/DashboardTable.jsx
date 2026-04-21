import style from "./DashboardTable.module.css";  

const DashboardTable = () => {
  return (
    <>
      <h5 className="ps-2 mb-3">Recent Employees</h5>
      <table className="w-100">
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Ali Rezaie</td>
          <td>Engineering</td>
          <td>$5000</td>
          <td>Active</td>
        </tr>
        <tr>
          <td>Sara Ahmadi</td>
          <td>HR</td>
          <td>$4200</td>
          <td>inactive</td>
        </tr>
        <tr>
          <td>Reza Taheri</td>
          <td>Finance</td>
          <td>$6500</td>
          <td>Active</td>
        </tr>
      </table>
    </>
  );
};

export default DashboardTable;
