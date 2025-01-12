import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function TimeTaken() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="pb-0">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <CardTitle className="text-lg font-medium text-gray-700">Time Taken</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* First Timeline */}
        <div className="bg-purple-50/50 rounded-lg p-4">
          <div className="relative">
            {/* Scale background */}
            <div className="h-8 flex items-center justify-between px-1 text-xs text-gray-500">
              {['10', '20', '30', '40', '50', '60', '70', '80', '90'].map((num, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span>{num}</span>
                  <div className="h-3 w-[1px] bg-gray-300 mt-1" />
                </div>
              ))}
            </div>
            
            {/* Progress bar section */}
            <div className="relative mt-1">
              {/* Tick marks */}
              <div className="absolute top-0 left-0 right-0 flex justify-between">
                {[...Array(45)].map((_, i) => (
                  <div key={i} className="w-[1px] h-2 bg-gray-300/50" />
                ))}
              </div>
              
              {/* Center indicator */}
              <div className="absolute h-8 w-[2px] bg-purple-600 left-[30%] -top-4 z-10" />
              
              {/* Progress bars */}
              <div className="h-2 bg-purple-50 rounded-full relative overflow-hidden">
                <div className="absolute h-full w-[30%] left-0 bg-green-500" />
                <div className="absolute h-full w-[35%] left-[30%] bg-red-500" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            </p>
          </div>
        </div>

        {/* Second Timeline */}
        <div className="bg-purple-50/50 rounded-lg p-4">
          <div className="relative">
            {/* Scale background */}
            <div className="h-8 flex items-center justify-between px-1 text-xs text-gray-500">
              {['4sec', '3', '2', '1', '0', '1', '2', '3', '4'].map((num, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span>{num}</span>
                  <div className="h-3 w-[1px] bg-gray-300 mt-1" />
                </div>
              ))}
            </div>
            
            {/* Progress bar section */}
            <div className="relative mt-1">
              {/* Tick marks */}
              <div className="absolute top-0 left-0 right-0 flex justify-between">
                {[...Array(45)].map((_, i) => (
                  <div key={i} className="w-[1px] h-2 bg-gray-300/50" />
                ))}
              </div>
              
              {/* Center indicator */}
              <div className="absolute h-8 w-[2px] bg-purple-600 left-[50%] -top-4 z-10" />
              
              {/* Progress bars */}
              <div className="h-2 bg-purple-50 rounded-full relative overflow-hidden">
                <div className="absolute h-full w-[20%] right-[50%] bg-green-500" />
                <div className="absolute h-full w-[30%] left-[50%] bg-red-500" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default TimeTaken;

