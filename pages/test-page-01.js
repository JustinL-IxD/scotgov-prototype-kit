import AskUsersForNamePattern from '../patterns/AskUsersForName';
import AppHeader from '../components/AppHeader';
import Heading1 from '../components/Typography/Heading1';
import Paragraph from '../components/Typography/Paragraph';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import SecondaryButton from '../components/Buttons/SecondaryButton';

function TestPage01() {
  return (
    <div>
      <AppHeader />
      <Heading1 title={'Help us match your details'} />
      <Paragraph
        text={
          'Please give us the details we currently have on our system for you so we can confirm your identity'
        }
      />
      <AskUsersForNamePattern />
      <div>
        <SecondaryButton />
        <PrimaryButton linkText='/test-page-02' />
      </div>
    </div>
  );
}

export default TestPage01;