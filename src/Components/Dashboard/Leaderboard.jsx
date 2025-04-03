const Leaderboard = () => {
  const leaders = [
    { name: "Code Helix", points: 150 },
    { name: "Veritech", points: 120 },
    { name: "Ai-nstein", points: 100 },
  ];

  return (
    <div className="w-1/3 bg-white shadow-lg rounded-lg p-4 border border-gray-300">
      <h2 className="text-lg font-bold mb-2">Leaderboard</h2>
      <div className="flex justify-between font-semibold p-2 border-b pb-2">
        <span>Team</span>
        <span>Score</span>
      </div>
      <ul>
        {leaders.map((leader, index) => (
          <li key={index} className="flex justify-between p-2 border-b">
            <span>{leader.name}</span>
            <span className="font-bold">{leader.points} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
