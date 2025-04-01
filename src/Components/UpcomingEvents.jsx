const UpcomingEvents = () => {
    const events = [
      { title: "Team Meeting", date: "April 5, 2025" },
      { title: "Project Deadline", date: "April 10, 2025" },
      { title: "Hackathon", date: "April 15, 2025" },
    ];
  
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-300 w-full max-h-48 overflow-y-auto">
        <h2 className="text-lg font-bold mb-2">Upcoming Events</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index} className="p-2 border-b flex justify-between">
              <span>{event.title}</span>
              <span className="text-gray-500">{event.date}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
export default UpcomingEvents;