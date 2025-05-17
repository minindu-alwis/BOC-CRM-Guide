import React from 'react';
import { Language } from '../App';

interface LanguageSelectorProps {
  language: Language;
  onChange: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onChange }) => {
  return (
    <div className="relative">
      <select
        value={language}
        onChange={(e) => onChange(e.target.value as Language)}
        className="bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffd200] focus:border-[#ffd200] appearance-none"
      >
        <option value="English">English</option>
        <option value="Sinhala">සිංහල</option>
        <option value="Tamil">தமிழ்</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSelector;