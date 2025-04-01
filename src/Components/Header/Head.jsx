import { Link } from "react-router-dom";

const Header = ({ manager }) => (
  <div className="bg-black text-white px-6 py-4 fixed top-0 left-0 w-full h-16 flex items-center justify-between shadow-md">
    
    <div className="flex items-center">
      <img src="/logo.png" alt="Verizon Logo" className="h-10" />
      <h2 className="text-2xl font-bold ml-4">Launchpad</h2>
    </div>

    <div className="absolute left-1/2 transform -translate-x-1/2 w-72">
      <div className="flex items-center bg-gray-800 rounded-lg px-3 py-1 w-full">
        <span className="material-icons text-gray-400 mr-2">search</span>
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-white placeholder-gray-400 w-full"
        />
      </div>
    </div>

    <div className="flex items-center gap-6">
      <span className="material-icons text-white text-2xl cursor-pointer">notifications</span>
      <Link to="/profile">
        <span className="material-icons text-white text-2xl cursor-pointer">account_circle</span>
      </Link>
    </div>

  </div>
);

export default Header;
