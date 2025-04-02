import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useEvents } from "./EventsContext";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const ViewEvents = () => {
  const { events, updateEvent, deleteEvent } = useEvents();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [viewMode, setViewMode] = useState("list");

  const handleEdit = (event) => setSelectedEvent(event);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      deleteEvent(id);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const updatedDate = new Date(selectedEvent.date);
    const [hours, minutes] = selectedEvent.time.split(":").map(Number);
    const updatedStart = new Date(updatedDate);
    updatedStart.setHours(hours, minutes);
    const updatedEnd = new Date(updatedStart);
    updatedEnd.setMinutes(updatedStart.getMinutes() + (parseInt(selectedEvent.duration) || 60));
    updateEvent({ ...selectedEvent, title: selectedEvent.name, start: updatedStart, end: updatedEnd });
    setSelectedEvent(null);
  };

  const formatDate = (date) => new Date(date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

  const handleEventSelect = (calEvent) => {
    const event = events.find((e) => e.id === calEvent.id);
    if (event) setSelectedEvent(event);
  };

  const toggleViewMode = () => setViewMode(viewMode === "list" ? "calendar" : "list");

  const formatTime = (dateObj) => dateObj?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) || "";

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4">View & Edit Events</h1>
      {selectedEvent ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Edit Event</h2>
          <div className="space-y-4">
            {[
              { label: "Event Name", type: "text", name: "name" },
              { label: "Date", type: "date", name: "date" },
              { label: "Time", type: "time", name: "time" },
              { label: "Participants", type: "text", name: "participants" },
            ].map(({ label, type, name }) => (
              <div key={name}>
                <label className="block text-sm font-medium">{label}</label>
                <input type={type} name={name} value={selectedEvent[name] || ""} onChange={handleChange} className="w-full p-2 border rounded-md" />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium">Duration (minutes)</label>
              <select name="duration" value={selectedEvent.duration || "60"} onChange={handleChange} className="w-full p-2 border rounded-md">
                {[30, 60, 90, 120, 180].map((d) => (
                  <option key={d} value={d}>{`${d} minutes`}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea name="description" value={selectedEvent.description || ""} onChange={handleChange} rows="4" className="w-full p-2 border rounded-md"></textarea>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded-md">Update Event</button>
            <button onClick={() => setSelectedEvent(null)} className="bg-gray-400 text-white px-4 py-2 rounded-md">Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <div className="flex gap-4 mb-4">
            <Link to="/create-event" className="bg-green-500 text-white px-4 py-2 rounded-md">Create New Event</Link>
            <button onClick={toggleViewMode} className="bg-purple-500 text-white px-4 py-2 rounded-md">{viewMode === "list" ? "Switch to Calendar" : "Switch to List"}</button>
          </div>
          {viewMode === "calendar" ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500 }} onSelectEvent={handleEventSelect} views={["month", "week", "day"]} />
            </div>
          ) : (
            <div className="space-y-4">
              {events.length ? (
                events.map((event) => (
                  <div key={event.id} className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-semibold">{event.title || event.name}</h3>
                      <div className="space-x-2">
                        <button onClick={() => handleEdit(event)} className="bg-blue-500 text-white px-3 py-1 rounded-md">Edit</button>
                        <button onClick={() => handleDelete(event.id)} className="bg-red-500 text-white px-3 py-1 rounded-md">Delete</button>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p><strong>Date:</strong> {formatDate(event.date) || formatDate(event.start)}</p>
                      <p><strong>Time:</strong> {event.time || formatTime(event.start)}</p>
                      <p><strong>Duration:</strong> {event.duration} minutes</p>
                      <p><strong>Participants:</strong> {event.participants || "N/A"}</p>
                      <p><strong>Description:</strong> {event.description || "N/A"}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No events scheduled. Click "Create New Event" to add one.</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ViewEvents;
