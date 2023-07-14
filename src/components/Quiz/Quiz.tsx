import { QuestionBlock } from 'components/QuestionBlock/QuestionBlock'
import { questionsData } from 'data/question'
import { Button, Space } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { FinishQuiz } from 'reducers/quizReducer'
import { QuizCheckAnswer } from './QuizCheckAnswer'
import { RootState } from 'reducers/store'
import { Pagination } from 'antd'
import type { PaginationProps } from 'antd'
import './quiz.scss'

export const Quiz = () => {
  const dispatch = useDispatch()
  const answers = useSelector((state: RootState) => state.stateQuiz.answers)
  const isFinish = useSelector((state: RootState) => state.stateQuiz.isFinish)
  //проверка ответов
  const [quantityСorrectAnswer, setQuantity] = useState(0)
  function CheckAnswerButton() {
    dispatch(FinishQuiz())
    QuizCheckAnswer(answers)
    setQuantity(QuizCheckAnswer(answers))
  }
  //пангинация
  const [currentPage, setCurrentPage] = useState(1)
  const [questionPerPage] = useState(5)

  const lastQuestionIndex = currentPage * questionPerPage
  const firstQuestionIndex = lastQuestionIndex - questionPerPage
  const currentQuestion = questionsData.slice(
    firstQuestionIndex,
    lastQuestionIndex,
  )
  const onChange: PaginationProps['onChange'] = page => {
    setCurrentPage(page)
  }

  return (
    <div className="quiz">
      <Space direction="vertical" size="middle">
        <div className="quiz_question">
          {currentQuestion.map(questionData => (
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
        <h3 className={isFinish ? 'result_active' : 'result'}>
          Правильных ответов {quantityСorrectAnswer} из {questionsData.length}
        </h3>
        <Pagination
          defaultCurrent={1}
          total={Math.ceil(questionsData.length / questionPerPage) * 10}
          onChange={onChange}
        />{' '}
      </Space>
    </div>
  )
}
