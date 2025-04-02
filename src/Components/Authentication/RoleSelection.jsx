import React from "react";
import { useNavigate } from "react-router-dom";

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-center">Select Your Role</h2>
      <div className="flex flex-col gap-4 w-64">
        <button 
          onClick={() => navigate("/login/Admin")}
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login as Admin
        </button>
        <button 
          onClick={() => navigate("/login/Intern")}
          className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Login as Intern
        </button>
        <button 
          onClick={() => navigate("/login/Supervisor")}
          className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
        >
          Login as Supervisor
        </button>
      </div>
    </div>
  );
}

export default RoleSelection;
