import React from "react";
import orgChartData from "./OrgChartData";

const OrgChart = () => {
  return (
    <div className="text-center p-8 bg-gray-100 min-h-screen">
      <h2 className="text-red-600 text-2xl font-bold mb-6">Organizational Chart</h2>
      <div className="flex justify-center items-start gap-14 flex-nowrap">
        {orgChartData.map((director) => (
          <div key={director.id} className="flex flex-col items-center">
            {/* Director Box */}
            <div className="bg-red-600 text-white px-6 py-4 text-lg font-bold rounded-lg shadow-md w-64 border-b-4 border-yellow-400">
              {director.name}
            </div>

            {/* Interns List */}
            <div className="flex flex-col items-center gap-5 mt-5">
              {director.interns.map((intern) => (
                <div
                  key={intern.id}
                  className="bg-white text-black px-5 py-3 text-base rounded-lg shadow-lg w-48 text-center border-l-4 border-yellow-400"
                >
                  {intern.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrgChart;
