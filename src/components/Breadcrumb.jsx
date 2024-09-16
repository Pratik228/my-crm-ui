import { FaThLarge } from "react-icons/fa";

function Breadcrumb() {
  return (
    <div className="bg-white px-4 py-4 text-sm text-gray-600 flex items-center">
      <FaThLarge className="text-red-500 mr-2" />
      <span className="mr-2">Dashboard</span>
      <span className="mx-2">/</span>
      <span className="mr-2">Lead</span>
      <span className="mx-2">/</span>
      <span className="font-semibold">LE-010071</span>
    </div>
  );
}

export default Breadcrumb;
