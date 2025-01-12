import React from 'react';
import Navbar from './components/Navbar';
import ResultCard from './components/ResultCard';
import SubjectUnderstanding from './components/SubjectUnderstanding';
import ResponseTime from './components/ResponseTime';
import ApproachData from './components/ApproachData';
import Suggestions from './components/Suggestions';
import AccuracyComparison from './components/AccuracyComparison';
import TimeTaken from './components/TimeTaken';

import { CompareAcc } from './components/CompareAcc';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar />
      <div className="container mx-auto p-6   w-[85%]  ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <ResultCard />
            
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Compare Accuracy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CompareAcc />
              <CompareAcc />
              <CompareAcc />
            </div>

            {/* Subject Understanding and Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <SubjectUnderstanding />
              <ResponseTime />
              <ApproachData />
              <Suggestions />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AccuracyComparison />
              <TimeTaken />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
