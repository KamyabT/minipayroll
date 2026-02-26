import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import DashboardTable from "../Components/DashboardTable";
import { Button } from "react-bootstrap";

const Reports = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
      </div>
    </div>
  );
};

export default Reports;
