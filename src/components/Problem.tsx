import React from 'react';
import { AlertCircle, Clock, MessageSquare, TrendingDown } from 'lucide-react';
import FadeIn from './Animation/FadeIn';

const Problem = () => {
  const problems = [
    {
      icon: <AlertCircle className="h-6 w-6 text-red-500" />,
      title: "Leads Slipping Through the Cracks",
      description: "Missed texts, slow follow-ups, and unanswered calls are costing you clients."
    },
    {
      icon: <Clock className="h-6 w-6 text-red-500" />,
      title: "Scheduling Overload",
      description: "Endless back-and-forth to book showings, meetings, and appointments eats up your day."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-red-500" />,
      title: "Scattered Communications",
      description: "Managing texts, emails, social DMs, and calls across multiple platforms feels impossible."
    },
    {
      icon: <TrendingDown className="h-6 w-6 text-red-500" />,
      title: "Weak Marketing Impact",
      description: "Unfocused campaigns and inconsistent messaging are holding back your agency's growth."
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tired of{' '}
              <span className="text-red-500">Losing Leads</span>,{' '}
              <span className="text-red-500">Wasting Time</span>, and{' '}
              <span className="text-red-500">Managing Disorganized Systems</span>?
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {problems.map((problem, index) => (
            <FadeIn key={index} delay={index * 200}>
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2 bg-red-50 rounded-lg">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600">
                    {problem.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={800}>
          <div className="text-center">
            <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all text-lg">
              I Want to Stop Losing Leads
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Problem;