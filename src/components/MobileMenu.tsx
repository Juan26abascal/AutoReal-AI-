import React from 'react';
import { X } from 'lucide-react';
import NavLinks from './NavLinks';
import DemoButton from './DemoButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`
        fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      onClick={onClose}
    >
      <div 
        className={`
          fixed right-0 top-0 h-full w-[280px] bg-white shadow-2xl
          transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
          
          <div className="mt-8">
            <NavLinks 
              className="space-y-1" 
              isMobile={true} 
              onMobileMenuClose={onClose}
            />
            <div className="mt-6 px-2">
              <DemoButton className="w-full text-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;