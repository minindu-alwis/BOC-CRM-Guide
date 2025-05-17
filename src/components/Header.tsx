import React from 'react';
import { Language } from '../App';

interface HeaderProps {
  language: Language;
}

const Header: React.FC<HeaderProps> = ({ language }) => {
  const getTitle = () => {
    switch (language) {
      case 'Sinhala': return 'බැංකු ඔෆ් සිලෝන් ඒටීඑම් මාර්ගෝපදේශය';
      case 'Tamil': return 'வங்கி ஆஃப் சிலோன் ஏடிஎம் வழிகாட்டி';
      default: return 'Bank of Ceylon ATM Guide';
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-5 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between max-w-6xl">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img 
              src="https://www.boc.lk/assets/images/logo/boc-logo.svg" 
              alt="Bank of Ceylon Logo" 
              className="h-10 drop-shadow-md"
            />
            <div className="ml-4 border-l-2 border-white/30 h-12"></div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white/90">
            {getTitle()}
          </h1>
        </div>
        
        <div className="hidden md:block">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/80">
              {language} Version
            </span>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 to-yellow-200 mt-2"></div>
    </header>
  );
};

export default Header;