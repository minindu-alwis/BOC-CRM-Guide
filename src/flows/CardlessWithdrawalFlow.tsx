import React from 'react';
import { Language } from '../App';
import StepDescription from '../components/StepDescription';
import WithoutCardSelectionStep from '../steps/WithoutCardSelectionStep';
import LanguageSelectionStep from '../steps/LanguageSelectionStep';
import ReceiptSelectionStep from '../steps/ReceiptSelectionStep';
import CardlessServiceStep from '../steps/CardlessServiceStep';
import WithdrawByAccountAnimation from '../animations/WithdrawByAccountAnimation';
import EnterAccountAnimation from '../animations/EnterAccountAnimation';
import AmountSelectionStep from '../steps/AmountSelectionStep';
import EnterSecureCodeStep from '../steps/EnterSecureCodeStep';
import CollectCashAnimation from '../animations/CollectCashAnimation';
import TransactionCompleteStep from '../steps/TransactionCompleteStep';

interface CardlessWithdrawalFlowProps {
  currentStep: number;
  language: Language;
  darkMode: boolean;
}

const CardlessWithdrawalFlow: React.FC<CardlessWithdrawalFlowProps> = ({ currentStep, language, darkMode }) => {
  const getStepTitle = (step: number) => {
    const titles = {
      English: [
        'Transaction Without Card',
        'Select Language',
        'Receipt Option',
        'Select Cardless Withdrawal',
        'Get Money by Account',
        'Enter Account Number',
        'Enter Amount',
        'Enter Secure Code / OTP',
        'Collect Cash',
        'Transaction Complete'
      ],
      Sinhala: [
        'කාඩ්පත නොමැතිව ගනුදෙනුව',
        'භාෂාව තෝරන්න',
        'ලදුපත් විකල්පය',
        'කාඩ්පත් රහිත ආපසු ගැනීම තෝරන්න',
        'ගිණුම මගින් මුදල් ගන්න',
        'ගිණුම් අංකය ඇතුළත් කරන්න',
        'මුදල ඇතුළත් කරන්න',
        'ආරක්ෂිත කේතය / OTP ඇතුළත් කරන්න',
        'මුදල් එකතු කරන්න',
        'ගනුදෙනුව සම්පූර්ණයි'
      ],
      Tamil: [
        'அட்டை இல்லாத பரிவர்த்தனை',
        'மொழியைத் தேர்ந்தெடுக்கவும்',
        'ரசீது விருப்பம்',
        'அட்டையில்லா பணம் எடுப்பதைத் தேர்ந்தெடுக்கவும்',
        'கணக்கு மூலம் பணம் பெறுங்கள்',
        'கணக்கு எண்ணை உள்ளிடவும்',
        'தொகையை உள்ளிடவும்',
        'பாதுகாப்பு குறியீடு / OTP ஐ உள்ளிடவும்',
        'பணத்தை சேகரிக்கவும்',
        'பரிவர்த்தனை முடிந்தது'
      ]
    };
    
    return titles[language][step] || '';
  };
  
  const getStepDescription = (step: number) => {
    const descriptions = {
      English: [
        'Select "Transaction without card" option on the main screen.',
        'Choose your preferred language for the transaction.',
        'Select whether you want to receive a receipt for this transaction.',
        'Choose "Cardless withdrawal" from the available options.',
        'Tap "Get money by account" to withdraw money using your account number.',
        'Enter your account number. You\'ll need to enter it twice for verification.',
        'Enter the amount you wish to withdraw. Must be in multiples of 100.',
        'Enter the secure code or OTP that was sent to your registered mobile number.',
        'Collect your cash from the dispenser slot.',
        'Your transaction is complete. Don\'t forget to take your receipt if requested.'
      ],
      Sinhala: [
        'ප්‍රධාන තිරයේ "කාඩ්පත නොමැතිව ගනුදෙනුව" විකල්පය තෝරන්න.',
        'ගනුදෙනුව සඳහා ඔබගේ කැමති භාෂාව තෝරන්න.',
        'මෙම ගනුදෙනුව සඳහා ලදුපතක් ලබා ගැනීමට අවශ්‍යද යන්න තෝරන්න.',
        'ලබා ගත හැකි විකල්ප වලින් "කාඩ්පත් රහිත ආපසු ගැනීම" තෝරන්න.',
        'ඔබගේ ගිණුම් අංකය භාවිතයෙන් මුදල් ආපසු ගැනීමට "ගිණුම මගින් මුදල් ගන්න" තට්ටු කරන්න.',
        'ඔබගේ ගිණුම් අංකය ඇතුළත් කරන්න. තහවුරු කිරීම සඳහා ඔබට එය දෙවරක් ඇතුළත් කිරීමට සිදුවනු ඇත.',
        'ඔබට ආපසු ගැනීමට අවශ්‍ය මුදල ඇතුළත් කරන්න. 100 හි ගුණාකාරයක් විය යුතුය.',
        'ඔබගේ ලියාපදිංචි ජංගම දුරකථන අංකයට එවන ලද ආරක්ෂිත කේතය හෝ OTP ඇතුළත් කරන්න.',
        'බෙදාහරින සුරුවෙන් ඔබගේ මුදල් එකතු කරන්න.',
        'ඔබගේ ගනුදෙනුව සම්පූර්ණයි. ඉල්ලා ඇත්නම් ඔබගේ ලදුපත ගැනීමට අමතක නොකරන්න.'
      ],
      Tamil: [
        'முதன்மை திரையில் "அட்டை இல்லாத பரிவர்த்தனை" விருப்பத்தைத் தேர்ந்தெடுக்கவும்.',
        'பரிவர்த்தனைக்கான உங்களுக்கு விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்.',
        'இந்த பரிவர்த்தனைக்கான ரசீதைப் பெற விரும்புகிறீர்களா என்பதைத் தேர்ந்தெடுக்கவும்.',
        'கிடைக்கும் விருப்பங்களிலிருந்து "அட்டையில்லா பணம் எடுப்பு" என்பதைத் தேர்ந்தெடுக்கவும்.',
        'உங்கள் கணக்கு எண்ணைப் பயன்படுத்தி பணத்தை எடுக்க "கணக்கு மூலம் பணம் பெறுங்கள்" என்பதைத் தட்டவும்.',
        'உங்கள் கணக்கு எண்ணை உள்ளிடவும். சரிபார்ப்புக்காக இரண்டு முறை உள்ளிட வேண்டும்.',
        'நீங்கள் எடுக்க விரும்பும் தொகையை உள்ளிடவும். 100 மடங்காக இருக்க வேண்டும்.',
        'உங்கள் பதிவுசெய்யப்பட்ட மொபைல் எண்ணுக்கு அனுப்பப்பட்ட பாதுகாப்பு குறியீடு அல்லது OTP ஐ உள்ளிடவும்.',
        'வழங்கும் ஸ்லாட்டிலிருந்து உங்கள் பணத்தை சேகரிக்கவும்.',
        'உங்கள் பரிவர்த்தனை முடிந்தது. கோரப்பட்டிருந்தால் உங்கள் ரசீதை எடுக்க மறக்காதீர்கள்.'
      ]
    };
    
    return descriptions[language][step] || '';
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 0: return <WithoutCardSelectionStep darkMode={darkMode} />;
      case 1: return <LanguageSelectionStep darkMode={darkMode} />;
      case 2: return <ReceiptSelectionStep darkMode={darkMode} />;
      case 3: return <CardlessServiceStep type="withdrawal" darkMode={darkMode} />;
      case 4: return <WithdrawByAccountAnimation darkMode={darkMode} />;
      case 5: return <EnterAccountAnimation darkMode={darkMode} />;
      case 6: return <AmountSelectionStep darkMode={darkMode} />;
      case 7: return <EnterSecureCodeStep darkMode={darkMode} />;
      case 8: return <CollectCashAnimation darkMode={darkMode} />;
      case 9: return <TransactionCompleteStep darkMode={darkMode} />;
      default: return null;
    }
  };
  
  return (
    <div>
      <StepDescription 
        title={getStepTitle(currentStep)}
        description={getStepDescription(currentStep)}
        step={currentStep + 1}
        totalSteps={10}
        darkMode={darkMode}
      />
      
      <div className="mt-8">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default CardlessWithdrawalFlow;