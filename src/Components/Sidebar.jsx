const Sidebar = () => {
  return (
    <aside
      className="primary-bg d-flex flex-column"
      style={{ width: 200, height: "100vh" }}
    >
      <ul className="li-design" style={{ borderBottom: "1px solid grey" }}>
        <li className="text-white">Mini Payroll</li>
      </ul>
      <ul className="li-design">
        <li className="text-white">Dashboard</li>
        <li className="text-white">Employees</li>
        <li className="text-white">Reports</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
