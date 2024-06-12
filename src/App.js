import React, { useReducer } from 'react';
import Game from './components/Game/Game';
import Modal from './components/Modal/Modal';
import WinnerForm from './components/WinnerForm/WinnerForm';
import WinnerCertificate from './components/WinnerCertificate/WinnerCertificate';
import { initialState, reducer } from './reducers/gameReducer';
import { CONSTANTS } from './constants';
import styles from './App.module.sass';

const { ACTIONS } = CONSTANTS;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { showModal, showGame, showWinnerForm, showWinnerCertificate } = state;

  const handleStartGame = () => {
    dispatch({ type: ACTIONS.START_GAME });
  };

  const handleEndGame = () => {
    dispatch({ type: ACTIONS.END_GAME });
  };

  return (
    <div className={styles.container}>
      {showModal && (
        <Modal onClose={handleStartGame} dispatch={dispatch} state={state} />
      )}
      {showGame && (
        <Game onEndGame={handleEndGame} dispatch={dispatch} state={state} />
      )}
      {showWinnerForm && (
        <WinnerForm onReset={handleEndGame} dispatch={dispatch} state={state} />
      )}
      {showWinnerCertificate && (
        <WinnerCertificate
          name={state.winnerName}
          age={state.winnerAge}
          hobby={state.winnerHobby}
          photo={state.winnerPhoto}
          correctAnswers={state.correctAnswers}
          state={state}
        />
      )}
    </div>
  );
}

export default App;
