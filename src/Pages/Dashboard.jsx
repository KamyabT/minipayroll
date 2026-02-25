import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Card from "../Components/Card";
import DashboardTable from "../Components/DashboardTable";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <div className="d-flex">
          <Card title="Total Employees" value="5000"></Card>
          <Card title="Total Monthly Payroll" value="$45000"></Card>
          <Card title="Average Salary" value="$6000"></Card>
        </div>
        <div>
          <DashboardTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
