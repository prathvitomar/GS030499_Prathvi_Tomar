// import { Routes, Route } from "react-router-dom";
// import StoresPage from "../pages/StoresPage";
// import SKUsPage from "../pages/SKUsPage";
// import PlanningPage from "../pages/PlanningPage";
// import ChartPage from "../pages/ChartPage";
// import LoginPage from "../pages/LoginPage";
// import SignInPage from "../pages/SignInPage";

// const AppRoutes = () => {
//   return (
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signin" element={<SignInPage />} />
//         <Route path="/stores" element={<StoresPage />} />
//         <Route path="/skus" element={<SKUsPage />} />
//         <Route path="/planning" element={<PlanningPage />} />
//         <Route path="/chart" element={<ChartPage />} />
//       </Routes>
//   );
// };

// export default AppRoutes;










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
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signin" element={<SignInPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/skus" element={<SKUsPage />} />
        <Route path="/planning" element={<PlanningPage />} />
        <Route path="/chart" element={<ChartPage />} />
      </Route>

      {/* 404 Page for unknown routes */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
