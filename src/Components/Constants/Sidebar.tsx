import React, { ReactNode, useState } from "react";
import AuthFooter from "./AuthFooter";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "home-line" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User" },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-[18vw]" : "w-[6vw]"
        } bg-white h-screen fixed border-r p-[1.25vw] pt-[2vw] duration-300`}
      >
        <img
          src="/assets/control.png"
          className={`absolute cursor-pointer -right-[1vw] top-[2.2vw] w-[2vw] border-dark-purple
           border rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="/assets/Content.png"
            className={`cursor-pointer w-[2vw] h-[2vw] duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        <ul className="pt-[1.5vw]">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-[0.5vw] cursor-pointer hover:bg-light-white text-gray-300 text-[1vw] items-center gap-x-[1vw] 
              ${Menu.gap ? "mt-[2.5vw]" : "mt-[0.5vw]"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`/assets/${Menu.src}.png`} className="w-[2vw] h-[2vw]" />
              <span className={`${!open && "hidden"} origin-left duration-300`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`flex-1 min-h-screen bg-lightgray-0 overflow-auto ${
          open ? "ml-[18vw]" : "ml-[6vw]"
        } duration-300`}
      >
        {children}
        <div
          className={`fixed bottom-0 ${
            open ? "w-[82vw]" : "w-[94vw]"
          } duration-300`}
        >
          <AuthFooter />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
