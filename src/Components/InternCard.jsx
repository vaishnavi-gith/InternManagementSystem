import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const InternCard = () => {
    const internsData = [
      { name: "John Doe", task: "Build API endpoints", progress: 80 },
      { name: "Jane Smith", task: "Design UI components", progress: 60 },
      { name: "Alice Johnson", task: "Write test cases", progress: 40 },
    ];
  
    return (
      <div className="w-2/3 bg-white shadow-lg rounded-lg p-4 border border-gray-300">
        <h2 className="text-lg font-bold mb-2">Interns Overview</h2>
        <span>Total interns assigned : {internsData.length}</span>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Task Assigned</th>
              <th className="border border-gray-300 p-2">Progress</th>
            </tr>
          </thead>
          <tbody>
            {internsData.map((intern, index) => (
              <tr key={index} className="text-center border-b">
                <td className="border border-gray-300 p-2">{intern.name}</td>
                <td className="border border-gray-300 p-2">{intern.task}</td>
                <td className="border border-gray-300 p-2">
                  <div className="w-12 h-12 mx-auto">
                    <CircularProgressbar value={intern.progress} text={`${intern.progress}%`} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
export default InternCard;