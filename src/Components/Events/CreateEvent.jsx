import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEvents } from "./EventsContext";

const CreateEvent = () => {
  const navigate = useNavigate();
  const { addEvent } = useEvents();

  const [eventData, setEventData] = useState({
    name: "",
    date: "",
    time: "",
    participants: "",
    description: "",
    duration: "60"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventDate = new Date(eventData.date);
    const [hours, minutes] = eventData.time.split(':').map(Number);
    const startDate = new Date(eventDate);
    startDate.setHours(hours, minutes);
    const endDate = new Date(startDate);
    endDate.setMinutes(startDate.getMinutes() + parseInt(eventData.duration));

    const newEvent = {
      id: Date.now(),
      title: eventData.name,
      start: startDate,
      end: endDate,
      ...eventData
    };

    addEvent(newEvent);
    alert("Event added to calendar!");
    navigate('/view-events');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Event</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600">Event Name</label>
          <input
            type="text"
            name="name"
            value={eventData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block text-gray-600">Date</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block text-gray-600">Start Time</label>
          <input
            type="time"
            name="time"
            value={eventData.time}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block text-gray-600">Duration (minutes)</label>
          <select
            name="duration"
            value={eventData.duration}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-300"
          >
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="90">1.5 hours</option>
            <option value="120">2 hours</option>
            <option value="180">3 hours</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-600">Participants (comma separated)</label>
          <input
            type="text"
            name="participants"
            value={eventData.participants}
            onChange={handleChange}
            placeholder="e.g., John Doe, Jane Smith"
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block text-gray-600">Description</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded-md focus:ring focus:ring-indigo-300"
          ></textarea>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Add to Calendar
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;