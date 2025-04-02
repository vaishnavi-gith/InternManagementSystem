import React from "react";
import InternSidebar from "./InternSidebar.jsx";

const InternDashboard = () => {
  return (
    <div className="flex h-screen">
      <InternSidebar />
      <div className="flex-grow p-5 bg-gray-100">
        <h2 className="text-2xl font-semibold">Welcome to Intern Dashboard</h2>
        <p className="text-gray-700">Select an option from the sidebar.</p>
      </div>
    </div>
  );
};

export default InternDashboard;
