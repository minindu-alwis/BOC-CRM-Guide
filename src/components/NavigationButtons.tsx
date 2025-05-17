import React from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface NavigationButtonsProps {
  onNext: () => void;
  onPrevious: () => void;
  onHome: () => void;
  currentStep: number;
  totalSteps: number;
  darkMode: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onNext,
  onPrevious,
  onHome,
  currentStep,
  totalSteps,
  darkMode
}) => {
  const progressPercentage = ((currentStep + 1) / totalSteps) * 100;
  
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-gray-300 rounded-full h-2.5 mb-6 overflow-hidden">
        <div 
          className="bg-[#ffd200] h-2.5 rounded-full transition-all duration-500 ease-in-out" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between w-full max-w-md">
        <button
          onClick={onPrevious}
          disabled={currentStep === 0}
          className={`flex items-center px-4 py-2 rounded-md shadow ${
            currentStep === 0 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : darkMode 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-gray-200 text-black hover:bg-gray-300'
          } transition-colors`}
        >
          <ChevronLeft size={20} className="mr-2" />
          Previous
        </button>
        
        <button
          onClick={onNext}
          disabled={currentStep === totalSteps - 1}
          className={`flex items-center px-4 py-2 rounded-md shadow ${
            currentStep === totalSteps - 1 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-[#ffd200] text-black hover:bg-[#e6bd00]'
          } transition-colors`}
        >
          Next
          <ChevronRight size={20} className="ml-2" />
        </button>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        Step {currentStep + 1} of {totalSteps}
      </div>
    </div>
  );
};

export default NavigationButtons;