import React from 'react';
import { Home, Zap, Users, HelpCircle, BarChart2, TestTube, Bell } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-[#1E2330] border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto h-[60px] px-6 flex items-center justify-between">
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 text-[#16B8B8]"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-white text-lg font-medium">Firstbench</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a 
              href="/dashboard" 
              className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
            >
              <Home className="w-[18px] h-[18px] mr-2 opacity-80" />
              <span>Dashboard</span>
            </a>
            <a 
              href="/firstguru" 
              className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
            >
              <Zap className="w-[18px] h-[18px] mr-2 opacity-80" />
              <span>FirstGuru</span>
            </a>
            <a 
              href="/townhall" 
              className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
            >
              <Users className="w-[18px] h-[18px] mr-2 opacity-80" />
              <span>TownHall</span>
            </a>
            <a 
              href="/ai-evaluation" 
              className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
            >
              <HelpCircle className="w-[18px] h-[18px] mr-2 opacity-80" />
              <span>AI Evaluation</span>
            </a>
            <a 
              href="/performance" 
              className="flex items-center text-gray-300 hover:text-white transition-colors text-sm"
            >
              <BarChart2 className="w-[18px] h-[18px] mr-2 opacity-80" />
              <span>Performance</span>
            </a>
          </div>
        </div>

        {/* Right Side Items */}
        <div className="flex items-center space-x-6">
          <button className="hidden md:flex items-center text-[#16B8B8] hover:text-[#16B8B8] hover:bg-[#16B8B8]/10 px-4 py-1.5 rounded-md transition-colors text-sm">
            <TestTube className="w-[18px] h-[18px] mr-2" />
            Mock Test
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="flex items-center">
            <button className="flex items-center space-x-2 rounded-md hover:bg-white/5 px-2 py-1.5 transition-colors">
              <div className="h-7 w-7 bg-[#F472B6] rounded-md flex items-center justify-center text-white text-sm font-medium">
                P
              </div>
              <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;