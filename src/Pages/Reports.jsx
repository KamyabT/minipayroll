import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import DashboardTable from "../Components/DashboardTable";
import EmployeeFrom from "../Components/EmployeeForm";
import { Button } from "react-bootstrap";

const Reports = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header title="Reports" />
      </div>
      <EmployeeFrom />
    </div>
  );
};

export default Reports;
