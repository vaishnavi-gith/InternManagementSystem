import { useState } from "react";

const Tasks = ({ onAssign }) => {
  const [task, setTask] = useState("");
  const [selectedInterns, setSelectedInterns] = useState([]);
  const [taskList, setTaskList] = useState([]);

  const interns = [
    { id: "1", name: "Alice Johnson" },
    { id: "2", name: "Bob Smith" },
    { id: "3", name: "Charlie Brown" },
    { id: "4", name: "David Williams" },
    { id: "5", name: "Emma Wilson" }
  ];

  const handleAddIntern = (id, name) => {
    if (!selectedInterns.some((intern) => intern.id === id)) {
      setSelectedInterns([...selectedInterns, { id, name }]);
    }
  };

  const handleRemoveIntern = (id) => {
    setSelectedInterns(selectedInterns.filter((intern) => intern.id !== id));
  };

  const handleAssign = () => {
    if (!task.trim()) {
      alert("Please enter a task.");
      return;
    }
    if (selectedInterns.length === 0) {
      alert("Please select at least one intern.");
      return;
    }
    const newTasks = selectedInterns.map((intern) => ({ internId: intern.id, task }));
    setTaskList([...taskList, ...newTasks]);
    newTasks.forEach(({ internId }) => onAssign(internId, task));
    setTask("");
    setSelectedInterns([]);
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg ml-[260px] border border-gray-300 w-2/3">
      <h2 className="text-xl font-semibold mb-3">Task Management</h2>
      <input
        type="text"
        className="w-full p-2 border rounded mb-3"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <h3 className="font-semibold mb-2">Assign to:</h3>
      <div className="w-full p-2 border rounded mb-3 min-h-[40px]">
        {selectedInterns.length > 0 &&
          selectedInterns.map((intern) => (
            <span key={intern.id} className="inline-flex items-center bg-gray-200 px-3 py-1 rounded-full m-1">
              {intern.name}
              <button onClick={() => handleRemoveIntern(intern.id)} className="ml-2 text-red-500">✖</button>
            </span>
          ))}
      </div>
      <select
        className="w-full p-2 border rounded mb-3"
        onChange={(e) => {
          const selected = interns.find((intern) => intern.id === e.target.value);
          if (selected) handleAddIntern(selected.id, selected.name);
        }}
      >
        <option value="">Select an intern</option>
        {interns.map((intern) => (
          <option key={intern.id} value={intern.id}>
            {intern.name}
          </option>
        ))}
      </select>
      <button
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        onClick={handleAssign}
      >
        Assign Task
      </button>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Assigned Tasks</h3>
        <ul className="mt-2">
          {taskList.map((t, index) => (
            <li key={index} className="p-2 border-b">
              {t.task} - {interns.find((i) => i.id === t.internId)?.name || "Unknown"}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;