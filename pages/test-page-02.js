import AppHeader from '../components/AppHeader';
import Heading1 from '../components/Typography/Heading1';
import Paragraph from '../components/Typography/Paragraph';
import SecondaryButton from '../components/Buttons/SecondaryButton';

function TestPage02() {
  return (
    <div>
      <AppHeader />
      <Heading1 title={'Thank you!'} />
      <Paragraph
        text={
          'We will be in touch with you shortly to confirm your identity.'
        }
      />
      <SecondaryButton />
    </div>
  );
}

export default TestPage02;