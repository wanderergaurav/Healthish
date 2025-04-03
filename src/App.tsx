import "./App.css";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";

const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-center text-black font-bold">Hello World!</h1>
      </div>

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
};

export default App;
