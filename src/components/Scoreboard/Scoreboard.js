import React from 'react';
import styles from './Scoreboard.module.sass';

function Scoreboard({ correctAnswers, questionCount }) {
  return (
    <div className={styles.scoreboard}>
      <div className={styles['correct-answer']}> {correctAnswers}</div>
      <div className={styles.separator}>&#9876;</div>
      <div className={styles['answer-count']}> {questionCount}</div>
    </div>
  );
}

export default Scoreboard;
