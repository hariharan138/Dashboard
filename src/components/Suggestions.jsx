import React from 'react';
import { Lightbulb } from 'lucide-react';

function Suggestions() {
  const timeRanges = [
    { timeRange: "0-1:12", duration: "40sec", difficulty: "Easy", color: "#10B981" },
    { timeRange: "0:12-3:32", duration: "1.5min", difficulty: "Medium", color: "#F59E0B" },
    { timeRange: "3:32-4:40", duration: "3min", difficulty: "Hard", color: "#EF4444" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-3">
      <div className="flex items-center gap-1.5 mb-3">
        <Lightbulb className="w-3.5 h-3.5 text-gray-500" />
        <span className="text-xs text-gray-500">Suggestions</span>
      </div>
      
      <div className="flex justify-between mb-4">
        {timeRanges.map((item) => (
          <div key={item.timeRange} className="bg-[#6366F1] text-[white] rounded px-2 py-0.5 text-[7px]">
            {item.timeRange}
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        {timeRanges.map((item) => (
          <div key={item.timeRange} className="text-center ">
            <div className="text-sm font-medium mb-0.5 border border-dashed border-gray-300 rounded-sm p-0.5">{item.duration}</div>
            <div className="text-xs p-1" style={{ color: item.color }}>{item.difficulty}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;

