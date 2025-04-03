import React, { useState } from "react";
import Sidebar from "../Admin/AdminSidebar" // Sidebar remains as a separate component
import { data } from "./data"; // Ensure this data file exists

const MapInterns = () => {
  const [selectedIntern, setSelectedIntern] = useState(null);
  const [selectedDirector, setSelectedDirector] = useState(null);
  const [selectedSupervisor, setSelectedSupervisor] = useState(null);
  const [selectedSME, setSelectedSME] = useState("");
  const [selectedBuddy, setSelectedBuddy] = useState(null);
  const [isMapped, setIsMapped] = useState(false);

  const handleInternSelect = (event) => {
    const internId = parseInt(event.target.value);
    const intern = data.interns.find((i) => i.id === internId);
    setSelectedIntern(intern);
    setSelectedDirector(null);
    setSelectedSupervisor(null);
    setSelectedBuddy(null);
    setSelectedSME("");
    setIsMapped(false);
  };

  const handleDirectorSelect = (event) => {
    const directorId = parseInt(event.target.value);
    const director = data.directors.find((d) => d.id === directorId);
    setSelectedDirector(director);
    setSelectedSupervisor(null);
    setSelectedBuddy(null);
    setSelectedSME("");
  };

  const handleSupervisorSelect = (event) => {
    const supervisorId = parseInt(event.target.value);
    const supervisor = selectedDirector?.supervisors.find(
      (s) => s.id === supervisorId
    );
    setSelectedSupervisor(supervisor);
    setSelectedBuddy(null);
  };

  const handleMapping = () => {
    if (!selectedIntern || !selectedDirector || !selectedSupervisor) {
      alert("Please select all required fields before mapping.");
      return;
    }
    setIsMapped(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg mt-10">
      <h2 className="text-center text-red-500 text-2xl font-semibold">
        Map Interns
      </h2>

      {/* Intern Selection */}
      <div className="mb-4">
        <label className="block font-medium">Select Intern:</label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={handleInternSelect}
          value={selectedIntern?.id || ""}
        >
          <option value="">-- Select Intern --</option>
          {data.interns.map((intern) => (
            <option key={intern.id} value={intern.id}>
              {intern.name}
            </option>
          ))}
        </select>
      </div>

      {/* Director Selection */}
      {selectedIntern && (
        <div className="mb-4">
          <label className="block font-medium">Select Director:</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleDirectorSelect}
            value={selectedDirector?.id || ""}
          >
            <option value="">-- Select Director --</option>
            {data.directors.map((director) => (
              <option key={director.id} value={director.id}>
                {director.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Supervisor Selection */}
      {selectedDirector && (
        <div className="mb-4">
          <label className="block font-medium">Select Supervisor:</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleSupervisorSelect}
            value={selectedSupervisor?.id || ""}
          >
            <option value="">-- Select Supervisor --</option>
            {selectedDirector.supervisors.map((supervisor) => (
              <option key={supervisor.id} value={supervisor.id}>
                {supervisor.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* SME Selection (Optional) */}
      {selectedDirector && (
        <div className="mb-4">
          <label className="block font-medium">Select SME (Optional):</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setSelectedSME(e.target.value)}
            value={selectedSME}
          >
            <option value="">-- Select SME --</option>
            {selectedDirector.smes.map((sme, index) => (
              <option key={index} value={sme}>
                {sme}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Buddy Selection */}
      {selectedSupervisor && (
        <div className="mb-4">
          <label className="block font-medium">
            Select Buddy (FTE from Supervisor's Team):
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setSelectedBuddy(e.target.value)}
            value={selectedBuddy || ""}
          >
            <option value="">-- Select Buddy --</option>
            {selectedSupervisor.teamMembers.map((buddy) => (
              <option key={buddy.id} value={buddy.id}>
                {buddy.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Confirm Mapping Button */}
      {selectedSupervisor && (
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
          onClick={handleMapping}
        >
          Confirm Mapping
        </button>
      )}

      {/* Display Mapped Details */}
      {isMapped && (
        <div className="mt-6 p-4 bg-green-100 border border-green-500 rounded-md">
          <h3 className="text-lg font-semibold text-green-700">
            Mapping Summary:
          </h3>
          <p className="text-gray-800">
            <strong>Intern:</strong> {selectedIntern?.name}
          </p>
          <p className="text-gray-800">
            <strong>Director:</strong> {selectedDirector?.name}
          </p>
          <p className="text-gray-800">
            <strong>Supervisor:</strong> {selectedSupervisor?.name}
          </p>
          {selectedSME && (
            <p className="text-gray-800">
              <strong>SME:</strong> {selectedSME}
            </p>
          )}
          {selectedBuddy && (
            <p className="text-gray-800">
              <strong>Buddy:</strong>{" "}
              {selectedSupervisor?.teamMembers.find((b) => b.id == selectedBuddy)
                ?.name}
            </p>
          )}
          <p className="text-green-700 font-semibold text-center">
            ✅ Intern successfully mapped!
          </p>
        </div>
      )}
    </div>
  );
};

export default MapInterns;
