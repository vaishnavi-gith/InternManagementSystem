import React from "react";

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 pl-64"> {/* Adjusting for navbar margin */}
      {/* Full-Width Container */}
      <div className="flex gap-6 w-full h-screen p-5">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Overview Section */}
          <section className="flex gap-6">
            <div className="flex-1 bg-red-500 text-white p-6 rounded-lg text-center font-bold text-xl">
              Total Interns <span className="block text-2xl font-bold mt-2">120</span>
            </div>
            <div className="flex-1 bg-red-500 text-white p-6 rounded-lg text-center font-bold text-xl">
              Ongoing Projects <span className="block text-2xl font-bold mt-2">15</span>
            </div>
            <div className="flex-1 bg-red-500 text-white p-6 rounded-lg text-center font-bold text-xl">
              Pending Approvals <span className="block text-2xl font-bold mt-2">8</span>
            </div>
          </section>

          {/* Intern Management */}
          <section className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-red-500 text-2xl mb-4 uppercase">Intern Management</h2>
            <button className="bg-black text-white w-full py-3 rounded-lg mb-2 hover:bg-yellow-400 hover:text-black">Register Interns</button>
            <button className="bg-black text-white w-full py-3 rounded-lg mb-2 hover:bg-yellow-400 hover:text-black">Map Interns to Teams</button>
            <button className="bg-black text-white w-full py-3 rounded-lg hover:bg-yellow-400 hover:text-black">View & Manage Interns</button>
          </section>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-6">
          {/* HR Operations */}
          <section className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-red-500 text-2xl mb-4 uppercase">HR Operations</h2>
            <button className="bg-black text-white w-full py-3 rounded-lg mb-2 hover:bg-yellow-400 hover:text-black">Approve Leave Requests</button>
            <button className="bg-black text-white w-full py-3 rounded-lg hover:bg-yellow-400 hover:text-black">Payroll & Stipend Processing</button>
          </section>

          {/* Events & Meetings */}
          <section className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-red-500 text-2xl mb-4 uppercase">Events & Meetings</h2>
            <button className="bg-black text-white w-full py-3 rounded-lg mb-2 hover:bg-yellow-400 hover:text-black">Schedule a Meeting</button>
            <button className="bg-black text-white w-full py-3 rounded-lg hover:bg-yellow-400 hover:text-black">View Meetings</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
