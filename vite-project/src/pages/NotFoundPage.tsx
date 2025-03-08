import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 mt-2">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/login" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Go to Login
      </Link>
    </div>
  );
};

export default NotFoundPage;
