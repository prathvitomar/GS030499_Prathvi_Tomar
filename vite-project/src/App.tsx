import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./features/authSlice";
import { useLocation, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { RootState } from "./app/store";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate(); // ✅ Add navigate
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!user) {
      const storedUser = JSON.parse(localStorage.getItem("currentUser") || "null");
      if (storedUser) {
        dispatch(login({ ...storedUser, navigate })); // ✅ Pass navigate
      }
    }
  }, [dispatch, user, navigate]); // ✅ Add navigate as a dependency

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
