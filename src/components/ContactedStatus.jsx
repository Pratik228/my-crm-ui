import { FaUser, FaClock } from "react-icons/fa";

const ContactedStatus = () => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-orange-500 font-semibold flex items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Contacted
          </span>
          <h2 className="text-2xl font-bold mt-1">Mamta Naik</h2>
          <div className="flex items-center mt-4">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs mr-2">
              AN
            </div>
            <span className="text-sm text-gray-600">Aniruddh Naidu</span>
          </div>
        </div>
        <div className="text-right space-y-8">
          <div className="text-sm text-gray-500 flex items-center justify-end">
            <FaClock className="mr-1" /> Pending Actions
          </div>
          <button className="bg-green-100 text-green-700 px-3 py-1 rounded mt-1 text-sm mr-2">
            Create Account
          </button>
          <button className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded mt-1 text-sm">
            Create Contact
          </button>
        </div>
      </div>
      <div className="border-t border-b pt-4 mb-6">
        <div className="flex space-x-12 text-sm">
          <button className="text-gray-600 pb-2 border-b-2 border-transparent hover:border-blue-500">
            Basic Details
          </button>
          <button className="text-gray-600 pb-2 border-b-2 border-transparent hover:border-blue-500">
            Account Details
          </button>
          <button className="text-gray-600 pb-2 border-b-2 border-transparent hover:border-blue-500">
            Lead Details
          </button>
          <button className="text-gray-600 pb-2 border-b-2 border-transparent hover:border-blue-500">
            Team
          </button>
          <button className="text-gray-600 pb-2 border-b-2 border-blue-500">
            Other Contacts
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Account
          </label>
          <select className="w-full border rounded px-3 py-2 text-gray-700">
            <option>Select Option</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact
          </label>
          <select className="w-full border rounded px-3 py-2 text-gray-700">
            <option>Select Option</option>
          </select>
        </div>
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center text-sm mb-4 pb-4 border-b">
          <div>
            <span className="text-blue-500 font-medium">Pranab Biyani</span>
            <br />
            <span className="text-gray-500">Associate VP</span>
          </div>
          <span className="text-gray-700">Sales Head</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <div>
            <span className="text-blue-500 font-medium">Nayan Johal</span>
            <br />
            <span className="text-gray-500">Associate VP</span>
          </div>
          <span className="text-gray-700">Sales Head</span>
        </div>
      </div>
    </div>
  );
};

export default ContactedStatus;
