import React, { useState, useEffect } from 'react';

interface CardlessServiceStepProps {
  darkMode: boolean;
  type: 'deposit' | 'withdrawal';
}

const CardlessServiceStep: React.FC<CardlessServiceStepProps> = ({ darkMode, type }) => {
  const [selected, setSelected] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSelected(prev => !prev);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`relative w-full aspect-[4/3] border-4 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'} rounded-lg flex flex-col items-center justify-center overflow-hidden`}>
      <div className={`w-full h-full flex flex-col items-center`}>
        <div className={`w-3/4 h-1/2 mx-auto mt-4 ${darkMode ? 'bg-black' : 'bg-blue-900'} rounded-md relative flex items-center justify-center border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
          <div className={`text-center ${darkMode ? 'text-white' : 'text-white'} p-4 text-sm`}>
            <div className="mb-4">Select Service</div>
            
            <div 
              className={`w-full py-3 rounded-md ${
                type === 'deposit' && !selected ? 'bg-[#ffd200] text-black' : 'bg-gray-600 text-white'
              } transition-colors duration-300 text-center mb-2`}
            >
              {type === 'deposit' ? 'Cardless Deposit' : 'Cash Withdrawal'}
            </div>
            
            <div 
              className={`w-full py-3 rounded-md ${
                (type === 'withdrawal' && !selected) || (type === 'deposit' && selected) 
                  ? 'bg-[#ffd200] text-black' 
                  : 'bg-gray-600 text-white'
              } transition-colors duration-300 text-center`}
            >
              {type === 'deposit' ? 'Bill Payment' : 'Cardless Withdrawal'}
            </div>
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

export default CardlessServiceStep;