import React, { useState } from "react";

const allInterns = [
  "Alice", "Bob", "Charlie", "David", "Eve",
  "Frank", "Grace", "Hank", "Ivy", "Jack"
];

const GamificationTeam = () => {
  const [interns, setInterns] = useState(allInterns);
  const [numTeams, setNumTeams] = useState(2);
  const [teams, setTeams] = useState([]);

  // Create Teams based on chosen number
  const generateTeams = () => {
    let newTeams = [];
    for (let i = 0; i < numTeams; i++) {
      newTeams.push({
        name: `Team ${String.fromCharCode(65 + i)}`, // Auto-generates Team A, B, C...
        members: [],
      });
    }
    setTeams(newTeams);
  };

  // Handle team name changes
  const updateTeamName = (index, newName) => {
    let updatedTeams = [...teams];
    updatedTeams[index].name = newName;
    setTeams(updatedTeams);
  };

  // Handle intern selection
  const assignIntern = (teamIndex, intern) => {
    let updatedTeams = [...teams];
    updatedTeams[teamIndex].members.push(intern);

    // Remove selected intern from dropdown
    setInterns(interns.filter((i) => i !== intern));
    setTeams(updatedTeams);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Create Gamification Teams</h1>

      {/* Select Number of Teams */}
      <div className="flex flex-col items-center mb-4">
        <label className="text-lg font-medium">Choose number of teams:</label>
        <input
          type="number"
          value={numTeams}
          min="2"
          max={interns.length}
          onChange={(e) => setNumTeams(parseInt(e.target.value))}
          className="mt-2 p-2 border rounded-lg w-20 text-center"
        />
        <button
          onClick={generateTeams}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Generate Teams
        </button>
      </div>

      {/* Display Teams */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teams.map((team, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            {/* Editable Team Name */}
            <input
              type="text"
              value={team.name}
              onChange={(e) => updateTeamName(index, e.target.value)}
              className="w-full p-2 border rounded-md text-lg font-semibold"
            />

            <h3 className="mt-3 text-lg font-medium">Interns:</h3>
            <ul className="list-disc pl-4 mt-2">
              {team.members.map((member, idx) => (
                <li key={idx} className="text-gray-700">{member}</li>
              ))}
            </ul>

            {/* Dropdown to Add Intern */}
            {interns.length > 0 && (
              <select
                onChange={(e) => assignIntern(index, e.target.value)}
                defaultValue=""
                className="mt-3 w-full p-2 border rounded-md"
              >
                <option value="" disabled>Select Intern</option>
                {interns.map((intern, idx) => (
                  <option key={idx} value={intern}>
                    {intern}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Submit Teams
        </button>
      </div>
    </div>
  );
};

export default GamificationTeam;
