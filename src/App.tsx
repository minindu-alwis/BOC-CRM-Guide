import React, { useState, useEffect } from 'react';
import { Home } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationButtons from './components/NavigationButtons';
import LanguageSelector from './components/LanguageSelector';
import InitialScreen from './screens/InitialScreen';
import WithCardFlow from './flows/WithCardFlow';
import CardlessDepositFlow from './flows/CardlessDepositFlow';
import CardlessWithdrawalFlow from './flows/CardlessWithdrawalFlow';

// Types
export type Language = 'English' | 'Sinhala' | 'Tamil';
export type FlowType = 'initial' | 'withCard' | 'cardlessDeposit' | 'cardlessWithdrawal';

function App() {
  const [currentFlow, setCurrentFlow] = useState<FlowType>('initial');
  const [language, setLanguage] = useState<Language>('English');
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoProgressing, setIsAutoProgressing] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  // Reset step when flow changes
  useEffect(() => {
    setCurrentStep(0);
  }, [currentFlow]);
  
  // Auto progress timer
  useEffect(() => {
    if (!isAutoProgressing) return;
    
    const timer = setTimeout(() => {
      const maxSteps = getMaxSteps();
      if (currentStep < maxSteps - 1) {
        setCurrentStep(currentStep + 1);
      }
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [currentStep, currentFlow, isAutoProgressing]);
  
  const getMaxSteps = () => {
    switch (currentFlow) {
      case 'withCard': return 9;
      case 'cardlessDeposit': return 9;
      case 'cardlessWithdrawal': return 10;
      default: return 1;
    }
  };
  
  const handleNext = () => {
    const maxSteps = getMaxSteps();
    if (currentStep < maxSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleHome = () => {
    setCurrentFlow('initial');
    setCurrentStep(0);
  };
  
  const handleFlowSelect = (flow: FlowType) => {
    setCurrentFlow(flow);
    setCurrentStep(0);
  };
  
  const renderCurrentScreen = () => {
    switch (currentFlow) {
      case 'withCard':
        return <WithCardFlow currentStep={currentStep} language={language} darkMode={darkMode} />;
      case 'cardlessDeposit':
        return <CardlessDepositFlow currentStep={currentStep} language={language} darkMode={darkMode} />;
      case 'cardlessWithdrawal':
        return <CardlessWithdrawalFlow currentStep={currentStep} language={language} darkMode={darkMode} />;
      default:
        return <InitialScreen onSelect={handleFlowSelect} language={language} darkMode={darkMode} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header language={language} />
      
      <main className="flex-grow container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={handleHome}
            className="flex items-center bg-[#ffd200] hover:bg-[#e6bd00] text-black px-3 py-2 rounded-md shadow-md transition-colors"
          >
            <Home size={18} className="mr-3" />
            <span>Home</span>
          </button>
         <div className="flex items-center">
  <LanguageSelector 
    language={language} 
    onChange={setLanguage} 
  />

            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`px-3 py-2 rounded-md shadow-md ${
                darkMode ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-white'
              }`}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            
            <button 
              onClick={() => setIsAutoProgressing(!isAutoProgressing)}
              className={`px-3 py-2 rounded-md shadow-md ${
                isAutoProgressing ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              }`}
            >
              {isAutoProgressing ? 'Auto: ON' : 'Auto: OFF'}
            </button>
          </div>
        </div>
        
        <div className={`bg-white rounded-lg shadow-lg p-4 mb-8 ${darkMode ? 'bg-gray-800 text-white' : ''}`}>
          {renderCurrentScreen()}
        </div>
        
        {currentFlow !== 'initial' && (
          <NavigationButtons 
            onNext={handleNext} 
            onPrevious={handlePrevious}
            onHome={handleHome}
            currentStep={currentStep}
            totalSteps={getMaxSteps()}
            darkMode={darkMode}
          />
        )}
      </main>
      
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;