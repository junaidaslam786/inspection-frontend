import React from "react";
import { useRoutes } from "react-router-dom";
import RegisterPage from "../Pages/Auth/RegisterPage";
import SignInPage from "../Pages/Auth/SignInPage";
import ForgotPasswordPage from "../Pages/Auth/ForgotPassword";
import ChangePasswordPage from "../Pages/Auth/ChangePassword";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CompanyRegistrationPage from "../Pages/Auth/CompanyRegistrationPage";
import TransactionFormPage from "../Pages/Transaction/TransactionFormPage";
import SalesPage from "../Pages/Sales/SalesPage";

const RoutesContent: React.FC = () => {
  const routes = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/sign-in", element: <SignInPage /> },
    { path: "/forgot-password", element: <ForgotPasswordPage /> },
    { path: "/change-password", element: <ChangePasswordPage /> },
    { path: "/company-registration", element: <CompanyRegistrationPage /> },
    { path: "/transaction-form", element: <TransactionFormPage /> },
    { path: "/sales", element: <SalesPage /> },
  ]);

  return routes;
};

export default RoutesContent;
