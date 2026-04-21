import { useState, useEffect } from "react";

const initialState = {
  name: "",
  email: "",
  department: "",
  salary: "",
  status: "",
};

const EmployeeForm = ({ selectedEmployee, onSubmit, onCancel, IsPerformingAction }) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  /************Effects***********/

  useEffect(() => {
    if (selectedEmployee) {
      setFormData(selectedEmployee);
    } else {
      setFormData(initialState);
    }
  }, [selectedEmployee]);

  /***********Controlled Elements***********/

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /***********************/
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    console.log("Form submitted successfully");
    onSubmit(formData);
  };

  /************Validations***********/

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 6) {
      newErrors.name = "Name must be at least 6 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email format is invalid";
    }

    if (!formData.department) {
      newErrors.department = "Department is required";
    }

    if (!formData.salary.toString().trim()) {
      newErrors.salary = "Salary is required";
    } else if (Number(formData.salary) <= 0) {
      newErrors.salary = "Salary must be greater than 0";
    }

    if (!formData.status) {
      newErrors.status = "Status is required";
    }

    return newErrors;
  };

  /************JSX***********/

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ zIndex: 1050 }}
    >
      {/* Backdrop */}
      <div
        className="position-absolute w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        onClick={onCancel}
      ></div>

      {/* Modal */}
      <div
        className="bg-white p-4 rounded shadow position-relative"
        style={{ width: "500px", zIndex: 1060 }}
      >
        <h5 className="mb-3">
          {IsPerformingAction ? "" : selectedEmployee ? "Edit Employee" : "Add Employee"}
        </h5>

        {IsPerformingAction ? (
          <h5 className="text-center">Performing Action Please Wait...</h5>
        ) : (
          <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
            <label htmlFor="nameInput">Full Name *</label>
            <input
              type="text"
              id="nameInput"
              className="form-control"
              placeholder="John Doe"
              name="name"
              value={formData.name}
              onChange={handleChange}
              minLength={6}
              maxLength={60}
              disabled={IsPerformingAction}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

            <label htmlFor="emailInput">Email Address</label>
            <input
              type="text"
              id="emailInput"
              placeholder="sample@gmail.com"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              maxLength={100}
              disabled={IsPerformingAction}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

            <div className="d-flex gap-2">
              <div className="flex-fill">
                <label htmlFor="deptInput">Department *</label>
                <select
                  className="form-select"
                  id="deptInput"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  disabled={IsPerformingAction}
                >
                  <option value="">Select Department</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                  <option value="HR">HR</option>
                </select>
                {errors.department && <p style={{ color: "red" }}>{errors.department}</p>}
              </div>

              <div className="flex-fill">
                <label htmlFor="salaryInput">Salary *</label>
                <input
                  type="number"
                  className="form-control"
                  id="salaryInput"
                  placeholder="5000"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  disabled={IsPerformingAction}
                />
                {errors.salary && <p style={{ color: "red" }}>{errors.salary}</p>}
              </div>
            </div>

            <label htmlFor="statusInput">Status *</label>
            <select
              className="form-select"
              id="statusInput"
              name="status"
              value={formData.status}
              onChange={handleChange}
              disabled={IsPerformingAction}
            >
              <option value="">Employee Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {errors.status && <p style={{ color: "red" }}>{errors.status}</p>}

            <div className="d-flex justify-content-end gap-2 mt-3">
              <button type="button" className="btn btn-danger" onClick={onCancel} disabled={IsPerformingAction}>
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-success"
                disabled={IsPerformingAction}
              >
                {selectedEmployee ? "Update" : "Save"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EmployeeForm;
