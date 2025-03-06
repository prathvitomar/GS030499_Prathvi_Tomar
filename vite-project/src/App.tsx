import React from "react";
import { Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
    <div>
      <nav className="p-4 border-b">
        <Link to="/stores" className="mr-4">Stores</Link>
        <Link to="/skus" className="mr-4">SKUs</Link>
        <Link to="/planning" className="mr-4">Planning</Link>
        <Link to="/chart">Chart</Link>
      </nav>
      <AppRoutes />
    </div>
  );
};

export default App;
