import styles from './InputHeading.module.css';

function InputHeading({ text }) {
  return <p className={styles.sgInputHeading}>{text}</p>;
}

export default InputHeading;