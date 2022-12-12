import styles from './SecondaryButton.module.css';
import { useRouter } from 'next/router';

function SecondaryButton({ label }) {
  const router = useRouter();
  return (
    <button className={styles.sgSecondaryButton} onClick={() => router.back()}>
      Back
    </button>
  );
}

export default SecondaryButton;