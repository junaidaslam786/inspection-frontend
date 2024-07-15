import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../Middleware/ProtectedRoutes";
import ClientSignInPage from "../Pages/Auth/ClientSignInPage";
import DashboardPage from "../Pages/Dashboard/DashboardPage";
import ManagementSignInPage from "../Pages/Auth/ManagementSignInPage";
import CustomerTablePage from "../Pages/Customer/CustomerTablePage";
import ManageCustomer from "../Components/Customer/ManageCustomer";

const RoutesContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientSignInPage />} />
      <Route path="/sign-in" element={<ClientSignInPage />} />
      <Route path="/sign" element={<ManagementSignInPage />} />
      <Route path="/table" element={<CustomerTablePage />} />
      <Route path="/customer" element={<ManageCustomer />} />

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
