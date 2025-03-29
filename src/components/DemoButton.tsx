import React from 'react';

interface DemoButtonProps {
  className?: string;
}

const DemoButton: React.FC<DemoButtonProps> = ({ className = "" }) => {
  return (
    <button className={`bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transition-all ${className}`}>
      Book My Call
    </button>
  );
};

export default DemoButton;