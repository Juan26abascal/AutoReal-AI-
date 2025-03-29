import React, { useState, useEffect, useRef } from 'react';

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  value, 
  suffix = '', 
  label, 
  duration = 2000,
  delay = 0 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now() + delay;
    const endValue = value;

    const animate = () => {
      const now = Date.now();
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      const timePassed = now - startTime;
      const progress = Math.min(timePassed / duration, 1);
      const currentValue = Math.floor(endValue * progress);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration, delay, isVisible]);

  return (
    <div 
      ref={cardRef}
      className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-2">
        {count}{suffix}
      </div>
      <p className="text-gray-600 text-center text-sm">{label}</p>
    </div>
  );
};

export default StatCard;