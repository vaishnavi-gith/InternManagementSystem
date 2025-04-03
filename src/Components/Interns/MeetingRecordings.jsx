import React, { useState } from "react";

const MeetingRecordings = () => {
  const [recordings, setRecordings] = useState([
    {
      id: 1,
      meetingName: "Intern Orientation",
      date: "2025-03-15",
      recordingUrl: "https://example.com/recording1",
      presenter: "Sarah Johnson",
      duration: "1 hour 15 minutes"
    },
    {
      id: 2,
      meetingName: "Project Status Meeting",
      date: "2025-03-20",
      recordingUrl: "https://example.com/recording2",
      presenter: "Michael Chen",
      duration: "45 minutes"
    },
    {
      id: 3,
      meetingName: "Technical Workshop",
      date: "2025-03-25",
      recordingUrl: "https://example.com/recording3",
      presenter: "Priya Patel",
      duration: "2 hours"
    }
  ]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  const [showAddForm, setShowAddForm] = useState(false);
  const [newRecording, setNewRecording] = useState({
    meetingName: "",
    date: "",
    recordingUrl: "",
    presenter: "",
    duration: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecording({ ...newRecording, [name]: value });
  };

  const addRecording = (e) => {
    e.preventDefault();
    const newId = recordings.length > 0 ? Math.max(...recordings.map(r => r.id)) + 1 : 1;

    setRecordings([...recordings, { id: newId, ...newRecording }]);

    setNewRecording({
      meetingName: "",
      date: "",
      recordingUrl: "",
      presenter: "",
      duration: ""
    });

    setShowAddForm(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Meeting Recordings</h1>

      <div className="mb-4">
        <button 
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? "Cancel" : "Add New Recording"}
        </button>
      </div>

      {showAddForm && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
          <form onSubmit={addRecording} className="space-y-4">
            <div>
              <label className="block text-gray-700">Meeting Name</label>
              <input
                type="text"
                name="meetingName"
                value={newRecording.meetingName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={newRecording.date}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Recording URL</label>
              <input
                type="url"
                name="recordingUrl"
                value={newRecording.recordingUrl}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Presenter</label>
              <input
                type="text"
                name="presenter"
                value={newRecording.presenter}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div>
              <label className="block text-gray-700">Duration</label>
              <input
                type="text"
                name="duration"
                value={newRecording.duration}
                onChange={handleInputChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="flex justify-end space-x-2">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Add Recording
              </button>
              <button 
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={() => setShowAddForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recordings.length > 0 ? (
          recordings.map((recording) => (
            <div key={recording.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center border-b pb-2 mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{recording.meetingName}</h3>
                <span className="text-sm text-gray-500">{formatDate(recording.date)}</span>
              </div>

              <p className="text-gray-700"><strong>Presenter:</strong> {recording.presenter}</p>
              <p className="text-gray-700"><strong>Duration:</strong> {recording.duration}</p>

              <div className="mt-4">
                <a 
                  href={recording.recordingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                    View Recording
                  </button>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-2 text-center">No recordings available.</p>
        )}
      </div>
    </div>
  );
};

export default MeetingRecordings;
