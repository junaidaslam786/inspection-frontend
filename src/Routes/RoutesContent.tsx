import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../Middleware/ProtectedRoutes";
import SignInPage from "../Pages/Auth/SignInPage";
import DashboardPage from "../Pages/Dashboard/DashboardPage";

const RoutesContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuthenticated={true}>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default RoutesContent;
