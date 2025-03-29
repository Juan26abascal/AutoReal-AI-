import React from 'react';
import FadeIn from './Animation/FadeIn';

const integrationLogos = [
  {
    name: "Salesforce",
    url: "https://www.vectorlogo.zone/logos/salesforce/salesforce-ar21.svg"
  },
  {
    name: "HubSpot",
    url: "https://www.vectorlogo.zone/logos/hubspot/hubspot-ar21.svg"
  },
  {
    name: "Mailchimp",
    url: "https://www.vectorlogo.zone/logos/mailchimp/mailchimp-ar21.svg"
  },
  {
    name: "Calendly",
    url: "https://assets.calendly.com/assets/frontend/media/logo-square-cd364a3c33976d32792a.png"
  },
  {
    name: "Slack",
    url: "https://www.vectorlogo.zone/logos/slack/slack-ar21.svg"
  },
  {
    name: "DocuSign",
    url: "https://www.vectorlogo.zone/logos/docusign/docusign-ar21.svg"
  },
  {
    name: "Zapier",
    url: "https://www.vectorlogo.zone/logos/zapier/zapier-ar21.svg"
  },
  {
    name: "Twilio",
    url: "https://www.vectorlogo.zone/logos/twilio/twilio-ar21.svg"
  }
];

const Integrations = () => {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent inline-block">
              Why pay for multiple tools
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
              when AutoReal does it all?
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-wrap justify-center items-center gap-12 max-w-5xl mx-auto">
          {integrationLogos.map((logo, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                <img
                  src={logo.url}
                  alt={`${logo.name} logo`}
                  className="h-full object-contain"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;