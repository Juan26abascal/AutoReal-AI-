import React, { useEffect, useRef, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface CalendarFrameProps {
  bookingUrl: string;
  id: string;
}

const CalendarFrame: React.FC<CalendarFrameProps> = ({ bookingUrl, id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Add message event listener for iframe communication
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://api.leadconnectorhq.com') {
        // Handle any messages from the calendar iframe
        if (event.data.type === 'calendar-loaded') {
          setIsLoading(false);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleError = () => {
    setIsLoading(false);
    setError('Failed to load the calendar. Please try again later.');
  };

  return (
    <div className="relative min-h-[700px] bg-white rounded-2xl shadow-lg p-8">
      {isLoading && <LoadingSpinner />}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-red-500">{error}</p>
        </div>
      )}
      <iframe
        ref={iframeRef}
        src={bookingUrl}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: '100%',
          height: '700px',
          border: 'none',
          overflow: 'hidden',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out'
        }}
        scrolling="no"
        id={id}
        allow="accelerometer; autoplay; camera; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default CalendarFrame;