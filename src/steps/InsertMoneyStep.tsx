import React, { useState, useEffect } from 'react';

interface InsertMoneyStepProps {
  darkMode: boolean;
}

const InsertMoneyStep: React.FC<InsertMoneyStepProps> = ({ darkMode }) => {
  const [moneyInserted, setMoneyInserted] = useState(false);
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!moneyInserted) {
        setMoneyInserted(true);
      } else {
        setCount(prev => {
          if (prev < 5) return prev + 1;
          return prev;
        });
      }
    }, 800);
    
    setTimeout(() => {
      clearInterval(interval);
      // Reset for demo purposes
      setTimeout(() => {
        setMoneyInserted(false);
        setCount(0);
      }, 1000);
    }, 3500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className={`relative w-full aspect-[4/3] border-4 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'} rounded-lg flex flex-col items-center justify-center overflow-hidden`}>
      <div className={`w-full h-full flex flex-col items-center`}>
        <div className={`w-3/4 h-1/2 mx-auto mt-4 ${darkMode ? 'bg-black' : 'bg-blue-900'} rounded-md relative flex flex-col items-center justify-center border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
          <div className={`text-center ${darkMode ? 'text-white' : 'text-white'} p-2 text-sm font-bold mb-2`}>
            Insert Cash
          </div>
          
          <div className={`w-3/4 h-12 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded flex items-center justify-between px-3 mb-4`}>
            <span className="text-sm">
              {moneyInserted 
                ? `${count} bills inserted (Rs. ${count * 1000})` 
                : 'No bills inserted'}
            </span>
            <div 
              className={`w-3 h-3 rounded-full ${
                moneyInserted ? 'bg-green-500' : 'bg-red-500'
              }`}
            ></div>
          </div>
          
          <div className="mt-2">
            <button 
              className={`py-2 px-6 rounded ${
                moneyInserted && count > 0
                  ? 'bg-[#ffd200] text-black' 
                  : 'bg-gray-600 text-white'
              } transition-colors`}
            >
              Confirm
            </button>
          </div>
        </div>
        
        <div className="relative w-full flex justify-center mt-4">
          <div className={`w-1/3 h-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-600'} relative overflow-hidden`}>
            <div className={`w-6 h-2 ${darkMode ? 'bg-[#ffd200]' : 'bg-[#ffd200]'} absolute right-0`}></div>
          </div>
        </div>
        
        <div className="w-full flex justify-center mt-4">
          <div 
            className={`w-24 h-8 bg-green-600 border border-green-800 ${
              moneyInserted ? 'animate-slideIn opacity-0' : ''
            }`}
          ></div>
        </div>
        
        <div className={`grid grid-cols-3 gap-2 mt-6 ${darkMode ? 'text-white' : 'text-black'}`}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((num, i) => (
            <div key={i} className={`w-8 h-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-300'} rounded-md flex items-center justify-center text-sm font-bold`}>
              {num}
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-20px);
            opacity: 0;
          }
        }
        .animate-slideIn {
          animation: slideIn 1s forwards;
        }
      `}</style>
    </div>
  );
};

export default InsertMoneyStep;