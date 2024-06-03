import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import DataTable from "./components/DataTable";
import UsersTable from "./components/UsersTable";
import AlbumsTable from "./components/AlbumsTable"; // Импорт нового компонента
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar sidebarToggle={sidebarToggle} />
        <div
          className={`${
            sidebarToggle ? "ml-0" : "ml-64"
          } w-full transition-all duration-300`}
        >
          <Navbar
            setSidebarToggle={setSidebarToggle}
            sidebarToggle={sidebarToggle}
            onSearch={handleSearch}
          />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/services"
                element={<DataTable searchTerm={searchTerm} />}
              />
              <Route
                path="/users"
                element={<UsersTable searchTerm={searchTerm} />}
              />
              <Route
                path="/albums"
                element={<AlbumsTable searchTerm={searchTerm} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
