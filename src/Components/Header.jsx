import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <header
      className="d-flex justify-content-between align-items-center Background-bg py-2 px-4"
      style={{ width: "100%" }}
    >
      <div className="d-flex align-items-center">
        <h5>Dashboard</h5>
      </div>
      <div className="d-flex">
        <div className="d-flex align-items-center me-2">
          <img
            src={require("../Assets/profile.png")}
            alt="Profile"
            style={{ width: "35px", height: "35px" }}
            className="me-2"
          />
          <span>Admin</span>
        </div>
        <div className="d-flex align-items-center">
          <Button variant="warning">Logout</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
