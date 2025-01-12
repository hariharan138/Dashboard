import React from 'react';

function SubjectUnderstanding() {
  const subjects = [
    { name: "Geography", color: "bg-emerald-500" },
    { name: "Politics", color: "bg-yellow-500" },
    { name: "Current Affairs", color: "bg-teal-500" },
    { name: "General Studies", color: "bg-blue-500" },
    { name: "Mathematics", color: "bg-purple-500" },
    { name: "Social Studies", color: "bg-gray-400" },
    { name: "English Literature", color: "bg-red-500" },
    { name: "Indian History", color: "bg-orange-500" },
    { name: "Economics", color: "bg-teal-500" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-2">
      <div className="flex items-center gap-1 mb-2">
        <svg 
          viewBox="0 0 24 24" 
          className="w-3 h-3 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <h2 className="text-[12px] font-large text-gray-500 mb-1">Improvements</h2>
      </div>
      <h2 className="text-[10px] font-medium text-gray-700 mb-1">Subject Understanding</h2>
      <div className="flex flex-wrap gap-1">
        {subjects.map((subject) => (
          <span 
            key={subject.name} 
            className={`${subject.color} text-white text-[8px] px-1 py-0.5 rounded-sm`}
          >
            {subject.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SubjectUnderstanding;

