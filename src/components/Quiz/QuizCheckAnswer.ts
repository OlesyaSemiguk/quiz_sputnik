import { questionsData } from 'data/question'

export const QuizCheckAnswer = (answersUser: {
  [key: number]: number
}): number => {
  let quantityСorrectAnswer = 0

  for (let key in answersUser) {
    let numQuestion = Number(key)
    let chooseUserAnswer = questionsData.find(
      question => question.id === numQuestion,
    ).answers[answersUser[key]]
    const isCorrectAnswer = chooseUserAnswer.isCorrect
    quantityСorrectAnswer += isCorrectAnswer
    console.log('Выбранные ответ', chooseUserAnswer)
  }
  console.log('Количество правильных ответов', quantityСorrectAnswer)
  return quantityСorrectAnswer
}
