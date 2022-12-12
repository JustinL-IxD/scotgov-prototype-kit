import styles from './HintText.module.css';

function HintText({ text }) {
  return <p className={styles.sgHint}>{text}</p>;
}

export default HintText;