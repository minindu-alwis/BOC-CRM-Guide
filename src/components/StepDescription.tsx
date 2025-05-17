import React from 'react';

interface StepDescriptionProps {
  title: string;
  description: string;
  step: number;
  totalSteps: number;
  darkMode: boolean;
}

const StepDescription: React.FC<StepDescriptionProps> = ({
  title,
  description,
  step,
  totalSteps,
  darkMode
}) => {
  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-[#ffd200]/10'}`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
          darkMode ? 'bg-gray-600 text-white' : 'bg-[#ffd200] text-black'
        }`}>
          Step {step} of {totalSteps}
        </span>
      </div>
      
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{description}</p>
    </div>
  );
};

export default StepDescription;