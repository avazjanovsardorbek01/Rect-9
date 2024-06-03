import React from "react";
import Navbar from "./Navbar";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? " " : "ml-64"} w-full`}>
      <Navbar
        setSidebarToggle={setSidebarToggle}
        sidebarToggle={sidebarToggle}
      />
      {/* Add your dashboard content here */}
    </div>
  );
};

export default Dashboard;
