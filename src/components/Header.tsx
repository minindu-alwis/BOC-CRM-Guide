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
    <header className="bg-black text-white py-5 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between max-w-6xl">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img 
              src="https://www.boc.lk/assets/images/logo/boc-logo.svg" 
              alt="Bank of Ceylon Logo" 
              className="h-10 drop-shadow-md"
            />
            <div className="ml-4 border-l-2 border-yellow-400 h-12"></div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-yellow-400">
            {getTitle()}
          </h1>
        </div>
        
        <div className="hidden md:block">
          <div className="flex items-center space-x-2 bg-black px-3 py-1 rounded-full border border-yellow-400">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-yellow-400">
              {language} Version
            </span>
          </div>
        </div>
      </div>
      
      {/* Thick yellow accent bar */}
      <div className="h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 mt-2"></div>
    </header>
  );
};

export default Header;