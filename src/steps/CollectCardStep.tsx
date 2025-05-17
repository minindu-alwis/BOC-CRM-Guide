import React, { useState, useEffect } from 'react';

interface CollectCardStepProps {
  darkMode: boolean;
}

const CollectCardStep: React.FC<CollectCardStepProps> = ({ darkMode }) => {
  const [cardVisible, setCardVisible] = useState(true);
  const [cardPosition, setCardPosition] = useState(0);
  
  useEffect(() => {
    let pos = 0;
    const interval = setInterval(() => {
      if (pos < 30) {
        pos += 2;
        setCardPosition(pos);
      } else {
        clearInterval(interval);
        
        setTimeout(() => {
          setCardVisible(false);
        }, 500);
        
        // Reset for demo purposes
        setTimeout(() => {
          setCardPosition(0);
          setCardVisible(true);
        }, 3000);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`relative w-full aspect-[4/3] border-4 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'} rounded-lg flex flex-col items-center justify-center overflow-hidden`}>
      <div className={`w-full h-full flex flex-col items-center`}>
        <div className={`w-3/4 h-2/5 mx-auto mt-4 ${darkMode ? 'bg-black' : 'bg-blue-900'} rounded-md relative flex flex-col items-center justify-center border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
          <div className={`text-center ${darkMode ? 'text-white' : 'text-white'} p-2 text-sm font-bold`}>
            Please Collect Your Card
          </div>
          
          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-200'} mt-2`}>
            Transaction Successful
          </div>
        </div>
        
        <div className="relative w-full flex justify-center mt-2">
          <div className={`w-1/3 h-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-600'} relative overflow-hidden`}>
            <div className={`w-6 h-2 ${darkMode ? 'bg-[#ffd200]' : 'bg-[#ffd200]'} absolute right-0`}></div>
          </div>
        </div>
        
        <div className="relative w-full flex justify-center mt-4 mb-2">
          <div className={`w-2/5 h-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-600'} relative overflow-visible flex items-center justify-center`}>
            <div className="text-[8px] text-center">CARD</div>
            
            {cardVisible && (
              <div 
                className={`absolute w-20 h-12 ${darkMode ? 'bg-[#ffd200]' : 'bg-[#ffd200]'} rounded-md p-1 flex flex-col justify-between transform translate-y-[-30px] transition-transform duration-200`}
                style={{ transform: `translateY(-${50 - cardPosition}px)` }}
              >
                <div className="w-full h-2 bg-gray-700 rounded-sm"></div>
                <div className="text-[8px] text-black font-bold">BOC BANK</div>
              </div>
            )}
          </div>
        </div>
        
        <div className={`grid grid-cols-3 gap-2 mt-4 ${darkMode ? 'text-white' : 'text-black'}`}>
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

export default CollectCardStep;