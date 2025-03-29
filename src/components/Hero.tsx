import React from 'react';
import { MessageSquare, Calendar, Database, Bot } from 'lucide-react';
import FadeIn from './Animation/FadeIn';

const Hero = () => {
  return (
    <div className="min-h-[90vh] pt-48 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8">
              The All-in-One Platform to
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"> Power Your Real Estate Agency</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              AutoReal empowers your Real Estate Agency with an AI-driven platform designed to engage leads, 
              automate workflows and follow-ups, centralize communication, and simplify document management—all 
              in one seamless solution.
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex justify-center mb-16">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all text-lg">
                Get Started Free
              </button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: MessageSquare, text: "AI Chat Support" },
              { icon: Calendar, text: "Smart Scheduling" },
              { icon: Database, text: "Autonomous CRM" },
              { icon: Bot, text: "AI Automations" }
            ].map((item, index) => (
              <FadeIn key={index} delay={500 + index * 100}>
                <div className="flex flex-col items-center">
                  <item.icon className="h-8 w-8 text-blue-500 mb-2" />
                  <p className="font-medium">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;