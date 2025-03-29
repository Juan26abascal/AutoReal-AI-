import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all group">
      <div className="mb-4">
        <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-cyan-400/10 to-blue-600/10 group-hover:from-cyan-400/20 group-hover:to-blue-600/20 transition-colors">
          <Icon className="h-6 w-6 text-blue-500" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;