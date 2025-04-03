import React, { useState } from "react";

const seniorDirectors = [
  { id: 1, name: "Alice Johnson", org: "Tech Solutions" },
  { id: 2, name: "Bob Smith", org: "InnovateX" },
  { id: 3, name: "Charlie Brown", org: "Future Ventures" },
];

const initialInterns = [
  { id: 101, name: "John Doe" },
  { id: 102, name: "Jane Smith" },
  { id: 103, name: "Emily Davis" },
  { id: 104, name: "Michael Johnson" },
  { id: 105, name: "Sarah Wilson" },
];

const MapInternsToSeniorDirector = () => {
  const [selectedDirector, setSelectedDirector] = useState("");
  const [availableInterns, setAvailableInterns] = useState(initialInterns);
  const [selectedInterns, setSelectedInterns] = useState([]);
  const [mapping, setMapping] = useState({});

  const handleDirectorChange = (event) => {
    setSelectedDirector(event.target.value);
  };

  const handleInternSelection = (internId) => {
    setSelectedInterns((prevSelected) =>
      prevSelected.includes(internId)
        ? prevSelected.filter((id) => id !== internId)
        : [...prevSelected, internId]
    );
  };

  const handleSubmit = () => {
    if (!selectedDirector || selectedInterns.length === 0) {
      alert("Please select a senior director and at least one intern.");
      return;
    }

    setMapping((prevMapping) => ({
      ...prevMapping,
      [selectedDirector]: [...(prevMapping[selectedDirector] || []), ...selectedInterns],
    }));

    setAvailableInterns((prevInterns) =>
      prevInterns.filter((intern) => !selectedInterns.includes(intern.id))
    );

    setSelectedInterns([]);
    alert("Interns successfully mapped!");
  };

  return (
    <div className="w-[1000px] p-8 border-2 border-gray-300 bg-white shadow-lg rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      <h2 className="text-3xl font-bold text-red-600 mb-6">Map Interns to Senior Director</h2>

      {/* Director Selection */}
      <label htmlFor="senior-director" className="block text-lg font-semibold text-gray-700 mb-2">
        Select Senior Director:
      </label>
      <select
        id="senior-director"
        value={selectedDirector}
        onChange={handleDirectorChange}
        className="w-full p-3 text-lg border-2 border-gray-500 rounded-lg focus:border-red-600 bg-gray-100 text-gray-800 outline-none transition duration-300"
      >
        <option value="">-- Select Director --</option>
        {seniorDirectors.map((director) => (
          <option key={director.id} value={director.id}>
            {director.name} - {director.org}
          </option>
        ))}
      </select>

      {selectedDirector && (
        <>
          {/* Intern List */}
          <h3 className="text-xl font-semibold text-gray-800 mt-6">Available Interns:</h3>
          <div className="flex flex-col items-start gap-3 my-4">
            {availableInterns.length > 0 ? (
              availableInterns.map((intern) => (
                <label key={intern.id} className="flex items-center gap-3 text-lg text-gray-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedInterns.includes(intern.id)}
                    onChange={() => handleInternSelection(intern.id)}
                    className="w-5 h-5 cursor-pointer"
                  />
                  {intern.name}
                </label>
              ))
            ) : (
              <p className="text-gray-600">No interns available.</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="bg-red-600 text-white text-lg font-bold px-6 py-3 rounded-full transition-all duration-300 hover:bg-red-800 transform hover:scale-105"
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default MapInternsToSeniorDirector;
