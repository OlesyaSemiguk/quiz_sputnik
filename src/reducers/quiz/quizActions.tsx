import {
  CHOOSE_ANSWER,
  CURRENT_QUESTION,
  DELETE_ANSWER,
  FINISH_QUIZ,
} from './quizReducer'

export interface UserAction {
  type: string
  payload?: number
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
