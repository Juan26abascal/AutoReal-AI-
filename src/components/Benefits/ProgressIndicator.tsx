import React from 'react';

interface ProgressIndicatorProps {
  totalSteps: number;
  activeStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ totalSteps, activeStep }) => {
  return (
    <div className="hidden lg:flex flex-col items-center h-full py-8">
      <div className="relative h-full w-0.5 bg-gray-200">
        <div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 to-blue-600 transition-all duration-500"
          style={{ 
            height: `${(activeStep / (totalSteps - 1)) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default ProgressIndicator;