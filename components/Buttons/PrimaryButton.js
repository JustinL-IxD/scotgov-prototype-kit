import Link from 'next/link';
import styles from './PrimaryButton.module.css';

function PrimaryButton({ linkText }) {
  return (
    <Link href={linkText}>
      <button className={styles.sgPrimaryButton}>Save and Continue</button>
    </Link>
  );
}

export default PrimaryButton;