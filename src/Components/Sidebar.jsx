import { Link , NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faChartLine, faChartPie } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <aside
      className="primary-bg d-flex flex-column"
      style={{ width: 200, height: "100vh" }}
    >
      <ul className="li-design " style={{ borderBottom: "1px solid grey" }}>
        <Link to="/dashboard">Mini Payroll</Link>
      </ul>
      <nav>
        <ul className="li-design">
          <NavLink to="/dashboard" className="text-white py-2 d-flex align-items-center">
            <FontAwesomeIcon icon={faChartLine} className="me-3" />
            Dashboard
          </NavLink>
          <NavLink to="/employees" className="text-white py-2 d-flex align-items-center">
            <FontAwesomeIcon icon={faUsers} className="me-3" />
            Employees
          </NavLink>
          <NavLink to="/reports" className="text-white py-2 d-flex align-items-center">
            <FontAwesomeIcon icon={faChartPie} className="me-3" />
            Reports
          </NavLink>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
