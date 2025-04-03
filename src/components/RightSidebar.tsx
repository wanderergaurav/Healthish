import { useState } from "react";
import Bell from "../assets/Bell.svg";
import Bell2 from "../assets/Bell2.svg";
import BellOutline from "../assets/BellOutline.svg";
import SettOutline from "../assets/SettOutline.svg";
import Dott from "../assets/Dott.svg";
import Plus from "../assets/Plus.svg";
import Location from "../assets/Location Icon.svg";


interface Day {
  date: number;
  isToday?: boolean;
  isPast?: boolean;
}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const calendarDays: Day[] = [
  { date: 9, isPast: true },
  { date: 10, isPast: true },
  { date: 11, isToday: true },
  { date: 12 },
  { date: 13 },
  { date: 14 },
  { date: 15 },
];

const RightSidebar = () => {
  const [selectedDay, setSelectedDay] = useState<number>(11);

  return (
    <div className="w-75 bg-white shadow-lg p-3 flex flex-col h-screen space-y-4">
      {/* Notification, Settings & Profile */}
      <div className="flex items-center justify-between px-4">
        <div className="relative">
        <img src={BellOutline} alt="Notification" className="w-6 h-6 cursor-pointer hover:opacity-80" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">1</span>
        </div>
        <img src={SettOutline} alt="Settings" className="w-6 h-6 cursor-pointer hover:opacity-80" />
        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center shadow-md">
          <img src="/Avatar2.png" alt="Profile" className="w-10 h-10 rounded-md" />
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center text-center space-y-2">
        <div className="w-14 h-14 bg-gray-300 rounded-full">
        <img
        src="/Avatar.png" // Directly reference from public folder
        alt="Profile"
        className="w-14 h-14 rounded-md object-cover"
        />
        </div>
        <h2 className="text-violet-600 font-semibold">Charles Robbie</h2>
          <p className="text-gray-500 text-sm flex items-center">
          25 years old | <img src={Location} alt="Location" className="w-4 h-4 ml-1" /> New York, USA
          </p>
        <div className="flex justify-between w-full mt-2 text-sm text-gray-700">
          <div className="text-center">
            <p className="font-bold">O+</p>
            <p>Blood</p>
          </div>
          <div className="text-center">
            <p className="font-bold">186cm</p>
            <p>Height</p>
          </div>
          <div className="text-center">
            <p className="font-bold">90kg</p>
            <p>Weight</p>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white rounded-xl p-4 shadow-b-mid">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-700">March</h3>
          <button className="text-purple-600 font-medium text-xs flex items-center border border-purple-100 rounded-md px-3 py-1 hover:bg-purple-50">
            <img src={Plus} alt="Plus" /> Add Reminder
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 text-xs text-gray-500 mb-2">
          {days.map((day, index) => (
            <div key={index} className="text-center">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day, index) => (
            <button
              key={index}
              className={`rounded-full w-9 h-9 mx-auto flex items-center justify-center font-medium transition-all 
                ${day.date === selectedDay ? "bg-purple-600 text-white shadow-lg" : 
                day.isToday ? "border-2 border-purple-600 text-purple-600 font-semibold" : 
                day.isPast ? "text-gray-400" : "text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setSelectedDay(day.date)}
            >
              {day.date}
            </button>
          ))}
        </div>
      </div>

      {/* Upcoming Section */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-3">Upcoming</h3>
        <div className="bg-gray-50 p-3 rounded-lg flex items-start gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center">
          <img src={Bell} alt="Healthish" className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-700 font-medium text-sm">Health Appointment</p>
            <p className="text-gray-500 text-xs">Mr Dok Tomm</p>
            <p className="text-gray-400 text-xs">09:20 AM - 11:30 AM</p>
          </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg flex items-start gap-3">
          <div className="w-10 h-10 bg-purple-200 rounded-2xl flex items-center justify-center">
          <img src={Bell2} alt="Healthish" className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-700 font-medium text-sm">Meeting with Tok Dalang</p>
            <p className="text-gray-400 text-xs">07:00 AM <span className="text-red-500">Due Soon</span></p>
          </div>
        </div>
      </div>

      {/* Post Workout Sessions */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Post Workout Sessions</h3>
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center justify-between w-full">
            <p className="text-gray-700 font-medium text-sm">Meditation</p>
            <img src={Dott} alt="Dott" className="w-6 h-6" />
          </div>
          <p className="text-gray-500 text-xs">5:00 PM - 6:00 PM</p>
          <p className="text-gray-400 text-xs">Coach: Tim Bjorvick</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
