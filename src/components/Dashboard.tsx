import Arrow from "../assets/Down Arrow icon.svg";
import Mic from "../assets/Mic.svg";
import Search from "../assets/Search.svg";
import Meditation from "../assets/meditation.svg";
import Feet from "../assets/feet.svg";
import Calories from "../assets/calories.svg";
import Drop from "../assets/drops.svg";

export default function DashboardMain() {
  return (
    <div className="p-3 space-y-3">
      {/* Top Navigation */}
      <div className="flex justify-between items-center">
        {/* Breadcrumb */}
        <p className="text-gray-400 text-sm">
          Pages / <span className="text-gray-700 font-normal">Dashboard</span>
        </p>

        {/* Search Bar */}
        <div className="relative w-72">
        {/* Search Icon (Left) */}
        <img src={Search} alt="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search any keywords"
          className="pl-10 pr-10 py-2 rounded-md bg-white shadow-sm text-gray-700 text-sm w-full focus:outline-none"
        />

        {/* Mic Icon (Right) */}
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <img src={Mic} alt="Mic" className="w-4 h-4 text-gray-500" />
        </button>
      </div>

    </div>

      {/* Welcome Banner */}
      <div className="bg-purple-600 text-white rounded-xl p-6 flex justify-between items-center">
      <div className="flex flex-col items-start">
        <h2 className="text-lg font-semibold text-gray-200">
         Hello <span className="text-white font-bold">Tassy Omah</span>,
        </h2>
        <p className="text-sm max-w-xs leading-snug mt-2">
         Have a nice day and don’t forget to take care of your health!
        </p>
        <button className="mt-3 flex items-center gap-2 text-white text-sm font-bold">
         Learn More <img src={Arrow} alt="Arrow" className="w-4 h-4 mt-1" />
        </button>
      </div>

        <img src={Meditation} alt="Meditation" className="w-32 h-32" />
      </div>

      <div className="grid grid-cols-3 gap-3 w-full">
  {[
    { 
      value: "202/3000", 
      label: "Steps taken", 
      icon: <img src={Feet} alt="Feet" className="w-6 h-6" />, 
      bgColor: "bg-purple-500" 
    },
    { 
      value: "408 kcal", 
      label: "Calories burned", 
      icon: <img src={Calories} alt="Calories" className="w-6 h-6" />, 
      bgColor: "bg-green-400" 
    },
    { 
      value: "87 litres", 
      label: "Water taken", 
      icon: <img src={Drop} alt="Drop" className="w-6 h-6" />, 
      bgColor: "bg-blue-400" 
    },
  ].map((stat, i) => (
    <div 
      key={i} 
      className="bg-white p-4 rounded-xl shadow-md flex items-center w-full border border-gray-200"
    >
      {/* Icon inside Circular Container (Left Aligned) */}
      <div className={`${stat.bgColor} w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
        {stat.icon}
      </div>

      {/* Value and Label Section */}
      <div>
        <p className="text-lg font-bold text-gray-900">
          {stat.value.split("/")[0]}
          {stat.value.includes("/") && (
            <span className="text-gray-400 text-base font-normal">/{stat.value.split("/")[1]}</span>
          )}
        </p>
        <p className="text-gray-500 text-sm">{stat.label}</p>
      </div>
    </div>
  ))}
</div>




      {/* Graphs and Reports */}
      <div className="grid grid-cols-3 gap-4">
        {/* Fitness Activity Chart Placeholder */}
        <div className="bg-white p-4 rounded-lg shadow-sm col-span-2 h-64 flex items-center justify-center">
          <p className="text-gray-400">Fitness Activity Chart</p>
        </div>

        {/* Sleep Report */}
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
          <p className="text-green-600 text-lg font-semibold">12%</p>
          <p className="text-gray-500 text-sm">Increment</p>
          <p className="text-gray-400 text-xs">3:30 mins yesterday</p>
        </div>
      </div>

      {/* Reminders & Reports */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
          <p className="text-gray-600 font-semibold">48min</p>
          <p className="text-gray-400 text-sm">Stretching</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
          <p className="text-gray-600 font-semibold">32min</p>
          <p className="text-gray-400 text-sm">Mind Training</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
          <p className="text-green-600 text-sm">Weight loss</p>
          <p className="text-gray-400 text-xs">80% decrease</p>
        </div>
      </div>
    </div>
  );
}
