import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuth } from "../../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(selectAuth);

  const handleLogout = () => {
    dispatch(logout()); 
    navigate("/login"); 
  };

  return (
    <nav className="flex items-center justify-between bg-white shadow-md px-4 py-2">
      <div className="flex items-center gap-4">
        <img style={{ width: "100px" }} src="/images/gsynergy-logo.svg" alt="logo" />
      </div>
      <h1 className="text-xl font-semibold text-gray-800">Data Viewer App</h1>
      {isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-gray-700 hover:text-red-500"
        >
          <FaUserCircle className="text-gray-600 text-2xl cursor-pointer" />
          <span className="cursor-pointer">Logout</span>
        </button>
      ) : (
        <Link to="/login" className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
          <FaUserCircle className="text-gray-600 text-2xl cursor-pointer" />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
