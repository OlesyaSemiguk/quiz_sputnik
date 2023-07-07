export interface Quiz {
  answers: number[]
  complete: boolean
}
const defaultQuizState: Quiz = {
  answers: [],
  complete: false,
}
const CHECKING_ANSWER = 'CHECKING_ANSWER'

const reposReducer = (state = defaultQuizState, action: any): Quiz => {
  switch (action.type) {
    case CHECKING_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload],
      }
    default:
      return state
  }
}

export const CheckingAnswer = (answer: number) => ({
  type: CHECKING_ANSWER,
  payload: answer,
})
export default reposReducer
