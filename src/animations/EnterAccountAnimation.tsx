import React, { useState, useEffect } from 'react';

interface AnimationProps {
  darkMode: boolean;
}

const EnterAccountAnimation: React.FC<AnimationProps> = ({ darkMode }) => {
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [activeKey, setActiveKey] = useState<number | null>(null);
  const [step, setStep] = useState<1 | 2>(1);

  useEffect(() => {
    const numbers = ['1', '2', '3', '4', '5', '6'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < numbers.length) {
        setActiveKey(parseInt(numbers[currentIndex]));
        setAccountNumber(prev => prev + numbers[currentIndex]);
        
        setTimeout(() => {
          setActiveKey(null);
        }, 300);
        
        currentIndex++;
      } else {
        if (step === 1) {
          setStep(2);
          setAccountNumber('');
          currentIndex = 0;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setAccountNumber('');
            setStep(1);
          }, 1000);
        }
      }
    }, 700);
    
    return () => clearInterval(interval);
  }, [step]);

  return (
    <div className={`relative w-full aspect-[4/3] border-4 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'} rounded-lg flex flex-col items-center justify-center overflow-hidden`}>
      <div className={`w-full h-full flex flex-col items-center`}>
        <div className={`w-3/4 h-1/2 mx-auto mt-4 ${darkMode ? 'bg-black' : 'bg-blue-900'} rounded-md relative flex flex-col items-center justify-center border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
          <div className={`text-center ${darkMode ? 'text-white' : 'text-white'} p-2 text-sm font-bold mb-2`}>
            {step === 1 ? 'Enter Account Number' : 'Re-enter Account Number'}
          </div>
          
          <div className={`w-3/4 h-10 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded flex items-center justify-start px-3 mb-4`}>
            <span className="text-lg font-mono">{accountNumber}</span>
          </div>
          
          <div className="text-xs text-white opacity-70">
            Press ENTER when done
          </div>
        </div>
        
        <div className="relative w-full flex justify-center mt-4">
          <div className={`w-1/3 h-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-600'} relative overflow-hidden`}>
            <div className={`w-6 h-2 ${darkMode ? 'bg-[#ffd200]' : 'bg-[#ffd200]'} absolute right-0`}></div>
          </div>
        </div>
        
        <div className={`grid grid-cols-3 gap-2 mt-8 ${darkMode ? 'text-white' : 'text-black'}`}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((num, i) => (
            <div 
              key={i} 
              className={`w-8 h-8 ${
                activeKey === num 
                  ? 'bg-[#ffd200] text-black' 
                  : darkMode 
                    ? 'bg-gray-800' 
                    : 'bg-gray-300'
              } rounded-md flex items-center justify-center text-sm font-bold transition-colors duration-200`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnterAccountAnimation;