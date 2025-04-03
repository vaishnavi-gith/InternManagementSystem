import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const InternSidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-64 h-screen p-4 fixed pt-16 bg-gray-100 shadow-md">
      <h2 className="text-lg font-bold mb-4">Intern Dashboard</h2>
      <ul className="mt-4">
        <li>
          <NavLink
            to="/intern-dashboard"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-gray-300" : "hover:bg-gray-200"}`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/edit-profile"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-gray-300" : "hover:bg-gray-200"}`
            }
          >
            Edit Profile
          </NavLink>
        </li>
        <li>
          <div
            className="flex justify-between items-center p-2 rounded cursor-pointer hover:bg-gray-200"
            onClick={() => toggleSection("tasks")}
          >
            Assigned Tasks {openSection === "tasks" ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSection === "tasks" && (
            <ul className="ml-4">
              <li>
                <NavLink
                  to="/assigned-tasks"
                  className={({ isActive }) =>
                    `block p-2 rounded ${isActive ? "bg-gray-300" : "hover:bg-gray-200"}`
                  }
                >
                  View Tasks
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <div
            className="flex justify-between items-center p-2 rounded cursor-pointer hover:bg-gray-200"
            onClick={() => toggleSection("courses")}
          >
            Assigned Courses {openSection === "courses" ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSection === "courses" && (
            <ul className="ml-4">
              {[
                { path: "/training-modules", label: "Training Modules" },
                { path: "/kt-sessions", label: "KT Sessions" },
                { path: "/pdfs", label: "PDFs" },
                { path: "/ppts", label: "PPTs" },
              ].map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block p-2 rounded ${isActive ? "bg-gray-300" : "hover:bg-gray-200"}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to="/query-forum"
            className={({ isActive }) =>
              `block p-2 rounded ${isActive ? "bg-gray-300" : "hover:bg-gray-200"}`
            }
          >
            Query Forum
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default InternSidebar;