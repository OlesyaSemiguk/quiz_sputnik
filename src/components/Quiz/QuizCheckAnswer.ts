import { questionsData } from 'data/question'

export const QuizCheckAnswer = (answersUser: {
  [key: number]: number
}): number => {
  let quantityСorrectAnswer = 0
  for (const key in answersUser) {
    const numQuestion = Number(key)
    const chooseUserAnswer = questionsData.find(
      question => question.id === numQuestion,
    ).answers[answersUser[key]]
    const isCorrectAnswer = chooseUserAnswer.isCorrect
    quantityСorrectAnswer += isCorrectAnswer
  }
  return quantityСorrectAnswer
}
