import React from 'react';
import { TrendingUp } from 'lucide-react';

function ApproachData() {
  const approaches = [
    { label: "Facts", value: "25", color: "border border-indigo-500 text-indigo-600" },
    { label: "Analysis", value: "32", color: "border border-indigo-500 text-indigo-600" },
    { label: "Elimination", value: "19", color: "border border-indigo-500 text-indigo-600" },
    { label: "Guess", value: "24", color: "border border-indigo-500 text-indigo-600" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-2">
      <div className="flex items-center gap-1 mb-2">
        <TrendingUp className="w-3 h-3 text-gray-500 mb-1" />
        <h2 className="text-[12px] font-large text-gray-500 mb-1">Approach Data</h2>
      </div>
      <div className="space-y-0.5">
        {approaches.map((approach) => (
          <div
            key={approach.label}
            className={`${approach.color} rounded-md px-3 py-2 flex items-center justify-between`}
          >
            <div className="flex items-baseline gap-0.5 bg-indigo-100 text-indigo-600">
              <span className="text-[8px]  font-small text-[#6366F1]">{approach.value}</span>
              <span className="text-[8px]  text-gray-400">%</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[8px] text-gray-600">Based on</span>
              <span className="text-[8px]  text-[#6366F1]">{approach.label}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ApproachData;

