import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { useState } from "react";
function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="flex">
      <Sidebar sidebarToggle={sidebarToggle} />
      <Navbar
        setSidebarToggle={sidebarToggle}
        sidebarToggle={setSidebarToggle}
      />
    </div>
  );
}

export default App;
