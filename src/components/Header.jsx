import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");
  const [active, setActive] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      // Live Time
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setTime(formattedTime);

      // Status Logic
      const hour = now.getHours();

      if (hour >= 6 && hour <= 8) {
        setStatus("LIVE REVIEW");
      } else if (hour > 8 && hour < 18) {
        setStatus("DAY SHIFT");
      } else if (hour >= 18 && hour < 24) {
        setStatus("EVENING MODE");
      } else {
        setStatus("NIGHT ACTIVE");
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="w-full border-b border-cyan-900/40 bg-[#070d28fd] text-white px-6 py-4 flex items-center justify-between">
      
      {/* Left */}
      <div>
        <h1 className="text-xl font-bold tracking-widest text-cyan-400">
          RIDGEWAY
        </h1>
        <p className="text-xs text-gray-400">Overnight Intelligence Platform</p>
      </div>

      {/* Center */}
      <div className="hidden md:flex gap-3">
        <button
        onClick={()=>{
          setActive("Dashboard")
          navigate("/")
        }}
        className={`px-4 py-2 rounded-xl border transition ${
          active === "Dashboard"
            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
            : "text-gray-300 hover:bg-white/5 border-transparent"
        }`}>
          Dashboard
        </button>
      
        <button
         onClick={()=>{
          setActive("Briefing")
          navigate("/brief")
        }}
         className={`px-4 py-2 rounded-xl border transition ${
          active === "Briefing"
            ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
            : "text-gray-300 hover:bg-white/5 border-transparent"
        }`}>
          Briefing
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        
        {/* Shift */}
        <div className="text-right">
          <p className="text-xs text-gray-400">SHIFT</p>
          <p className="text-sm font-medium">00:00 - 06:10</p>
        </div>

        {/* Live Time */}
        <div className="text-right">
          <p className="text-xs text-gray-400">TIME</p>
          <p className="text-sm font-medium">{time}</p>
        </div>

        {/* Status Badge */}
        <div className="px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs animate-pulse">
          {status}
        </div>
      </div>
    </nav>
  );
};

export default Header;