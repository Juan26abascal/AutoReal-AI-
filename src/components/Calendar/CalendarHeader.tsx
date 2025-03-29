import React from 'react';

const CalendarHeader = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Schedule Your{' '}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Free Strategy Session
        </span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Choose a time that works best for you, and we'll help you transform your real estate business.
      </p>
    </div>
  );
};

export default CalendarHeader;