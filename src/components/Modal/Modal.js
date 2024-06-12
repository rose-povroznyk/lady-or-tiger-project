import React from 'react';
import { CONSTANTS } from '../../constants';
import nail from '../../images/nail.png';
import rulesUkr from '../../data/rulesUkr';
import rulesEng from '../../data/rulesEng';
import tigerAnimated from '../../images/tiger-animated.gif';
import styles from './Modal.module.sass';

const { ACTIONS } = CONSTANTS;

function Modal({ onClose, state, dispatch }) {
  const { isEng } = state;
  const changeLanguage = () => {
    dispatch({ type: ACTIONS.CHANGE_LANGUAGE });
  };

  return (
    <section className={styles['modal-container']}>
      <div className={styles.modal}>
        <div className={styles.pin}>
          <img src={nail} alt='nail' />
        </div>
        <button className={styles['btn-lang']} onClick={changeLanguage}>
          {isEng ? 'ua' : 'eng'}
        </button>
        <h2 className={styles.title}>
          {isEng
            ? '"The lady and the tiger" rules'
            : 'Правила гри "Принцеса чи тигр"'}
        </h2>
        <p className={styles.text}>{isEng ? `${rulesEng}` : `${rulesUkr}`}</p>
        <img src={tigerAnimated} alt='tiger' className={styles.gif} />
        <button className={styles['btn-play']} onClick={onClose}>
          {isEng ? 'Play' : 'Грати'}
        </button>
      </div>
    </section>
  );
}

export default Modal;
