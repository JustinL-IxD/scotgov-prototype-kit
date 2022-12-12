import styles from './Paragraph.module.css';

function Paragraph({ text }) {
  return <p className={styles.sgBody}>{text}</p>;
}

export default Paragraph;