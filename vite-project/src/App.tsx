import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const location = useLocation(); // ✅ Get the current route

  // ✅ Hide Sidebar & Navbar only on the Login page
  const isLoginPage = location.pathname === "/";

  return (
    <div className="flex">
      {/* Show Sidebar only if not on Login Page */}
      {!isLoginPage && <Sidebar />}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Show Navbar only if not on Login Page */}
        {!isLoginPage && <Navbar />}
        
        <div className="p-4">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
};

export default App;
