import React from "react";

const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? " " : "ml-64"} w-full`}>
      <Navabar
        setSidebarToggle={sidebarToggle}
        sidebarToggle={setSidebarToggle}
      />
    </div>
  );
};

export default Dashboard;
