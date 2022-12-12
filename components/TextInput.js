import styles from './TextInput.module.css';

function TextInput() {
  return (
    <div>
      <input className={styles.TextInput} type='text' />
    </div>
  );
}

export default TextInput;