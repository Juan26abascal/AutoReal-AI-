import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavLinksProps {
  className?: string;
  isMobile?: boolean;
  onMobileMenuClose?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ 
  className = "", 
  isMobile = false,
  onMobileMenuClose
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const baseStyles = isMobile
    ? "block w-full px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-sm"
    : "px-5 py-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId?: string) => {
    e.preventDefault();
    
    if (onMobileMenuClose) {
      onMobileMenuClose();
    }

    if (sectionId === 'home') {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    if (sectionId === 'about') {
      // For About Us, always navigate and scroll to top immediately
      navigate('/about');
      window.scrollTo({ top: 0 });
      return;
    }

    // For all other sections
    if (location.pathname !== '/') {
      // If we're not on the home page, first navigate there
      navigate('/');
      // Then scroll to section after a brief delay to ensure the page has loaded
      setTimeout(() => scrollToSection(sectionId!), 100);
    } else {
      // If we're already on the home page, just scroll to the section
      scrollToSection(sectionId!);
    }
  };

  return (
    <div className={`${className} ${isMobile ? 'flex flex-col px-2' : 'flex items-center space-x-4'}`}>
      <a 
        href="/"
        onClick={(e) => handleNavigation(e, 'home')}
        className={baseStyles}
      >
        Home
      </a>
      <a 
        href="/about"
        onClick={(e) => handleNavigation(e, 'about')}
        className={baseStyles}
      >
        About Us
      </a>
      <a 
        href="#features"
        onClick={(e) => handleNavigation(e, 'features')}
        className={baseStyles}
      >
        Features
      </a>
      <a 
        href="#testimonials"
        onClick={(e) => handleNavigation(e, 'testimonials')}
        className={baseStyles}
      >
        Testimonials
      </a>
      <a 
        href="#faqs"
        onClick={(e) => handleNavigation(e, 'faqs')}
        className={baseStyles}
      >
        FAQs
      </a>
    </div>
  );
};

export default NavLinks;