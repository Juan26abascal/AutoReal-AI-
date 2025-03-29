import React, { useEffect, useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarFrame from './CalendarFrame';

const BOOKING_URL = 'https://api.leadconnectorhq.com/widget/booking/T4U0eJOEj1qJW4wHLHCC';
const CALENDAR_ID = 'T4U0eJOEj1qJW4wHLHCC_1734808114468';

const CalendarEmbed = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      script.async = true;
      script.onload = () => {
        setIsScriptLoaded(true);
        if (window.GHL && typeof window.GHL.load === 'function') {
          window.GHL.load();
        }
      };
      document.body.appendChild(script);
    } else {
      setIsScriptLoaded(true);
    }
  }, []);

  return (
    <section className="py-24 bg-white" id="calendar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CalendarHeader />
        <div className="max-w-4xl mx-auto">
          {isScriptLoaded && (
            <CalendarFrame 
              bookingUrl={BOOKING_URL}
              id={CALENDAR_ID}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CalendarEmbed;