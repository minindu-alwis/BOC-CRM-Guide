import React, { useState, useEffect } from 'react';

interface ConfirmAccountStepProps {
  darkMode: boolean;
}

const ConfirmAccountStep: React.FC<ConfirmAccountStepProps> = ({ darkMode }) => {
  const [highlightedOption, setHighlightedOption] = useState<string | null>(null);
  
  useEffect(() => {
    const options = ['Confirm', 'Cancel'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      setHighlightedOption(options[currentIndex]);
      currentIndex = (currentIndex + 1) % options.length;
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`relative w-full aspect-[4/3] border-4 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'} rounded-lg flex flex-col items-center justify-center overflow-hidden`}>
      <div className={`w-full h-full flex flex-col items-center`}>
        <div className={`w-3/4 h-3/5 mx-auto mt-4 ${darkMode ? 'bg-black' : 'bg-blue-900'} rounded-md relative flex flex-col items-center justify-center border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
          <div className={`text-center ${darkMode ? 'text-white' : 'text-white'} p-2 text-sm font-bold mb-2`}>
            Confirm Account Details
          </div>
          
          <div className={`w-5/6 h-auto p-3 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded mb-4 text-sm`}>
            <div className="flex justify-between mb-1">
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Account No:</span>
              <span className="font-semibold">123456</span>
            </div>
            <div className="flex justify-between mb-1">
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Name:</span>
              <span className="font-semibold">John Doe</span>
            </div>
            <div className="flex justify-between">
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Branch:</span>
              <span className="font-semibold">Main Branch</span>
            </div>
          </div>
          
          <div className="w-5/6 flex justify-between">
            <button 
              className={`py-2 px-4 rounded ${
                highlightedOption === 'Confirm' 
                  ? 'bg-[#ffd200] text-black' 
                  : 'bg-gray-600 text-white'
              } transition-colors`}
            >
              Confirm
            </button>
            <button 
              className={`py-2 px-4 rounded ${
                highlightedOption === 'Cancel' 
                  ? 'bg-[#ffd200] text-black' 
                  : 'bg-gray-600 text-white'
              } transition-colors`}
            >
              Cancel
            </button>
          </div>
        </div>
        
        <div className="relative w-full flex justify-center mt-4">
          <div className={`w-1/3 h-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-600'} relative overflow-hidden`}>
            <div className={`w-6 h-2 ${darkMode ? 'bg-[#ffd200]' : 'bg-[#ffd200]'} absolute right-0`}></div>
          </div>
        </div>
        
        <div className={`grid grid-cols-3 gap-2 mt-6 ${darkMode ? 'text-white' : 'text-black'}`}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((num, i) => (
            <div key={i} className={`w-8 h-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-300'} rounded-md flex items-center justify-center text-sm font-bold`}>
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConfirmAccountStep;