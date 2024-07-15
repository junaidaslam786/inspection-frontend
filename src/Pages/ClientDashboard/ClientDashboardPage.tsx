import React from "react";
import ClientLayout from "../../Layouts/ClientLayout";
import ClientDashboard from "../../Components/ClientDashboard/ClientDashboard";

const ClientDashboardPage: React.FC = () => {
  return (
    <ClientLayout>
      <ClientDashboard />
    </ClientLayout>
  );
};

export default ClientDashboardPage;
