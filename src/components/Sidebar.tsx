import React, { useState } from "react";
import { FaHome, FaChartPie, FaHeart, FaBell, FaCog, FaSignOutAlt, FaPlus } from "react-icons/fa";
import Logo from "../assets/logo.svg";

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="h-screen w-64 bg-white shadow-lg flex flex-col justify-between p-5">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-3">
        <img src={Logo} alt="Healthish" className="w-8 h-8" />
        <h1 className="text-lg font-bold text-purple-600">Healthish</h1>
      </div>

      {/* Menu Items */}
      <nav className="mt-8 space-y-4">
        <SidebarItem 
          icon={<FaHome />} 
          text="Dashboard" 
          active={activeItem === "Dashboard"} 
          onClick={() => setActiveItem("Dashboard")} 
        />
        <SidebarItem 
          icon={<FaChartPie />} 
          text="Reports" 
          active={activeItem === "Reports"} 
          onClick={() => setActiveItem("Reports")} 
        />
        <SidebarItem 
          icon={<FaHeart />} 
          text="Goals" 
          active={activeItem === "Goals"} 
          onClick={() => setActiveItem("Goals")} 
        />
        <SidebarItem 
          icon={<FaBell />} 
          text="Reminders" 
          notificationCount={6} 
          extraIcon={<FaPlus className="text-sm text-gray-500" />} 
          active={activeItem === "Reminders"} 
          onClick={() => setActiveItem("Reminders")} 
        />
        <SidebarItem 
          icon={<FaCog />} 
          text="Settings" 
          active={activeItem === "Settings"} 
          onClick={() => setActiveItem("Settings")} 
        />
      </nav>

      {/* Log Out */}
      <div className="mt-auto">
        <SidebarItem 
          icon={<FaSignOutAlt />} 
          text="Log out" 
          onClick={() => console.log("Logging out...")} 
        />
      </div>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
  notificationCount?: number;
  extraIcon?: React.ReactNode;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  text,
  active,
  notificationCount,
  extraIcon,
  onClick
}) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-between w-full p-3 rounded-lg cursor-pointer transition ${
      active ? "bg-purple-500 text-white" : "text-gray-700 hover:bg-gray-100"
    }`}
  >
    <div className="flex items-center space-x-2">
      {icon}
      <span className="text-sm font-medium">{text}</span>
    </div>
    <div className="flex items-center space-x-2">
      {extraIcon}
      {notificationCount && (
        <span className="bg-orange-400 text-black text-xs px-2 py-0.5 rounded-full font-semibold">
          {notificationCount}
        </span>
      )}
    </div>
  </button>
);

export default Sidebar;
