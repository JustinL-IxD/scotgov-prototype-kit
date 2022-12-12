import AppHeader from '../components/AppHeader';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import SecondaryButton from '../components/Buttons/SecondaryButton';
import Heading1 from '../components/Typography/Heading1';
import Heading2 from '../components/Typography/Heading2';
import Paragraph from '../components/Typography/Paragraph';
import NationalInsurancePattern from '../patterns/NationalInsurance';

function Home() {
  return (
    <div>
      <AppHeader />
      <Heading1 title='Help us match your details' />
      <Paragraph
        text={
          'Please give us the details we currently have on our system for you so we can confirm your identity'
        }
      />
      <Heading2 title="What is your National Insurance number?" />
      <Paragraph
        text={
          'You can find your National Insurance number on your payslip, P60, letters about your tax, pension or benefits, in the National Insurance section of your personal tax account.'
        }
      />
      <NationalInsurancePattern />
      <PrimaryButton linkText="/test-page-01"/>
    </div>
  );
}

export default Home;