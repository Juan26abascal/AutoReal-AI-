import React from 'react';

const stats = [
  {
    value: 200,
    suffix: '%',
    label: 'Increase in Conversion Rates with AI Automation'
  },
  {
    value: 18,
    suffix: 'h',
    label: 'Weekly Hours Saved Through Automation'
  },
  {
    value: 40,
    suffix: '%',
    label: 'Reduction in Operational Costs'
  },
  {
    value: 14.5,
    suffix: '%',
    label: 'Increase in Sales Productivity'
  },
  {
    value: 120,
    suffix: '%',
    label: 'More Qualified Leads with AI Nurturing'
  },
  {
    value: 92.5,
    suffix: '%',
    label: 'Faster Response Time to Inquiries'
  }
];

import StatCard from './StatCard';

const Stats = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 200} // Stagger the animations
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;