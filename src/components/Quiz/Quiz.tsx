import { QuestionBlock } from 'components/QuestionBlock/QuestionBlock'
import { questionsData } from 'data/question'
import { Button, Space } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { FinishQuiz } from 'reducers/reposReducer'
import { QuizCheckAnswer } from './QuizCheckAnswer'
import { RootState } from 'reducers/store'
export const Quiz = () => {
  const dispatch = useDispatch()
  const answers = useSelector((state: RootState) => state.store.answers)
  function CheckAnswerButton() {
    dispatch(FinishQuiz())
    QuizCheckAnswer(answers)
  }

  return (
    <div className="quiz">
      <Space direction="vertical">
        <div className="quiz_question">
          {questionsData.map(questionData => (
            <QuestionBlock question={questionData} key={questionData.id} />
          ))}
        </div>
        <div className="quiz_button_finish">
          <Button
            type="primary"
            onClick={() => {
              CheckAnswerButton()
            }}
          >
            Проверить ответы
          </Button>
        </div>
      </Space>
    </div>
  )
}
