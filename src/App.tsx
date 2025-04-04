import "./App.css";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import DashboardMain from "./components/Dashboard";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <Sidebar />
      {/* Main Dashboard Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <DashboardMain />
      </div>
      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
};

export default App;
