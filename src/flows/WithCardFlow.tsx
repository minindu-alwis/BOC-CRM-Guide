import React from 'react';
import { Language } from '../App';
import StepDescription from '../components/StepDescription';
import InsertCardAnimation from '../animations/InsertCardAnimation';
import LanguageSelectionStep from '../steps/LanguageSelectionStep';
import ReceiptSelectionStep from '../steps/ReceiptSelectionStep';
import ServiceSelectionStep from '../steps/ServiceSelectionStep';
import EnterPinStep from '../steps/EnterPinStep';
import WithdrawalServiceStep from '../steps/WithdrawalServiceStep';
import AccountTypeAnimation from '../animations/AccountTypeAnimation';
import AmountSelectionStep from '../steps/AmountSelectionStep';
import CollectCashAnimation from '../animations/CollectCashAnimation';
import CollectCardStep from '../steps/CollectCardStep';

interface WithCardFlowProps {
  currentStep: number;
  language: Language;
  darkMode: boolean;
}

const WithCardFlow: React.FC<WithCardFlowProps> = ({ currentStep, language, darkMode }) => {
  const getStepTitle = (step: number) => {
    const titles = {
      English: [
        'Insert Your Card',
        'Select Language',
        'Receipt Option',
        'Select Service',
        'Enter PIN',
        'Select Cash Withdrawal',
        'Select Account Type',
        'Enter Amount',
        'Collect Cash and Card'
      ],
      Sinhala: [
        'ඔබගේ කාඩ්පත ඇතුළු කරන්න',
        'භාෂාව තෝරන්න',
        'ලදුපත් විකල්පය',
        'සේවාව තෝරන්න',
        'PIN ඇතුළත් කරන්න',
        'මුදල් ආපසු ගැනීම තෝරන්න',
        'ගිණුම් වර්ගය තෝරන්න',
        'මුදල ඇතුළත් කරන්න',
        'මුදල් සහ කාඩ්පත ගන්න'
      ],
      Tamil: [
        'உங்கள் அட்டையை செருகவும்',
        'மொழியைத் தேர்ந்தெடுக்கவும்',
        'ரசீது விருப்பம்',
        'சேவையைத் தேர்ந்தெடுக்கவும்',
        'PIN ஐ உள்ளிடவும்',
        'பணம் எடுப்பதைத் தேர்ந்தெடுக்கவும்',
        'கணக்கு வகையைத் தேர்ந்தெடுக்கவும்',
        'தொகையை உள்ளிடவும்',
        'பணம் மற்றும் அட்டையைப் பெறுங்கள்'
      ]
    };
    
    return titles[language][step] || '';
  };
  
  const getStepDescription = (step: number) => {
    const descriptions = {
      English: [
        'Insert your ATM card into the card slot with the chip facing upward.',
        'Choose your preferred language for the transaction.',
        'Select whether you want to receive a receipt for this transaction.',
        'Choose the service you want to perform.',
        'Enter your 4-digit PIN securely. Make sure no one can see your PIN.',
        'Select the cash withdrawal option from the menu.',
        'Choose whether to withdraw from your savings or current account.',
        'Enter the amount you wish to withdraw. Must be in multiples of 100.',
        'Collect your cash and don\'t forget to take your card.'
      ],
      Sinhala: [
        'චිප් එක ඉහළට මුහුණලා ඔබගේ ATM කාඩ්පත කාඩ්පත් සුරුවට ඇතුළු කරන්න.',
        'ගනුදෙනුව සඳහා ඔබගේ කැමති භාෂාව තෝරන්න.',
        'මෙම ගනුදෙනුව සඳහා ලදුපතක් ලබා ගැනීමට අවශ්‍යද යන්න තෝරන්න.',
        'ඔබට කිරීමට අවශ්‍ය සේවාව තෝරන්න.',
        'ඔබගේ අංක 4 PIN ආරක්ෂිතව ඇතුළත් කරන්න. කිසිවෙකුට ඔබගේ PIN එක දැකිය නොහැකි බවට වග බලා ගන්න.',
        'මෙනුවෙන් මුදල් ආපසු ගැනීමේ විකල්පය තෝරන්න.',
        'ඔබේ ඉතිරිකිරීමේ හෝ ජංගම ගිණුමෙන් ආපසු ගැනීමට තෝරන්න.',
        'ඔබට ආපසු ගැනීමට අවශ්‍ය මුදල ඇතුළත් කරන්න. 100 හි ගුණාකාරයක් විය යුතුය.',
        'ඔබගේ මුදල් එකතු කර ඔබගේ කාඩ්පත ගැනීමට අමතක නොකරන්න.'
      ],
      Tamil: [
        'சிப் மேல்நோக்கி இருக்குமாறு உங்கள் ATM அட்டையை அட்டை ஸ்லாட்டில் செருகவும்.',
        'பரிவர்த்தனைக்கான உங்களுக்கு விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்.',
        'இந்த பரிவர்த்தனைக்கான ரசீதைப் பெற விரும்புகிறீர்களா என்பதைத் தேர்ந்தெடுக்கவும்.',
        'நீங்கள் செய்ய விரும்பும் சேவையைத் தேர்ந்தெடுக்கவும்.',
        'உங்கள் 4-இலக்க PIN ஐ பாதுகாப்பாக உள்ளிடவும். யாரும் உங்கள் PIN ஐப் பார்க்க முடியாது என்பதை உறுதிப்படுத்தவும்.',
        'மெனுவிலிருந்து பணம் எடுக்கும் விருப்பத்தைத் தேர்ந்தெடுக்கவும்.',
        'உங்கள் சேமிப்பு அல்லது நடப்பு கணக்கிலிருந்து எடுக்க தேர்ந்தெடுக்கவும்.',
        'நீங்கள் எடுக்க விரும்பும் தொகையை உள்ளிடவும். 100 மடங்காக இருக்க வேண்டும்.',
        'உங்கள் பணத்தை சேகரித்து உங்கள் அட்டையை எடுக்க மறக்காதீர்கள்.'
      ]
    };
    
    return descriptions[language][step] || '';
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 0: return <InsertCardAnimation darkMode={darkMode} />;
      case 1: return <LanguageSelectionStep darkMode={darkMode} />;
      case 2: return <ReceiptSelectionStep darkMode={darkMode} />;
      case 3: return <ServiceSelectionStep darkMode={darkMode} />;
      case 4: return <EnterPinStep darkMode={darkMode} />;
      case 5: return <WithdrawalServiceStep darkMode={darkMode} />;
      case 6: return <AccountTypeAnimation darkMode={darkMode} />;
      case 7: return <AmountSelectionStep darkMode={darkMode} />;
      case 8: return <CollectCashAnimation darkMode={darkMode} />;
      default: return null;
    }
  };
  
  return (
    <div>
      <StepDescription 
        title={getStepTitle(currentStep)}
        description={getStepDescription(currentStep)}
        step={currentStep + 1}
        totalSteps={9}
        darkMode={darkMode}
      />
      
      <div className="mt-8">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default WithCardFlow;