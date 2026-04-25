import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import EmployeesTable from "../Components/EmployeesTable";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import EmployeeForm from "../Components/EmployeeForm";
import Error from "../Components/Error";
import Search from "../Components/Search";

const Employees = () => {
  /*********States************/
  const [emps, setEmp] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [mode, setMode] = useState("create");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isPerformingAction, setPerformingAction] = useState(false);
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState("");

  /***********Actions**********/

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(
          "http://127.0.0.1:8090/api/collections/employees/records",
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const formattedData = data.items.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          department: user.department,
          salary: user.salary,
          status: user.status,
        }));

        setEmp(formattedData); // ← این خط مهمه
      } catch (error) {
        setError(error);
        setEmp([]);
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  function handleAdd() {
    setMode("create");
    setSelectedEmployee(null);
    setIsOpen(true);
  }

  function handleEdit(emp) {
    setMode("edit");
    setSelectedEmployee(emp);
    setIsOpen(true);
  }

  function handleCancel() {
    setIsOpen(false);
  }

  async function hanldeDelete(id) {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        const response = await fetch(
          `http://127.0.0.1:8090/api/collections/employees/records/${id}`,
          {
            method: "DELETE",
          },
        );

        if (!response.ok) {
          throw new Error("Server Error: Failed to delete employee");
        }

        setEmp((emps) => emps.filter((emp) => emp.id !== id));
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    } else {
      return;
    }
  }

  async function handleSubmit(formData) {
    setPerformingAction(true);
    if (mode === "create") {
      const response = await fetch(
        "http://127.0.0.1:8090/api/collections/employees/records",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error(
          `Server Error: Failed to create employee, status: ${response.status}`,
        );
      }

      const createdEmployee = await response.json();
      setEmp((emps) => [...emps, createdEmployee]);
    }
    if (mode === "edit") {
      try {
        const response = await fetch(
          `http://127.0.0.1:8090/api/collections/employees/records/${selectedEmployee.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              department: formData.department,
              email: formData.email,
              salary: formData.salary,
              status: formData.status,
            }),
          },
        );

        const updated = await response.json();

        setEmp((emps) =>
          emps.map((emp) =>
            emp.id === selectedEmployee.id
              ? {
                  ...emp,
                  name: updated.name,
                  department: updated.department,
                  email: updated.email,
                  salary: updated.salary,
                  status: updated.status,
                }
              : emp,
          ),
        );
      } catch (error) {
        console.error("Update failed:", error);
      }
    }
    setIsOpen(false);
    setPerformingAction(false);
  }

  const filteredEmployees = emps.filter((emp) => {
    if (!query) {
      return emp;
    } else {
      const searchQuery = query?.toLowerCase();
      return (
        emp.name.toLowerCase().includes(searchQuery) ||
        emp.department.toLowerCase().includes(searchQuery) ||
        emp.salary.toString().includes(searchQuery)
      );
    }
  });

  let sortedEmployees = [...filteredEmployees];

  if (sortType === "name-asc") {
    sortedEmployees.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortType === "name-dsc") {
    sortedEmployees.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortType === "department") {
    sortedEmployees.sort((a, b) => a.department.localeCompare(b.department));
  } else if (sortType === "salary") {
    sortedEmployees.sort((a, b) => a.salary - b.salary);
  } else if (sortType === "status") {
    sortedEmployees.sort((a, b) => a.status.localeCompare(b.status));
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header title="Employees" />
        <div className="Card-bg mx-4 p-3 d-flex  align-items-center rounded">
          <Search query={query} setQuery={setQuery} />
          <Button variant="primary" className="ms-2" onClick={handleAdd}>
            + Add Employee
          </Button>
        </div>
        <div className="Card-bg p-3 mx-4 my-4 rounded">
          {isLoading ? (
            <div className="text-center h5">Loading Employees List Please Wait...</div>
          ) : (
            <EmployeesTable
              employees={sortedEmployees}
              onDelete={hanldeDelete}
              onEdit={handleEdit}
              setSortType={setSortType}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <EmployeeForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          IsPerformingAction={isPerformingAction}
          mode={mode}
          selectedEmployee={selectedEmployee}
        />
      )}
      {error && <Error isError={error} onSetError={setError} />}
    </div>
  );
};

export default Employees;
