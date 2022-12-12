import styles from './Heading1.module.css';

function Heading1({title}) {
  return <h1 className={styles.sgH1}>{title}</h1>;
}

export default Heading1;