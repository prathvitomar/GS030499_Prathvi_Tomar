import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/authSlice";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (storedUser) {
      dispatch(login(storedUser));
    }
  }, [dispatch]);

  const isAuthPage = ["/login", "/signin"].includes(location.pathname);
  const isNotFoundPage = location.pathname === "/404";

  return (
    <div className="flex">
      {!isAuthPage && !isNotFoundPage && <Sidebar />}

      <div className="flex-1 flex flex-col">
        {!isAuthPage && !isNotFoundPage && <Navbar />}

        <div className="p-4">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
};

export default App;
