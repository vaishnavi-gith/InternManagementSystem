import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const InternSidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-5 flex flex-col space-y-4">
      {/* Dashboard */}
      <Link to="/intern-dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">
        Dashboard
      </Link>

      {/* Profile */}
      <Link to="/edit-profile" className="block py-2 px-4 rounded hover:bg-gray-700">
        Edit Profile
      </Link>

      {/* Assigned Tasks */}
      <div
        className="flex justify-between items-center py-2 px-4 rounded hover:bg-gray-700 cursor-pointer"
        onClick={() => toggleSection("tasks")}
      >
        Assigned Tasks {openSection === "tasks" ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {openSection === "tasks" && (
        <div className="pl-6">
          <Link to="/assigned-tasks" className="block py-2 px-4 rounded hover:bg-gray-700">
            View Tasks
          </Link>
        </div>
      )}

      {/* Assigned Courses */}
      <div
        className="flex justify-between items-center py-2 px-4 rounded hover:bg-gray-700 cursor-pointer"
        onClick={() => toggleSection("courses")}
      >
        Assigned Courses {openSection === "courses" ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {openSection === "courses" && (
        <div className="pl-6 space-y-2">
          <Link to="/training-modules" className="block py-2 px-4 rounded hover:bg-gray-700">
            Training Modules
          </Link>
          <Link to="/kt-sessions" className="block py-2 px-4 rounded hover:bg-gray-700">
            KT Sessions
          </Link>
          <Link to="/pdfs" className="block py-2 px-4 rounded hover:bg-gray-700">
            PDFs
          </Link>
          <Link to="/ppts" className="block py-2 px-4 rounded hover:bg-gray-700">
            PPTs
          </Link>
        </div>
      )}

      {/* Meetings */}
      <div
        className="flex justify-between items-center py-2 px-4 rounded hover:bg-gray-700 cursor-pointer"
        onClick={() => toggleSection("meetings")}
      >
        Meetings {openSection === "meetings" ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {openSection === "meetings" && (
        <div className="pl-6 space-y-2">
          <Link to="/scheduled-meetings" className="block py-2 px-4 rounded hover:bg-gray-700">
            Scheduled Meetings
          </Link>
          <Link to="/calendar" className="block py-2 px-4 rounded hover:bg-gray-700">
            Calendar
          </Link>
        </div>
      )}

      {/* In-App Messaging */}
      <div
        className="flex justify-between items-center py-2 px-4 rounded hover:bg-gray-700 cursor-pointer"
        onClick={() => toggleSection("messaging")}
      >
        In-App Messaging {openSection === "messaging" ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {openSection === "messaging" && (
        <div className="pl-6 space-y-2">
          <Link to="/group-chat" className="block py-2 px-4 rounded hover:bg-gray-700">
            Intern Group Chat
          </Link>
          <Link to="/announcements" className="block py-2 px-4 rounded hover:bg-gray-700">
            Announcements
          </Link>
        </div>
      )}

      {/* Query Forum */}
      <Link to="/query-forum" className="block py-2 px-4 rounded hover:bg-gray-700">
        Query Forum
      </Link>
    </aside>
  );
};

export default InternSidebar;
