import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import DashboardTable from "../Components/DashboardTable";
import { Button } from "react-bootstrap";

const Employees = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <div className="d-flex mb-4 p-3 align-items-center w-100">
          <input
            type="search"
            placeholder="Search employees..."
            className="form-control w-100"
            style={{ flex: 1 }}
          />
          <Button variant="primary" className="ms-2">
            + Add Employee
          </Button>

          <div></div>
        </div>
        <div className="p-3">
          <DashboardTable />
        </div>
      </div>
    </div>
  );
};

export default Employees;
