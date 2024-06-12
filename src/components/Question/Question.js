import React, { useEffect, useRef } from 'react';
import Hint from '../Hint/Hint';
import AnswerChoices from '../AnswerChoices/AnswerChoices';
import lady from '../../images/lady.png';
import tiger from '../../images/tiger.png';
import styles from './Question.module.sass';

function Question({ question, onAnswer, state, dispatch }) {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (imageRef1.current) {
        imageRef1.current.classList.toggle(styles.changePosition);
      }
    }, 10000);

    const interval2 = setInterval(() => {
      if (imageRef2.current) {
        imageRef2.current.classList.toggle(styles.changePosition);
      }
    }, 5000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <div className='question-container'>
      <Hint text={question.hint} />
      <img src={lady} alt='lady' className={styles.lady} ref={imageRef1} />
      <img src={tiger} alt='tiger' className={styles.tiger} ref={imageRef2} />
      <AnswerChoices
        options={question.options}
        onAnswer={onAnswer}
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Question;
