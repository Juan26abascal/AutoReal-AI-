import React from 'react';
import { MessageCircle, Calendar, Phone, Bot, Inbox, Megaphone, FileText, Settings } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MessageCircle className="h-6 w-6 text-blue-500" />,
      title: "Conversational AI",
      description: "Leverage ChatGPT technology for intelligent lead engagement across all channels - from email to WhatsApp."
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-500" />,
      title: "Smart Scheduling",
      description: "AI-powered booking system that autonomously manages appointments and follow-ups."
    },
    {
      icon: <Inbox className="h-6 w-6 text-blue-500" />,
      title: "Magic Inbox",
      description: "Unified communication hub for emails, texts, calls, and social media messages."
    },
    {
      icon: <Megaphone className="h-6 w-6 text-blue-500" />,
      title: "AI Marketing Engine",
      description: "Create compelling campaigns, content, and ads with our AI-powered marketing suite."
    },
    {
      icon: <FileText className="h-6 w-6 text-blue-500" />,
      title: "Transaction Management",
      description: "Streamline document signing, storage, and transaction workflows automatically."
    },
    {
      icon: <Settings className="h-6 w-6 text-blue-500" />,
      title: "Custom Solutions",
      description: "Tailored automation workflows designed specifically for your agency's needs."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Scale Your Real Estate Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines AI technology with industry-specific tools 
            to automate and optimize every aspect of your real estate operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;