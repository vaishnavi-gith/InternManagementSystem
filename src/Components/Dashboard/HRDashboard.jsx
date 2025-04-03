import React from "react";
import HRSidebar from "./HRSidebar";

function HRDashboard() {
  return (
    <div className="flex h-screen">
      <HRSidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-800">HR Dashboard</h2>
        <p className="text-gray-600 mt-2">
          Welcome to the HR Dashboard. Select an option from the sidebar.
        </p>
      </div>
    </div>
  );
}

export default HRDashboard;
