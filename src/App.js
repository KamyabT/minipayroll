import "./App.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
      </div>
    </div>
  );
}

export default App;
