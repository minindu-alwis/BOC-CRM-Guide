import React from 'react';
import { Check } from 'lucide-react';

interface TransactionCompleteStepProps {
  darkMode: boolean;
}

const TransactionCompleteStep: React.FC<TransactionCompleteStepProps> = ({ darkMode }) => {
  return (
    <div className={`relative w-full aspect-[4/3] border-4 ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-100'} rounded-lg flex flex-col items-center justify-center overflow-hidden`}>
      <div className={`w-full h-full flex flex-col items-center`}>
        <div className={`w-3/4 h-1/2 mx-auto mt-4 ${darkMode ? 'bg-black' : 'bg-blue-900'} rounded-md relative flex flex-col items-center justify-center border-2 ${darkMode ? 'border-gray-600' : 'border-gray-400'}`}>
          <div className="rounded-full bg-green-500 p-3 mb-4">
            <Check size={32} className="text-white" />
          </div>
          
          <div className={`text-center ${darkMode ? 'text-white' : 'text-white'} p-2 text-lg font-bold mb-2`}>
            Transaction Complete
          </div>
          
          <div className="text-sm text-center text-white opacity-80 px-4">
            Your withdrawal of Rs. 5,000 has been processed successfully.
          </div>
          
          <div className="text-xs text-center text-white opacity-70 mt-4">
            Thank you for using BOC ATM
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

export default TransactionCompleteStep;