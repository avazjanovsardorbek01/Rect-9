import React, { useState } from "react";
import { FaBell, FaSearch, FaUserCircle, FaBars } from "react-icons/fa";

const Navbar = ({ sidebarToggle, setSidebarToggle, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="bg-gray-800 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center text-xl">
        <FaBars
          className="text-white mr-4 cursor-pointer"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        />
        <span className="text-white font-semibold">E-commerce</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative md:w-64">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FaSearch className="text-gray-400" />
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-full focus:outline-none"
            placeholder="Search..."
          />
        </div>
        <FaBell className="text-white w-6 h-6" />
        <div className="relative">
          <button className="text-white focus:outline-none">
            <FaUserCircle className="w-6 h-6" />
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
              <ul className="py-1">
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-800">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-800">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-800">
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
