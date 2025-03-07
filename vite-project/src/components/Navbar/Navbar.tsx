import { Link } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white shadow-md px-4 py-2">
      <div className="flex items-center gap-4">
          <img style={{width : '100px'}} src="/images/gsynergy-logo.svg" alt="" />
      </div>
      <h1 className="text-xl font-semibold text-gray-800">Data Viewer App</h1>
      <FaUserCircle className="text-gray-600 text-2xl cursor-pointer" />
    </nav>
  );
};

export default Navbar;