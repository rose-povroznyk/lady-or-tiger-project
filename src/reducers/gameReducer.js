import { CONSTANTS } from '../constants';

const { ACTIONS } = CONSTANTS;

export const initialState = {
  showModal: true,
  showGame: false,
  showWinnerForm: false,
  showWinnerCertificate: false,
  winnerName: '',
  winnerAge: '',
  winnerHobby: '',
  winnerPhoto: null,
  currentQuestionIndex: 0,
  correctAnswers: 0,
  questionCount: 0,
  isEng: true,
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.START_GAME:
      return {
        ...state,
        showModal: false,
        showGame: true,
      };
    case ACTIONS.END_GAME:
      return {
        ...state,
        showGame: false,
        showWinnerForm: true,
      };
    case ACTIONS.RESET:
      return initialState;
    case ACTIONS.CHANGE_LANGUAGE:
      return {
        ...state,
        isEng: !state.isEng,
      };
    case ACTIONS.ANSWER_QUESTION:
      const { isCorrect } = action.payload;
      return {
        ...state,
        correctAnswers: isCorrect
          ? state.correctAnswers + 1
          : state.correctAnswers,
        questionCount: state.questionCount + 1,
      };
    case ACTIONS.NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case ACTIONS.SUBMIT_WINNER_FORM:
      return {
        ...state,
        showWinnerForm: false,
        showWinnerCertificate: true,
        winnerName: action.payload.name,
        winnerAge: action.payload.age,
        winnerHobby: action.payload.hobby,
        winnerPhoto: action.payload.photo,
        correctAnswers: state.correctAnswers,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
