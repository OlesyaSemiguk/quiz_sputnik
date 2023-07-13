const CHOOSE_ANSWER = 'CHECKING_ANSWER'
const CURRENT_QUESTION = 'CURRENT_QUESTION'
const FINISH_QUIZ = 'FINISH_QUIZ'
const DELETE_ANSWER = 'DELETE_ANSWER'
export interface Quiz {
  currentQuestion: number
  answers: { [key: number]: number }
  isFinish: boolean
}
const defaultQuizState: Quiz = {
  currentQuestion: 0,
  answers: {},
  isFinish: false,
}

const reposReducer = (state = defaultQuizState, action: UserAction): Quiz => {
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

interface UserAction {
  type: string
  payload?: any
}

export const CurrentQuestion = (questionId: number): UserAction => {
  return {
    type: CURRENT_QUESTION,
    payload: questionId,
  }
}
export const FinishQuiz = (): UserAction => {
  return {
    type: FINISH_QUIZ,
  }
}

export const ChooseAnswer = (answerIndex: number): UserAction => {
  return {
    type: CHOOSE_ANSWER,
    payload: answerIndex,
  }
}
export const DeleteAnswer = (questionId: number): UserAction => {
  return {
    type: DELETE_ANSWER,
    payload: questionId,
  }
}

export default reposReducer
