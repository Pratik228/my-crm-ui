import { FaPhone, FaEnvelope, FaCalendarAlt, FaPlus } from "react-icons/fa";

const Activity = () => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4">
      <div className="flex border-b mb-4 space-x-8">
        <button className="text-blue-600 text-sm  font-medium pb-2 border-b-2 border-blue-600 mr-4">
          Activity
        </button>
        <button className="text-gray-500 text-sm pb-2 mr-4">Actionables</button>
        <button className="text-gray-500 text-sm pb-2 mr-4 relative">
          Tasks
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            2
          </span>
        </button>
        <button className="text-gray-500 text-sm  pb-2">Note & File</button>
      </div>

      <div className="flex justify-between mb-4">
        <button className="flex items-center justify-center bg-gray-100 text-gray-700 px-3 py-2 rounded">
          <FaPhone className="mr-2" /> Log a Call
        </button>
        <button className="flex items-center justify-center bg-red-50 text-red-600 px-3 py-2 rounded">
          <FaEnvelope className="mr-2" /> Email
        </button>
        <button className="flex items-center justify-center bg-gray-100 text-gray-700 px-3 py-2 rounded">
          <FaCalendarAlt className="mr-2" /> Event
        </button>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              placeholder="Input Text"
              className="w-full border rounded px-3 py-2 text-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add People
            </label>
            <input
              type="text"
              placeholder="Input Text"
              className="w-full border rounded px-3 py-2 text-gray-700"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Due Date
            </label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2 text-gray-700"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>
            <input
              type="time"
              className="w-full border rounded px-3 py-2 text-gray-700"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            placeholder="Input Text"
            className="w-full border rounded px-3 py-2 text-gray-700"
            rows="3"
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          <button type="button" className="flex items-center text-blue-600">
            <FaPlus className="mr-1" /> Add Team Member
          </button>
          <button
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Activity;
