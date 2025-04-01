import InternCard from "./InternCard";
import Leaderboard from "./Leaderboard";
import UpcomingEvents from "./UpcomingEvents";

const Dashboard = () => {
  
    return (
      <>
      <div className="ml-64 p-6 bg-gray-100 min-h-screen flex flex-col gap-6 ">
      
      <div className="flex gap-6">
        <InternCard/>
        <Leaderboard/>
        </div>
        
      <UpcomingEvents/>
      </div>
      </>
    );
  };

  

export default Dashboard;