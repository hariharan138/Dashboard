import React from 'react';
import { Home, Zap, Users, HelpCircle, BarChart2, TestTube, Bell } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-[#1F2937] px-6 py-3">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 text-teal-400"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-white text-xl font-semibold">Firstbench</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="/dashboard" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Home className="w-4 h-4 mr-2" />
              <span>Dashboard</span>
            </a>
            <a href="/firstguru" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Zap className="w-4 h-4 mr-2" />
              <span>FirstGuru</span>
            </a>
            <a href="/townhall" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Users className="w-4 h-4 mr-2" />
              <span>TownHall</span>
            </a>
            <a href="/ai-evaluation" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <HelpCircle className="w-4 h-4 mr-2" />
              <span>AI Evaluation</span>
            </a>
            <a href="/performance" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <BarChart2 className="w-4 h-4 mr-2" />
              <span>Performance</span>
            </a>
          </div>
        </div>

        {/* Right Side Items */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center text-teal-400 border border-teal-400 px-3 py-1 rounded hover:bg-teal-400/10 transition-colors">
            <TestTube className="w-4 h-4 mr-2" />
            Mock Test
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-pink-600 rounded-full flex items-center justify-center text-white font-semibold">
              P
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
