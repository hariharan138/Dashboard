import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { slot: 1, accuracy: 85 },
  { slot: 2, accuracy: 45 },
  { slot: 3, accuracy: 35 },
  { slot: 4, accuracy: 65 },
  { slot: 5, accuracy: 55 },
  { slot: 6, accuracy: 45 },
  { slot: 7, accuracy: 65 },
];

const timeMarkers = [
  { time: "10", position: "10%" },
  { time: "15", position: "30%" },
  { time: "30", position: "50%" },
  { time: "45", position: "70%" },
];

function AccuracyComparison() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 w-full max-w-md">
      {/* Header Section */}
      <div className="flex items-center gap-2 mb-8">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-400"
        >
          <path
            d="M8 1.33334V14.6667M8 1.33334L4 5.33334M8 1.33334L12 5.33334"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-sm font-medium text-gray-700">Compare Accuracy</h2>
      </div>
      
      {/* Time Markers Section */}
      <div className="relative mb-4">
        <div className="absolute w-full flex justify-between px-4">
          {timeMarkers.map((marker, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-[11px] font-medium text-gray-400 mb-1">
                {marker.time}
                <span className="text-[9px] ml-0.5">MIN</span>
              </span>
              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart Section */}
      <div className="h-[200px] mt-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#E5E7EB"
            />
            <XAxis
              dataKey="slot"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 11 }}
              tickMargin={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 11 }}
              ticks={[0, 25, 50, 75, 100]}
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Bar
              dataKey="accuracy"
              fill="#818CF8"
              radius={[4, 4, 0, 0]}
              barSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AccuracyComparison;

