import React from "react";
import Sidebar from "../Components/Constants/Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Sidebar>
      <div></div>
      {children}
    </Sidebar>
  );
};

export default MainLayout;
