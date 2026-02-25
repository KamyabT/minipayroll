import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import Card from "../Components/Card";


const Employees = () => {
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
      </div>
    </div>
  );
};

export default Employees;
