import { Routes, Route, Navigate } from "react-router-dom";
import StoresPage from "../pages/StoresPage";
import SKUsPage from "../pages/SKUsPage";
import PlanningPage from "../pages/PlanningPage";
import ChartPage from "../pages/ChartPage";
import LoginPage from "../pages/LoginPage";
import SignInPage from "../pages/SignInPage";
import ProtectedRoute from "../utils/protectedRoutes";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SignInPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/skus" element={<SKUsPage />} />
        <Route path="/planning" element={<PlanningPage />} />
        <Route path="/chart" element={<ChartPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
