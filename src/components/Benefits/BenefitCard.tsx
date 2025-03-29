import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  headline: string;
  description: string;
  isActive?: boolean;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, headline, description, isActive }) => {
  return (
    <div 
      className={`
        p-8 rounded-2xl transition-all duration-500
        ${isActive ? 'bg-gradient-to-br from-blue-50 to-cyan-50 scale-[1.02]' : 'bg-white'}
      `}
    >
      <div className="flex gap-6">
        <div className={`
          p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600
          ${isActive ? 'scale-110' : 'opacity-75'}
        `}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{headline}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;