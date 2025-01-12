import React from 'react';
import { ClipboardCheck } from 'lucide-react';
import pic from "./pens.jpg"
import pic1 from "./suitguy.jpg"

function ResultCard() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl p-6">
      <div className="text-center space-y-2">
        <div className="flex justify-center">
          <img
            src={pic}
            alt="Result illustration"
            className="w-32 h-32"
          />
        </div>
        <h2 className="text-[#6366F1] text-2xl font-semibold">Your Result!</h2>
        <p className="text-gray-500 text-sm">All your insights & details in one place</p>
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-start gap-3">
            <div className="bg-[#EEF2FF] p-2.5 rounded-xl">
              <ClipboardCheck className="w-6 h-6 text-[#6366F1]" />
            </div>
            <div className="space-y-2">
              <span className="bg-[#818CF8] text-white text-xs px-3 py-1 rounded-full inline-block">
                YOU'VE PASSED!
              </span>
              <div className="flex items-center gap-2">
                <div >
                <span className="text-2xl font-bold">136</span>
                <span className="text-gray-500 text-sm">/240</span>
                
                </div>
                <div class="border-t border-red-300"></div> 
                <br />


                <div >
                <span className=" text-white flex items-center">
                <h1 className='bg-[#14B8A6]'> 76% </h1>
                </span>
                
                <span className='text-xs px-2 py-1'>
                ACCURACY
                </span>
                </div>
    
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full overflow-hidden">
                <img 
                  src={pic1} 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <div className="text-xs text-[#6366F1]">Top Score</div>
                <div className="flex items-baseline gap-1">
                  <span className="font-semibold">230</span>
                  <span className="text-gray-500 text-sm">/240</span>
                </div>
              </div>
            </div>
            <span className="bg-[#14B8A6] text-white text-xs p-1 rounded-full inline-block">
            92% ACCURACY
              </span>
            
          </div>
         <div class="border-t border-gray-300"></div>
          
        <div className='p-2'>
        <div className="text-xs text-gray-500 mb-3">By Parth Akotkar</div>
        </div>


          <h3 className="font-semibold text-gray-900">Improve your Marks</h3>
          <p className="text-sm text-gray-500 mt-1">Improve your score by practicing more.</p>
          <button className="w-full bg-[#6366F1] text-white py-2.5 rounded-lg mt-4 text-sm font-medium">
            Practice more
          </button>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900">Revisit Paper</h3>
          <p className="text-sm text-gray-500 mt-1">
            Challenge your friends by simply sharing a link to this test
          </p>
          <button className="w-full bg-[#6366F1] text-white py-2.5 rounded-lg mt-4 text-sm font-medium">
            Visit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;

