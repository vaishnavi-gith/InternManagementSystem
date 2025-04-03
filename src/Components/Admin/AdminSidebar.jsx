import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AdminSidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0 p-6 space-y-4 shadow-lg">
      <Link to="/admin-dashboard" className="block py-3 px-4 bg-gray-800 rounded hover:bg-gray-700">
        Dashboard
      </Link>

      {/* Intern Management Section */}
      <div>
        <div className="flex justify-between py-3 px-4 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection("internManagement")}>
          Intern Management {openSection === "internManagement" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openSection === "internManagement" && (
          <div className="ml-4 space-y-2 mt-2">
            <Link to="/register-interns" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Register Interns</Link>
            <Link to="/map-interns" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Map Interns</Link>
            <Link to="/manage-gamify-teams" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Manage Gamify Teams</Link>
          </div>
        )}
      </div>

      {/* Courses Section */}
      <div>
        <div className="flex justify-between py-3 px-4 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection("courses")}>
          Courses {openSection === "courses" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openSection === "courses" && (
          <div className="ml-4 space-y-2 mt-2">
            <Link to="/add-courses" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Add Courses</Link>
            <Link to="/track-courses" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Track Courses</Link>
          </div>
        )}
      </div>

      {/* Events & Meetings Section */}
      <div>
        <div className="flex justify-between py-3 px-4 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection("eventsMeetings")}>
          Events & Meetings {openSection === "eventsMeetings" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openSection === "eventsMeetings" && (
          <div className="ml-4 space-y-2 mt-2">
            <Link to="/schedule-meeting" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Schedule a Meeting</Link>
            <Link to="/view-meetings" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">View Meetings</Link>
            <Link to="/calendar" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Calendar</Link>
          </div>
        )}
      </div>

      {/* In-App Messaging */}
      <div>
        <div className="flex justify-between py-3 px-4 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer" onClick={() => toggleSection("messaging")}>
          In-App Messaging {openSection === "messaging" ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        {openSection === "messaging" && (
          <div className="ml-4 space-y-2 mt-2">
            <Link to="/group-chat" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Intern Group Chat</Link>
            <Link to="/announcements" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Post Announcements</Link>
          </div>
        )}
      </div>

      {/* Query Forum */}
      <Link to="/query-forum" className="block py-3 px-4 bg-gray-800 rounded hover:bg-gray-700">Query Forum</Link>
    </aside>
  );
};

export default AdminSidebar;
