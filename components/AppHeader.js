import Image from 'next/image';
import profilePic from '../public/SSS.svg';

function AppHeader() {
  return (
    <header className='App-header'>
      <Image
        src={profilePic}
        alt='Landscape picture'
        width={300}
      />
      
    </header>
  );
}

export default AppHeader;