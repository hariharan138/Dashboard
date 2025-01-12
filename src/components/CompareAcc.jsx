import React from 'react';

export function CompareAcc() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-full">
      <div className="flex items-center gap-2 mb-4">
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M16 2v4M8 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
        <h2 className="text-[10px] font-medium text-gray-500">Compare Accuracy</h2>
      </div>
      <div className="w-50 h-20 space-y-4">
        {/* Example: Two boxes for comparison */}
 
      </div>
    </div>
  );
}
