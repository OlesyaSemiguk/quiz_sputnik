import { UserAction } from './quizActions'
import { Quiz, defaultQuizState } from './quizState'

export const CHOOSE_ANSWER = 'CHECKING_ANSWER'
export const CURRENT_QUESTION = 'CURRENT_QUESTION'
export const FINISH_QUIZ = 'FINISH_QUIZ'
export const DELETE_ANSWER = 'DELETE_ANSWER'

const quizReducer = (state = defaultQuizState, action: UserAction): Quiz => {
  switch (action.type) {
    case CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload,
      }
    case DELETE_ANSWER: {
      let answersObj = state.answers
      delete answersObj[state.currentQuestion]

      return {
        ...state,
        answers: { ...answersObj },
      }
    }
    case FINISH_QUIZ:
      return {
        ...state,
        isFinish: true,
      }
    case CHOOSE_ANSWER:
      return {
        ...state,
        answers: { ...state.answers, [state.currentQuestion]: action.payload },
      }
    default:
      return state
  }
}

export default quizReducer
