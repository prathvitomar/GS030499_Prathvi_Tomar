import { Link } from "react-router-dom";
import { FaStore, FaBox, FaChartBar, FaClipboardList } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 w-60 h-screen p-4 shadow-md">
      <nav className="flex flex-col gap-6">
        <Link to="/stores" className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
          <FaStore /> Store
        </Link>
        <Link to="/skus" className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
          <FaBox /> SKU
        </Link>
        <Link to="/planning" className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
          <FaClipboardList /> Planning
        </Link>
        <Link to="/chart" className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
          <FaChartBar /> Charts
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
