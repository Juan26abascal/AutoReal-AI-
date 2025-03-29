import React from 'react';
import FAQItem from './FAQItem';
import FadeIn from '../Animation/FadeIn';

const faqs = [
  {
    question: "Is AutoReal difficult to set up?",
    answer: "Not at all. Our team will first set everyhting up and thenguide you step by step to customize AutoReal for your agency's needs and learn how to use it. You'll be up and running in no time."
  },
  {
    question: "Will AutoReal integrate with my current broker software?",
    answer: "Yes! AutoReal seamlessly connects with leading broker transaction systems, so your current processes stay smooth and uninterrupted."
  },
  {
    question: "How does the AI qualify leads?",
    answer: "AutoReal's smart AI qualifying bots analyze leads in real time, prioritizing the most promising opportunities. This saves you time and improves your conversion rates. Moreover, it will be trained based on you, like your form and tone, so that it sounds exactly as you do"
  },
  {
    question: "Will I lose the personal touch by using AI?",
    answer: "Not at all. AutoReal's AI is designed to communicate naturally and professionally, enhancing client interactions while freeing you to focus on high-value tasks, and connecting with your clients in person for more time."
  },
  {
    question: "Can I make changes as my agency grows?",
    answer: "Absolutely. AutoReal is fully flexible—adjust workflows, messaging, and marketing campaigns anytime. Plus, our support team is always here to assist. Plus, we will be adding new advanced features every month."
  }
];

const FAQ = () => {
  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your Questions,{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Answered
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 200}>
              <FAQItem
                question={faq.question}
                answer={faq.answer}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;