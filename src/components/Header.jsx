import { FaPlus, FaUser, FaList, FaHistory } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-white border-b">
      <div className="flex items-center justify-between px-4 py-6">
        <h1 className="text-2xl font-bold">LE-010071</h1>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded">
            <FaPlus />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <FaUser />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <FaList />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <FaHistory />
          </button>
        </div>
      </div>
      <div className="flex items-center px-4 py-4 border-t">
        <div className="flex space-x-2 flex-grow">
          <button className="px-4 py-1 bg-orange-100 text-orange-500 rounded">
            New
          </button>
          <button className="px-4 py-1 bg-gray-200 text-gray-600 rounded">
            Contacted
          </button>
          <button className="px-4 py-1 bg-gray-200 text-gray-600 rounded">
            Nurturing
          </button>
          <button className="px-4 py-1 bg-gray-200 text-gray-600 rounded">
            Qualified
          </button>
          <button className="px-4 py-1 bg-gray-200 text-gray-600 rounded">
            Unqualified
          </button>
        </div>
        <button className="bg-blue-900 text-white px-4 py-2 rounded">
          Mark as Converted
        </button>
      </div>
    </div>
  );
};

export default Header;
