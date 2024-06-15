import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../Middleware/ProtectedRoutes";
import SignInPage from "../Pages/Auth/SignInPage";
import RegisterPage from "../Pages/Auth/RegisterPage";
import ForgotPasswordPage from "../Pages/Auth/ForgotPassword";
import ChangePasswordPage from "../Pages/Auth/ChangePassword";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CompanyRegistrationPage from "../Pages/Auth/CompanyRegistrationPage";
import TransactionFormPage from "../Pages/Transaction/TransactionFormPage";
import SalesPage from "../Pages/Sales/SalesPage";
import { getCookie } from "typescript-cookie";

const RoutesContent: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getCookie("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/change-password"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ChangePasswordPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/company-registration"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <CompanyRegistrationPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/transaction-form"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <TransactionFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sales"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <SalesPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default RoutesContent;
