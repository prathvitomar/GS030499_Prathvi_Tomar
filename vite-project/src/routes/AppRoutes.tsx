import { Routes, Route } from "react-router-dom";
import StoresPage from "../pages/StoresPage";
import SKUsPage from "../pages/SKUsPage";
import PlanningPage from "../pages/PlanningPage";
import ChartPage from "../pages/ChartPage";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<StoresPage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/skus" element={<SKUsPage />} />
        <Route path="/planning" element={<PlanningPage />} />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
  );
};

export default AppRoutes;
