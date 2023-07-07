import { questionsData } from 'data/question'
import { QuestionBlock } from 'components/QuestionBlock/QuestionBlock'

import { Button, Space } from 'antd'

import { FinishQuiz } from 'reducers/reposReducer'
import { Question } from 'data/question'
import React from 'react'
import { Typography, Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { ChooseAnswer, CurrentQuestion } from 'reducers/reposReducer'
import { store } from 'reducers/store'
import { RootState } from 'reducers/store'
export const QuizCheckAnswer = (answersUser: { [key: number]: number }) => {
  console.log(answersUser)
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
  console.log('Ответов', questionsData)
}
