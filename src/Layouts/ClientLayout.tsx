import React from "react";
import Sidebar from "../Components/Constants/Sidebar";
import ClientHeader from "../Components/Constants/ClientHeader";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <Sidebar>
      <ClientHeader />
      {children}
    </Sidebar>
  );
};

export default ClientLayout;
