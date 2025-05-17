import React, { useState, useEffect } from 'react';
import { Home, Moon, Sun, Play, Pause } from 'lucide-react';
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
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <Header language={language} darkMode={darkMode} />
      
      <main className="flex-grow container mx-auto px-4 py-4 sm:py-6 max-w-4xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4">
          <button 
            onClick={handleHome}
            className="w-full sm:w-auto flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-2 rounded-md shadow-md transition-colors"
            aria-label="Go to home screen"
          >
            <Home size={18} className="mr-2" />
            <span>Home</span>
          </button>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 w-full sm:w-auto">
            <LanguageSelector 
              language={language} 
              onChange={setLanguage}
              darkMode={darkMode}
            />
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={`flex items-center px-3 py-2 rounded-md shadow-md transition-colors ${
                darkMode ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-white'
              }`}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={18} className="mr-1" /> : <Moon size={18} className="mr-1" />}
              <span className="hidden sm:inline">{darkMode ? 'Light' : 'Dark'}</span>
            </button>
            
            <button 
              onClick={() => setIsAutoProgressing(!isAutoProgressing)}
              className={`flex items-center px-3 py-2 rounded-md shadow-md transition-colors ${
                isAutoProgressing ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
              }`}
              aria-label={isAutoProgressing ? "Turn off auto progression" : "Turn on auto progression"}
            >
              {isAutoProgressing ? <Pause size={18} className="mr-1" /> : <Play size={18} className="mr-1" />}
              <span className="hidden sm:inline">Auto: {isAutoProgressing ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>
        
        <div className={`rounded-lg shadow-lg p-4 mb-6 transition-colors ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-white'
        }`}>
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