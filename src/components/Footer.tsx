import React from 'react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'}`}>
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <p className="text-sm">© {new Date().getFullYear()} Bank of Ceylon - ATM Guide</p>
        <p className="text-xs mt-1">This guide is provided for educational purposes only</p>
      </div>
    </footer>
  );
};

export default Footer;