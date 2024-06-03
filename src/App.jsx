import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import DataTable from "./components/DataTable";
import { useState } from "react";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="flex">
      <Sidebar sidebarToggle={sidebarToggle} />
      <div className={`${sidebarToggle ? "ml-0" : "ml-64"} w-full`}>
        <Navbar
          setSidebarToggle={setSidebarToggle}
          sidebarToggle={sidebarToggle}
        />
        <DataTable /> {/* Add the DataTable component here */}
      </div>
    </div>
  );
}

export default App;
