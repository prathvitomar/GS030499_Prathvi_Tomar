import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <ul>
        <li className="mb-4"><Link to="/stores">Stores</Link></li>
        <li className="mb-4"><Link to="/skus">SKUs</Link></li>
        <li className="mb-4"><Link to="/planning">Planning</Link></li>
        <li className="mb-4"><Link to="/chart">Chart</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
