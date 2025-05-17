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
    <header className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between max-w-4xl">
        <div className="flex items-center">
          <div className="bg-[#ffd200] text-black font-bold text-xl px-3 py-1 rounded mr-3">BOC</div>
          <h1 className="text-xl font-semibold">{getTitle()}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;