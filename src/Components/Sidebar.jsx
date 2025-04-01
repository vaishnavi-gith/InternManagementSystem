import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen p-4 fixed pt-16">
      <h2 className="text-lg font-bold mb-4">Manager Dashboard</h2>
      <ul className="mt-4">
      <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block p-2  ${isActive ? "bg-gray-100" : "hover:bg-gray-100"}`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/interns"
            className={({ isActive }) =>
              `block p-2  ${isActive ? "bg-gray-100" : "hover:bg-gray-100"}`
            }
          >
            Interns
          </NavLink>
        </li>
        
        <li>
          <NavLink
            to="/task"
            className={({ isActive }) =>
              `block p-2 ${isActive ? "bg-gray-100" : "hover:bg-gray-100"}`
            }
          >
            Assign Task
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/task"
            className={({ isActive }) =>
              `block p-2 ${isActive ? "bg-gray-100" : "hover:bg-gray-100"}`
            }
          >
            Calender
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/task"
            className={({ isActive }) =>
              `block p-2 ${isActive ? "bg-gray-100" : "hover:bg-gray-100"}`
            }
          >
            Upload Docs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/task"
            className={({ isActive }) =>
              `block p-2 ${isActive ? "bg-gray-100" : "hover:bg-gray-100"}`
            }
          >
            Chat
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
