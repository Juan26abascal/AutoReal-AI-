import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './Logo';
import NavLinks from './NavLinks';
import DemoButton from './DemoButton';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed w-full z-50 px-6 pt-6">
        <nav 
          className={`
            mx-auto 
            max-w-7xl 
            rounded-full 
            transition-all 
            duration-300
            ${scrolled 
              ? 'bg-white/80 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.08)]' 
              : 'bg-white/60 backdrop-blur-sm'
            }
          `}
        >
          <div className="flex items-center h-24 px-8">
            <div 
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleLogoClick}
            >
              <Logo />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                AutoReal
              </span>
            </div>
            
            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex flex-1 justify-center">
              <NavLinks />
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <DemoButton />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden ml-auto text-gray-600 hover:text-gray-900"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;