import React, { useEffect, useRef, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 700,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay before adding the class to ensure proper rendering
          setTimeout(() => {
            if (entry.target.classList) {
              entry.target.classList.add('animate-in');
            }
          }, 100);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '-10%'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      // Reset the element's state before observing
      currentElement.classList.remove('animate-in');
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translate3d(0, 30px, 0)';
      case 'down': return 'translate3d(0, -30px, 0)';
      case 'left': return 'translate3d(30px, 0, 0)';
      case 'right': return 'translate3d(-30px, 0, 0)';
      default: return 'translate3d(0, 30px, 0)';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all will-change-transform ${className}`}
      style={{
        opacity: 0,
        transform: getTransform(),
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;