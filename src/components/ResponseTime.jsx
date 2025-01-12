import React from 'react'
import { Clock } from 'lucide-react'

export default function ResponseTime() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-2">
      <div className="flex items-center gap-1 text-gray-500 mb-1">
        <Clock className="w-3 h-3" />
        <span className="text-[12px]">Response Time</span>
      </div>

      <div>
        <div className="inline-block bg-[#6366F1] text-white text-[8px] px-1 py-0.5 rounded-sm mb-1">
          Std Time - 2min
        </div>
        <div>
        <div className="border border-dashed border-gray-300 rounded-sm p-1 bg-indigo-100">
          <div className="flex items-center justify-between">
            <span className="text-[20px] font-semibold">60%</span>
            <div className="flex items-center gap-0.5 text-[10px] text-gray-500">
              Ans took
              <span className="text-red-500 font-medium ml-0.5">2min</span>
              <svg 
                width="8" 
                height="8" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-red-500"
              >
                <path
                  d="M12 20V4M5 11L12 4L19 11" 
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
    </div>
    <br />
      <div class="border-t border-gray-300"></div>
            
        <div className=" flex items-center  mt-1 text-[14px] p-2">
        
          <h1 >You are <span className="text-red-500 font-medium ">slow</span>!</h1>
        </div>

      </div>

    </div>
  )
}

