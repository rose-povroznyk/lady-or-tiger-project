import React from 'react';
import styles from './Hint.module.sass';

function Hint({ text }) {
  return <div className={styles.hint}>&#9757;{text}</div>;
}

export default Hint;
