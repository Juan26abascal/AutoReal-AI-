import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActionStepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  isActive?: boolean;
}

const ActionStep: React.FC<ActionStepProps> = ({ number, title, description, icon: Icon, isActive }) => {
  return (
    <div 
      className={`
        relative p-8 rounded-2xl transition-all duration-500
        ${isActive ? 'bg-gradient-to-br from-blue-50 to-cyan-50 scale-[1.02]' : 'bg-white'}
      `}
    >
      <div className="flex items-start gap-6">
        <div className={`
          relative flex items-center justify-center w-12 h-12 rounded-full
          bg-gradient-to-r from-cyan-400 to-blue-600 transition-transform duration-500
          ${isActive ? 'scale-110' : 'opacity-90'}
        `}>
          <span className="text-xl font-bold text-white">{number}</span>
          <div className="absolute -right-2 -top-2">
            <Icon className="h-6 w-6 text-blue-500" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ActionStep;