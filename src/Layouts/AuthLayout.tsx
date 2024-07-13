import React, { ReactNode } from "react";
import Image from "/assets/Content.png";
import AuthFooter from "../Components/Constants/AuthFooter";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-row items-center h-[5vh] md:h-[10vh] px-[1vw]">
        <img
          src={Image}
          alt="logo"
          className="w-[4vw] md:w-[2vw] h-[4vw] md:h-[2vw]"
        />
        <p className="text-[3vw] md:text-[1.5vw] font-medium text-dark-0">
          &nbsp;&nbsp;Inspection Manager Pro
        </p>
      </div>
      <div className="w-screen h-[90vh] md:h-[80vh] flex justify-center items-center">
        {children}
      </div>
      <AuthFooter />
    </div>
  );
};

export default AuthLayout;
