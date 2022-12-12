import TextInput from '../components/TextInput';
import HintText from '../components/Typography/HintText';
import InputHeading from '../components/Typography/InputHeading';

function NationalInsurancePattern() {
  return (
    <div>
      <InputHeading text={'National Insurance'} />
      <HintText text={"For example, 'QQ 12 34 56 C"} />
      <TextInput />
    </div>
  );
}

export default NationalInsurancePattern;