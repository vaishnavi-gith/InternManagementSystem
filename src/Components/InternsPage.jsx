import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const InternsPage = () => {
  const interns = [
    {
      id: 1,
      name: "John Doe",
      task: "Build API endpoints",
      progress: 80,
      buddy: "Mike Adams",
      sme: "Sara Connor",
      completedTasks: ["Login API", "User Auth"],
    },
    {
      id: 2,
      name: "Jane Smith",
      task: "Design UI components",
      progress: 60,
      buddy: "Lily James",
      sme: "Tom Hanks",
      completedTasks: ["Dashboard UI", "Profile Page"],
    },
    {
      id: 3,
      name: "Alice Johnson",
      task: "Write test cases",
      progress: 40,
      buddy: "Emily Davis",
      sme: "Robert Downey Jr.",
      completedTasks: ["Unit Tests", "Integration Tests"],
    },
  ];

  return (
    <div className="ml-64 p-6 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Interns List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interns.map((intern) => (
          <div key={intern.id} className="relative bg-white shadow-lg rounded-lg p-4 border border-gray-300 flex flex-col">
            
            <Link to={`/interns/${intern.id}`} className="absolute top-4 right-4 text-blue-500">
            <span className="material-icons text-black text-2xl cursor-pointer" title="View Profile">account_circle</span>
            </Link>
            <h3 className="text-lg font-semibold">{intern.name}</h3>
            <p className="text-gray-600">Current Task: {intern.task}</p>

            <div className="w-24 h-24 mx-auto mt-2">
              <CircularProgressbar value={intern.progress} text={`${intern.progress}%`} />
            </div>

            <div className="mt-4">
              <p className="mt-2 flex items-center gap-2">
                <strong> Buddy: </strong> {intern.buddy}
                <a href={`slack://channel?id=${intern.buddy}`} className="material-icons text-2xl cursor-pointer" title={`Chat with ${intern.buddy}`}>
                chat
                </a>
              </p>
              <p className="mt-1 flex items-center gap-2">
                <strong> SME: </strong> {intern.sme}
                <a href={`slack://channel?id=${intern.sme}`} className="material-icons text-2xl cursor-pointer" title={`Chat with ${intern.sme}`}>
                  chat
                </a>
              </p>
            </div>
            <div className="mt-2">
              <p><strong>Completed Tasks:</strong></p>
              <ul className="list-disc list-inside text-gray-700">
                {intern.completedTasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default InternsPage;
