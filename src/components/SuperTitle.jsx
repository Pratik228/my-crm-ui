import {
  FaBars,
  FaSearch,
  FaCog,
  FaBell,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";

const SuperTitle = () => {
  return (
    <div className="bg-blue-950 text-white py-4 px-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <button className="text-2xl">
          <FaBars />
        </button>
        <span className="font-bold text-lg">Test</span>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="bg-blue-900 text-white px-3 py-1 rounded-md hidden md:inline-block"
        />
        <button className="p-2">
          <FaSearch />
        </button>
        <div className="w-px h-6 bg-gray-500 mx-2"></div>
        <button className="p-2">
          <FaCog />
        </button>
        <button className="p-2">
          <FaBell />
        </button>
        <button className="p-2">
          <FaCalendarAlt />
        </button>
        <div className="w-px h-6 bg-gray-500 mx-2"></div>
        <button className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
          <FaUser />
        </button>
      </div>
    </div>
  );
};

export default SuperTitle;
