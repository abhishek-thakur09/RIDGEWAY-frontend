import React from "react";
import Event from "../data/event";

const TimeLine = () => {
  console.log(Event[0].events);

  return (
    <div className="w-full p-4 bg-[#0B1120] rounded-2xl border border-cyan-900/30 text-white">
      <h2 className="text-cyan-400 text-lg font-bold tracking-widest mb-4">
        Event TimeLine
      </h2>

      {/* cards  */}
      <div className="space-y-3 max-h-[410px] overflow-y-auto pr-2">
        {Event[0].events.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-cyan-900/20 rounded-xl p-4 hover:border-cyan-400 transition"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">{item.time}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  item.severity === "high"
                    ? "bg-red-500/20 text-red-400"
                    : item.severity === "medium"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-green-500/20 text-green-400"
                }`}
              >
                {item.severity}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-white">{item.title}</h3>

            {/* Location */}
            <p className="text-sm text-gray-400 mt-1">{item.location}</p>

            {/* Type */}
            <p className="text-xs text-cyan-400 mt-2 uppercase">{item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
