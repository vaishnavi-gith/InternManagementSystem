import React, { useState } from "react";

const TaskManager = ({ interns={interns}, addTask }) => {
  const [task, setTask] = useState("");
  const [selectedInterns, setSelectedInterns] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedInterns((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    if (!task || selectedInterns.length === 0) {
      alert("Please enter a task and select at least one intern.");
      return;
    }
    addTask(task, selectedInterns);
    setTask("");
    setSelectedInterns([]);
  };

  return (
    <div className="w-2/3 bg-white shadow-lg rounded-lg p-6 border border-gray-300">
      <h2 className="text-lg font-bold mb-4">Assign Task</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task description"
        className="w-full border p-2 rounded mb-4"
      />
      <h3 className="font-semibold mb-2">Assign to:</h3>
      <div className="mb-4">
        {interns.map((intern) => (
          <label key={intern.id} className="block">
            <input
              type="checkbox"
              checked={selectedInterns.includes(intern.id)}
              onChange={() => handleCheckboxChange(intern.id)}
              className="mr-2"
            />
            {intern.name}
          </label>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Assign Task
      </button>
    </div>
  );
};

export default TaskManager;
