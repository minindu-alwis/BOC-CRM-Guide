import React from 'react';

interface AnimationProps {
  darkMode: boolean;
}

const InsertCardAnimation: React.FC<AnimationProps> = ({ darkMode }) => {
  return (
    <div className={`relative w-full aspect-[4/3] border-4 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'} rounded-lg flex flex-col items-center justify-center overflow-hidden`}>
      <div className={`w-full h-full flex flex-col items-center`}>
        <div className={`w-3/4 h-1/2 mx-auto mt-4 ${darkMode ? 'bg-black' : 'bg-blue-900'} rounded-md relative flex items-center justify-center border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
          <div className={`text-center ${darkMode ? 'text-white' : 'text-white'} p-2 text-sm`}>
            Welcome to BOC Bank<br />
            Please insert your card
          </div>
        </div>
        
        <div className="relative w-full flex justify-center mt-4">
          <div className={`w-1/3 h-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-600'} relative overflow-hidden`}>
            <div className="absolute right-1 -top-1 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
        
        <div className="relative w-full flex justify-center mt-4">
          <div className={`absolute w-20 h-12 ${darkMode ? 'bg-[#ffd200]' : 'bg-[#ffd200]'} rounded-md p-1 flex flex-col justify-between transform translate-y-[-50px] animate-[insertCard_3s_infinite]`}>
            <div className="w-full h-2 bg-gray-700 rounded-sm"></div>
            <div className="text-[8px] text-black font-bold">BOC BANK</div>
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

export default InsertCardAnimation;