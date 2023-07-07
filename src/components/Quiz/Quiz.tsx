import { QuestionBlock } from 'components/QuestionBlock/QuestionBlock'
import { questionsData } from 'data/question'
import { Button, Space, Modal } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { FinishQuiz } from 'reducers/reposReducer'
import { QuizCheckAnswer } from './QuizCheckAnswer'
import { RootState } from 'reducers/store'
import { SmileOutlined } from '@ant-design/icons'
import { Typography } from 'antd'

export const Quiz = () => {
  const dispatch = useDispatch()
  const answers = useSelector((state: RootState) => state.store.answers)

  const [quantityСorrectAnswer, setQuantity] = useState(0)
  function CheckAnswerButton() {
    dispatch(FinishQuiz())
    QuizCheckAnswer(answers)
    setQuantity(QuizCheckAnswer(answers))
    console.log('Количество правильных ответов', quantityСorrectAnswer)
  }
  const isFinish = useSelector((state: RootState) => state.store.isFinish)
  const { Title } = Typography

  return (
    <div className="quiz">
      <div className="quiz_question">
        {questionsData.map(questionData => (
          <QuestionBlock question={questionData} key={questionData.id} />
        ))}
      </div>

      <Button
        type="primary"
        onClick={() => {
          CheckAnswerButton()
        }}
      >
        Проверить ответы
      </Button>
      <h3 className="quiz">
        Количество правильных ответов - {quantityСorrectAnswer}
      </h3>
    </div>
  )
}
