import { useSelector } from 'react-redux'
import { RootState } from 'reducers/store'

export const useCheckedAnswer = (
  questionId: number,
  answerIndex: number,
): boolean => {
  const answers = useSelector((state: RootState) => state.stateQuiz.answers)
  if (answers[questionId] === answerIndex) {
    return true
  } else return false
}
