import React from 'react';
import { Sparkles, Settings } from 'lucide-react';

const Solution = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            AutoReal: The{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              AI-Powered Platform
            </span>{' '}
            That Streamlines Your Real Estate Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            AutoReal eliminates the chaos of managing leads, appointments, and follow-ups. With AI-powered tools and an intuitive dashboard, we streamline your operations so you can focus on closing deals.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed for real estate agencies, AutoReal offers customizable workflows, smart automations, and seamless integrations—bringing clarity and control to your business while helping you grow faster.
          </p>
        </div>
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all text-lg">
            Show Me How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;