import {
  FaThLarge,
  FaStar,
  FaLock,
  FaUsers,
  FaUserCircle,
  FaBuilding,
  FaChartBar,
} from "react-icons/fa";

const SidebarItem = ({ icon: Icon, isActive }) => (
  <div
    className={`flex items-center justify-center p-3 ${
      isActive ? "bg-blue-100 border-r-4 border-blue-500" : ""
    }`}
  >
    <Icon
      className={`text-xl ${isActive ? "text-blue-500" : "text-gray-500"}`}
    />
  </div>
);

const Sidebar = () => {
  return (
    <div className="bg-white w-16 flex-shrink-0 border-r flex flex-col">
      <div className="p-3 border-b">
        <div className="w-8 h-8 bg-red-500 flex items-center justify-center text-white font-bold text-xs mb-12">
          <FaThLarge />
        </div>
      </div>
      <nav className="flex-1 flex flex-col justify-between">
        <div className="space-y-12">
          <SidebarItem icon={FaStar} isActive={true} />
          <SidebarItem icon={FaLock} />
          <SidebarItem icon={FaUsers} />
          <SidebarItem icon={FaUserCircle} />
          <SidebarItem icon={FaBuilding} />
          <SidebarItem icon={FaChartBar} />
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
