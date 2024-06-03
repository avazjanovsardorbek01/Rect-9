import React from "react";
import { FaAdn, FaHome, FaUsers, FaMusic } from "react-icons/fa";

const Sidebar = ({ sidebarToggle }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full ${
        sidebarToggle ? "w-0" : "w-64"
      } bg-gray-800 transition-all duration-300 overflow-hidden`}
    >
      <div className="flex items-center justify-center h-16 text-white font-bold text-2xl bg-gray-900">
        Admin Dashboard
      </div>
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2">
          <a
            href="/"
            className="flex items-center px-3 py-2 rounded hover:bg-blue-500"
          >
            <FaHome className="w-6 h-6 mr-2" />
            Home
          </a>
        </li>
        <li className="mb-2">
          <a
            href="/services"
            className="flex items-center px-3 py-2 rounded hover:bg-blue-500"
          >
            <FaAdn className="w-6 h-6 mr-2" />
            Services
          </a>
        </li>
        <li className="mb-2">
          <a
            href="/users"
            className="flex items-center px-3 py-2 rounded hover:bg-blue-500"
          >
            <FaUsers className="w-6 h-6 mr-2" />
            Users
          </a>
        </li>
        <li className="mb-2">
          <a
            href="/albums"
            className="flex items-center px-3 py-2 rounded hover:bg-blue-500"
          >
            <FaMusic className="w-6 h-6 mr-2" />
            Albums
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
