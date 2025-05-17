import React, { useState, useEffect } from 'react';

interface AnimationProps {
  darkMode: boolean;
}

const AccountTypeAnimation: React.FC<AnimationProps> = ({ darkMode }) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const accountTypes = ['Savings', 'Current', 'Credit'];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setSelectedType(accountTypes[currentIndex]);
      currentIndex = (currentIndex + 1) % accountTypes.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative w-full aspect-[4/3] border-4 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'} rounded-lg flex flex-col items-center justify-center overflow-hidden`}>
      <div className={`w-full h-full flex flex-col items-center`}>
        <div className={`w-3/4 h-1/2 mx-auto mt-4 ${darkMode ? 'bg-black' : 'bg-blue-900'} rounded-md relative flex flex-col items-center justify-center border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
          <div className={`text-center ${darkMode ? 'text-white' : 'text-white'} p-2 text-sm font-bold mb-4`}>
            Select Account Type
          </div>
          
          <div className="w-full flex flex-col items-center space-y-3">
            {accountTypes.map(type => (
              <div 
                key={type}
                className={`w-3/4 py-2 rounded text-center transition-colors duration-300 ${
                  selectedType === type 
                    ? 'bg-[#ffd200] text-black' 
                    : darkMode 
                      ? 'bg-gray-700' 
                      : 'bg-gray-200'
                }`}
              >
                {type}
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative w-full flex justify-center mt-4">
          <div className={`w-1/3 h-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-600'} relative overflow-hidden`}>
            <div className={`w-6 h-2 ${darkMode ? 'bg-[#ffd200]' : 'bg-[#ffd200]'} absolute right-0`}></div>
          </div>
        </div>
        
        <div className={`grid grid-cols-3 gap-2 mt-8 ${darkMode ? 'text-white' : 'text-black'}`}>
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

export default AccountTypeAnimation;