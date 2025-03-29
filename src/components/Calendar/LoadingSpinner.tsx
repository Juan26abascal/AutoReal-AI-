import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gradient-to-r from-cyan-400 to-blue-600" />
    </div>
  );
};

export default LoadingSpinner;