import React from 'react';
import styles from './AnswerChoices.module.sass';
import door from '../../images/door.png';

function AnswerChoices({ options, onAnswer, state }) {
  const { currentQuestionIndex } = state;
  const btnStyle = currentQuestionIndex === 11 ? 'btn-for-twelve' : 'btn';
  const boxStyle =
    currentQuestionIndex === 11 ? 'btn-box-for-twelve' : 'btn-box';
  const imgStyle = currentQuestionIndex === 11 ? 'img-for-twelve' : 'door-img';
  const containerStyle =
    currentQuestionIndex === 11
      ? 'btns-container-for-twelve'
      : 'btns-container';

  return (
    <div className={styles[`${containerStyle}`]}>
      {options.map((option, index) => (
        <div key={index} className={styles[`${boxStyle}`]}>
          <img src={door} alt='door' className={styles[`${imgStyle}`]} />
          <button
            className={styles[`${btnStyle}`]}
            key={index}
            onClick={() => {
              onAnswer(option.isCorrect);
            }}
          >
            {option.text}
          </button>
        </div>
      ))}
    </div>
  );
}

export default AnswerChoices;
