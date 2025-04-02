import React from "react";
import { Link } from "react-router-dom";

const EventsDashboard = () => {
  return (
    <div className="px-8 pt-20 max-w-5xl mx-auto">
      <h1 className="text-red-700 text-2xl font-bold mb-8 mt-4">
        Events & Meetings Management
      </h1>

      <div className="flex flex-wrap gap-6 justify-between">
        {/* Create Events */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[32%] transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg">
          <h2 className="text-gray-800 text-xl font-semibold mb-4">
            Create Events
          </h2>
          <p className="text-gray-600 mb-5">
            Schedule new events and meetings for interns and team members
          </p>
          <Link to="/create-event">
            <button className="bg-red-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300 hover:bg-red-800">
              Create New Event
            </button>
          </Link>
        </div>

        {/* View & Edit Events */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[32%] transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg">
          <h2 className="text-gray-800 text-xl font-semibold mb-4">
            View & Edit Events
          </h2>
          <p className="text-gray-600 mb-5">
            Manage your existing events and make changes as needed
          </p>
          <Link to="/view-events">
            <button className="bg-red-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300 hover:bg-red-800">
              View All Events
            </button>
          </Link>
        </div>

        {/* Meeting Recordings */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] lg:w-[32%] transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg">
          <h2 className="text-gray-800 text-xl font-semibold mb-4">
            Meeting Recordings
          </h2>
          <p className="text-gray-600 mb-5">
            Access recorded meetings and collect feedback
          </p>
          <Link to="/meeting-recordings">
            <button className="bg-red-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300 hover:bg-red-800">
              Access Recordings
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsDashboard;
