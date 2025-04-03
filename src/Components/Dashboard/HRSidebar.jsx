import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const HRSidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-64 h-screen p-4 fixed pt-16 bg-white shadow-lg">
      <h2 className="text-lg font-bold mb-4">HR Dashboard</h2>
      <ul className="mt-4">
        <li>
          <NavLink
            to="/hr-dashboard"
            className={({ isActive }) =>
              `block p-2 rounded-md ${isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"}`
            }
          >
            HR Dashboard
          </NavLink>
        </li>

        {/* Intern Management Section */}
        <li>
          <button
            onClick={() => toggleSection("internManagement")}
            className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-100"
          >
            Intern Management {openSection === "internManagement" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openSection === "internManagement" && (
            <ul className="ml-4 border-l-2 border-gray-200 pl-2 mt-2">
              <li>
                <NavLink
                  to="/register-interns"
                  className={({ isActive }) =>
                    `block p-2 rounded-md ${isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"}`
                  }
                >
                  Register Interns
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/interns-to-org"
                  className={({ isActive }) =>
                    `block p-2 rounded-md ${isActive ? "bg-gray-100 font-semibold" : "hover:bg-gray-100"}`
                  }
                >
                  Interns to Org
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default HRSidebar;