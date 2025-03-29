import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Settings, TrendingUp } from 'lucide-react';
import ActionStep from './ActionStep';

const steps = [
  {
    number: 1,
    icon: Calendar,
    title: "Book Your Free Strategy Session",
    description: "Choose a time that works for you. We'll identify your challenges and map out your growth goals."
  },
  {
    number: 2,
    icon: Settings,
    title: "Tailor AutoReal to Your Agency",
    description: "We'll customize workflows, AI tools, and features to align perfectly with your business needs."
  },
  {
    number: 3,
    icon: TrendingUp,
    title: "Grow Your Leads and Close More Deals",
    description: "With everything streamlined—lead nurturing, scheduling, marketing, and transactions—watch your agency thrive."
  }
];

const ActionPlan = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -30% 0px', // Increased margins for later triggering
        threshold: 0.5 // Increased threshold for more precise triggering
      }
    );

    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Getting Started Is as{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Easy as 1-2-3
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-32"> {/* Increased spacing between steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => stepRefs.current[index] = el}
              className="scroll-mt-64" // Increased scroll margin
            >
              <ActionStep
                number={step.number}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isActive={index === activeIndex}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all text-lg">
            Book My Free Strategy Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActionPlan;