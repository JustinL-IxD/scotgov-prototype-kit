import TextInput from '../components/TextInput';
import InputHeading from '../components/Typography/InputHeading';

function AskUsersForNamePattern() {
  return (
    <section>
      <InputHeading text={'First name(s)'} />
      <TextInput />
      <InputHeading text={'Last name'} />
      <TextInput />
    </section>
  );
}

export default AskUsersForNamePattern;