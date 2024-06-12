import React from 'react';
import Scoreboard from '../Scoreboard/Scoreboard';
import Question from '../Question/Question';
import questionsInUkr from '../../data/questionsInUkr';
import questionsInEng from '../../data/questionInEng';
import { CONSTANTS } from '../../constants';
import styles from './Game.module.sass';

const { ACTIONS } = CONSTANTS;

function Game({ onEndGame, state, dispatch }) {
  const { currentQuestionIndex, correctAnswers, questionCount, isEng } = state;
  const questions = isEng ? questionsInEng : questionsInUkr;

  const handleAnswer = (isCorrect) => {
    dispatch({ type: ACTIONS.ANSWER_QUESTION, payload: { isCorrect } });

    if (questionCount + 1 >= questions.length) {
      onEndGame();
    } else {
      dispatch({ type: ACTIONS.NEXT_QUESTION });
    }
  };

  return (
    <div className={styles.container}>
      <div className='game-container'>
        <Scoreboard
          correctAnswers={correctAnswers}
          questionCount={questionCount}
        />
        <Question
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          state={state}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
}

export default Game;
