import React from 'react';
import { Language } from '../App';
import StepDescription from '../components/StepDescription';
import WithoutCardSelectionStep from '../steps/WithoutCardSelectionStep';
import LanguageSelectionStep from '../steps/LanguageSelectionStep';
import ReceiptSelectionStep from '../steps/ReceiptSelectionStep';
import CardlessServiceStep from '../steps/CardlessServiceStep';
import EnterAccountAnimation from '../animations/EnterAccountAnimation';
import ConfirmAccountStep from '../steps/ConfirmAccountStep';
import InsertMoneyStep from '../steps/InsertMoneyStep';
import EnterIdStep from '../steps/EnterIdStep';
import EnterPhoneStep from '../steps/EnterPhoneStep';

interface CardlessDepositFlowProps {
  currentStep: number;
  language: Language;
  darkMode: boolean;
}

const CardlessDepositFlow: React.FC<CardlessDepositFlowProps> = ({ currentStep, language, darkMode }) => {
  const getStepTitle = (step: number) => {
    const titles = {
      English: [
        'Transaction Without Card',
        'Select Language',
        'Receipt Option',
        'Select Cardless Deposit',
        'Enter Account Number',
        'Confirm Account Details',
        'Insert Money',
        'Enter ID Number',
        'Enter Phone Number'
      ],
      Sinhala: [
        'කාඩ්පත නොමැතිව ගනුදෙනුව',
        'භාෂාව තෝරන්න',
        'ලදුපත් විකල්පය',
        'කාඩ්පත් රහිත තැන්පතුව තෝරන්න',
        'ගිණුම් අංකය ඇතුළත් කරන්න',
        'ගිණුම් විස්තර තහවුරු කරන්න',
        'මුදල් ඇතුළු කරන්න',
        'හැඳුනුම්පත් අංකය ඇතුළත් කරන්න',
        'දුරකථන අංකය ඇතුළත් කරන්න'
      ],
      Tamil: [
        'அட்டை இல்லாத பரிவர்த்தனை',
        'மொழியைத் தேர்ந்தெடுக்கவும்',
        'ரசீது விருப்பம்',
        'அட்டையில்லா வைப்பைத் தேர்ந்தெடுக்கவும்',
        'கணக்கு எண்ணை உள்ளிடவும்',
        'கணக்கு விவரங்களை உறுதிப்படுத்தவும்',
        'பணத்தை செருகவும்',
        'அடையாள எண்ணை உள்ளிடவும்',
        'தொலைபேசி எண்ணை உள்ளிடவும்'
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
        'Choose "Cardless deposit" from the available options.',
        'Enter the account number you want to deposit money into. You\'ll need to enter it twice for verification.',
        'Verify that the account details shown are correct before proceeding.',
        'Insert bills into the cash deposit slot and press the button on the screen when done.',
        'Enter your national ID number for security verification.',
        'Enter your phone number to receive a confirmation message.'
      ],
      Sinhala: [
        'ප්‍රධාන තිරයේ "කාඩ්පත නොමැතිව ගනුදෙනුව" විකල්පය තෝරන්න.',
        'ගනුදෙනුව සඳහා ඔබගේ කැමති භාෂාව තෝරන්න.',
        'මෙම ගනුදෙනුව සඳහා ලදුපතක් ලබා ගැනීමට අවශ්‍යද යන්න තෝරන්න.',
        'ලබා ගත හැකි විකල්ප වලින් "කාඩ්පත් රහිත තැන්පතුව" තෝරන්න.',
        'ඔබට මුදල් තැන්පත් කිරීමට අවශ්‍ය ගිණුම් අංකය ඇතුළත් කරන්න. තහවුරු කිරීම සඳහා ඔබට එය දෙවරක් ඇතුළත් කිරීමට සිදුවනු ඇත.',
        'ඉදිරියට යාමට පෙර දක්වා ඇති ගිණුම් විස්තර නිවැරදි බව තහවුරු කරන්න.',
        'මුදල් තැන්පත් කරන සුරුවට බිල්පත් ඇතුළු කර අවසන් වූ විට තිරයේ බොත්තම ඔබන්න.',
        'ආරක්ෂක තහවුරු කිරීම සඳහා ඔබගේ ජාතික හැඳුනුම්පත් අංකය ඇතුළත් කරන්න.',
        'තහවුරු කිරීමේ පණිවිඩයක් ලැබීමට ඔබගේ දුරකථන අංකය ඇතුළත් කරන්න.'
      ],
      Tamil: [
        'முதன்மை திரையில் "அட்டை இல்லாத பரிவர்த்தனை" விருப்பத்தைத் தேர்ந்தெடுக்கவும்.',
        'பரிவர்த்தனைக்கான உங்களுக்கு விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்.',
        'இந்த பரிவர்த்தனைக்கான ரசீதைப் பெற விரும்புகிறீர்களா என்பதைத் தேர்ந்தெடுக்கவும்.',
        'கிடைக்கும் விருப்பங்களிலிருந்து "அட்டையில்லா வைப்பு" என்பதைத் தேர்ந்தெடுக்கவும்.',
        'நீங்கள் பணம் செலுத்த விரும்பும் கணக்கு எண்ணை உள்ளிடவும். சரிபார்ப்புக்காக இரண்டு முறை உள்ளிட வேண்டும்.',
        'தொடர்வதற்கு முன் காட்டப்படும் கணக்கு விவரங்கள் சரியானவை என்பதை உறுதிப்படுத்தவும்.',
        'பணம் செலுத்தும் ஸ்லாட்டில் நோட்டுகளை செருகி, முடிந்ததும் திரையில் உள்ள பொத்தானை அழுத்தவும்.',
        'பாதுகாப்பு சரிபார்ப்புக்காக உங்கள் தேசிய அடையாள எண்ணை உள்ளிடவும்.',
        'உறுதிப்படுத்தல் செய்தியைப் பெற உங்கள் தொலைபேசி எண்ணை உள்ளிடவும்.'
      ]
    };
    
    return descriptions[language][step] || '';
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 0: return <WithoutCardSelectionStep darkMode={darkMode} />;
      case 1: return <LanguageSelectionStep darkMode={darkMode} />;
      case 2: return <ReceiptSelectionStep darkMode={darkMode} />;
      case 3: return <CardlessServiceStep type="deposit" darkMode={darkMode} />;
      case 4: return <EnterAccountAnimation darkMode={darkMode} />;
      case 5: return <ConfirmAccountStep darkMode={darkMode} />;
      case 6: return <InsertMoneyStep darkMode={darkMode} />;
      case 7: return <EnterIdStep darkMode={darkMode} />;
      case 8: return <EnterPhoneStep darkMode={darkMode} />;
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

export default CardlessDepositFlow;