const CHECKING_ANSWER = 'CHECKING_ANSWER'
const CURRENT_QUESTION = 'CURRENT_QUESTION'
const FINISH_QUIZ = 'FINISH_QUIZ'
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
    case CHECKING_ANSWER:
      return {
        ...state,
        answers: { ...state.answers, [state.currentQuestion]: action.payload },
      }
    case FINISH_QUIZ:
      return {
        ...state,
        isFinish: true,
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
    type: CHECKING_ANSWER,
    payload: answerIndex,
  }
}
export default reposReducer
