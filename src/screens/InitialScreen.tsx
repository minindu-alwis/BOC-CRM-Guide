import React from 'react';
import { CreditCard, Wallet } from 'lucide-react';
import { Language, FlowType } from '../App';

interface InitialScreenProps {
  onSelect: (flow: FlowType) => void;
  language: Language;
  darkMode: boolean;
}

const InitialScreen: React.FC<InitialScreenProps> = ({ onSelect, language, darkMode }) => {
  const getTitle = () => {
    switch (language) {
      case 'Sinhala': return 'ගනුදෙනු වර්ගය තෝරන්න';
      case 'Tamil': return 'பரிவர்த்தனை வகையைத் தேர்ந்தெடுக்கவும்';
      default: return 'Select Transaction Type';
    }
  };
  
  const getWithCardText = () => {
    switch (language) {
      case 'Sinhala': return 'කාඩ්පත සමඟ භාවිතා කරන්න';
      case 'Tamil': return 'அட்டையுடன் பயன்படுத்துங்கள்';
      default: return 'Using with Card';
    }
  };
  
  const getWithoutCardText = () => {
    switch (language) {
      case 'Sinhala': return 'කාඩ්පත නොමැතිව භාවිතා කරන්න';
      case 'Tamil': return 'அட்டை இல்லாமல் பயன்படுத்துங்கள்';
      default: return 'Using without Card';
    }
  };
  
  const getDepositText = () => {
    switch (language) {
      case 'Sinhala': return 'කාඩ්පත් රහිත තැන්පතුව';
      case 'Tamil': return 'அட்டையில்லா வைப்பு';
      default: return 'Cardless Deposit';
    }
  };
  
  const getWithdrawalText = () => {
    switch (language) {
      case 'Sinhala': return 'කාඩ්පත් රහිත ආපසු ගැනීම';
      case 'Tamil': return 'அட்டையில்லா பணம் எடுப்பு';
      default: return 'Cardless Withdrawal';
    }
  };
  
  return (
    <div className="p-4">
      <h2 className={`text-2xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        {getTitle()}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <button
          onClick={() => onSelect('withCard')}
          className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${
            darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'
          }`}
        >
          <CreditCard size={64} className="text-[#ffd200] mb-4" />
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {getWithCardText()}
          </h3>
          <p className={`mt-2 text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {language === 'English' && 'Access your account with your ATM card'}
            {language === 'Sinhala' && 'ඔබගේ ATM කාඩ්පත භාවිතයෙන් ගිණුමට පිවිසෙන්න'}
            {language === 'Tamil' && 'உங்கள் ATM அட்டையுடன் கணக்கை அணுகவும்'}
          </p>
        </button>
        
        <div className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg ${
          darkMode ? 'bg-gray-700' : 'bg-white'
        }`}>
          <Wallet size={64} className="text-[#ffd200] mb-4" />
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {getWithoutCardText()}
          </h3>
          <p className={`mt-2 text-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {language === 'English' && 'Perform transactions without an ATM card'}
            {language === 'Sinhala' && 'ATM කාඩ්පතක් නොමැතිව ගනුදෙනු කරන්න'}
            {language === 'Tamil' && 'ATM அட்டை இல்லாமல் பரிவர்த்தனைகளைச் செய்யுங்கள்'}
          </p>
          
          <div className="grid grid-cols-1 gap-3 w-full mt-4">
            <button
              onClick={() => onSelect('cardlessDeposit')}
              className={`py-2 px-4 rounded-md ${
                darkMode 
                  ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              } transition-colors`}
            >
              {getDepositText()}
            </button>
            
            <button
              onClick={() => onSelect('cardlessWithdrawal')}
              className={`py-2 px-4 rounded-md ${
                darkMode 
                  ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              } transition-colors`}
            >
              {getWithdrawalText()}
            </button>
          </div>
        </div>
      </div>
      
      <div className={`p-4 rounded-lg ${darkMode ? 'bg-black text-white' : 'bg-[#ffd200] text-black'}`}>
        <p className="text-center text-sm">
          {language === 'English' && 'This is a step-by-step guide to using BOC ATM machines. Each step will automatically advance after 4 seconds.'}
          {language === 'Sinhala' && 'මෙය BOC ATM යන්ත්‍ර භාවිතා කිරීම සඳහා පියවරෙන් පියවර මාර්ගෝපදේශයකි. සෑම පියවරක්ම තත්පර 4කට පසු ස්වයංක්‍රීයව ඉදිරියට යනු ඇත.'}
          {language === 'Tamil' && 'இது BOC ATM இயந்திரங்களைப் பயன்படுத்துவதற்கான படிப்படியான வழிகாட்டி. ஒவ்வொரு படியும் 4 வினாடிகளுக்குப் பிறகு தானாகவே முன்னேறும்.'}
        </p>
      </div>
    </div>
  );
};

export default InitialScreen;