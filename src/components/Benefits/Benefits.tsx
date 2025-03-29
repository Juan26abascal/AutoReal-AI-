import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Calendar, Inbox, Sparkles, FileText } from 'lucide-react';
import BenefitCard from './BenefitCard';
import ProgressIndicator from './ProgressIndicator';

const benefits = [
  {
    icon: MessageSquare,
    headline: "Never Let a Lead Slip Away",
    description: "Our AI-driven system nurtures leads 24/7 through texts, emails, live chat, and social platforms like Facebook Messenger, Instagram, WhatsApp, and Google My Business—so no opportunity is missed."
  },
  {
    icon: Calendar,
    headline: "Scheduling on Autopilot",
    description: "Let the AI booking bot handle showings, consultations, and follow-ups automatically. Spend less time coordinating and more time closing."
  },
  {
    icon: Inbox,
    headline: "All Conversations, One Dashboard",
    description: "Bring every message—texts, emails, calls, voicemails, and social DMs—into one organized inbox. Respond faster and eliminate platform-hopping."
  },
  {
    icon: Sparkles,
    headline: "Smarter Marketing That Drives Growth",
    description: "Launch targeted campaigns, schedule social media posts, and build high-converting landing pages—all powered by AI-generated copy and visuals to keep your audience engaged."
  },
  {
    icon: FileText,
    headline: "Close Deals Faster, Stress-Free",
    description: "Simplify document signing, third-party notifications, and broker software integrations. Manage all your work smoothly from start to finish."
  }
];

const Benefits = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(ref => ref === entry.target);
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

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Effortlessly Manage Leads, Streamline Operations, and{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Close More Deals
            </span>
          </h2>
        </div>

        <div className="flex gap-12 max-w-6xl mx-auto">
          <ProgressIndicator totalSteps={benefits.length} activeStep={activeIndex} />
          
          <div className="flex-1 space-y-32"> {/* Increased spacing between cards */}
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                ref={el => cardRefs.current[index] = el}
                className="scroll-mt-64" // Increased scroll margin
              >
                <BenefitCard
                  icon={benefit.icon}
                  headline={benefit.headline}
                  description={benefit.description}
                  isActive={index === activeIndex}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all text-lg">
            Transform My Real Estate Business
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;