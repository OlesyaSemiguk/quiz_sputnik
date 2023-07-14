export interface Quiz {
  currentQuestion: number
  answers: { [key: number]: number }
  isFinish: boolean
}
export const defaultQuizState: Quiz = {
  currentQuestion: 0,
  answers: {},
  isFinish: false,
}
