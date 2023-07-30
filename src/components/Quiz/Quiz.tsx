import QuestionBlock from 'components/QuestionBlock/QuestionBlock'
import { questionsData } from 'data/question'
import { Button, Space } from 'antd'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { QuizCheckAnswer } from './QuizCheckAnswer'
import { RootState } from 'reducers/store'
import { Pagination } from 'antd'
import type { PaginationProps } from 'antd'
import './quiz.scss'
import { FinishQuiz } from 'reducers/quiz/quizActions'
import Timer from 'components/UI/Timer'
import ButtonComponent from 'components/UI/ButtonComponent'
import ResultComponent from './resultComponent/ResultComponent'

const Quiz = () => {
  const dispatch = useDispatch()
  const answers = useSelector((state: RootState) => state.stateQuiz.answers)
  const isFinish = useSelector((state: RootState) => state.stateQuiz.isFinish)
  const [deadline, setDeadline] = useState(Date.now() + 1000 * 60 * 5)
  //проверка ответов
  const [quantityCorrectAnswer, setQuantity] = useState(0)
  const isQuention = !!questionsData.length
  function CheckAnswerButton() {
    dispatch(FinishQuiz())
    setQuantity(QuizCheckAnswer(answers))
    setDeadline(Date.now())
  }

  //пангинация
  const [currentPage, setCurrentPage] = useState(1)
  const [questionPerPage] = useState(5)
  const numberOfQuestions = questionsData.length
  const lastQuestionIndex = currentPage * questionPerPage
  const firstQuestionIndex = lastQuestionIndex - questionPerPage
  const totalPage = Math.ceil(numberOfQuestions / questionPerPage) * 10
  const currentQuestion = questionsData.slice(
    firstQuestionIndex,
    lastQuestionIndex,
  )
  const onChange: PaginationProps['onChange'] = page => {
    setCurrentPage(page)
  }

  return (
    <div className="quiz">
      {isQuention ? (
        <Space direction="vertical" size="middle">
          <Timer deadline={deadline} finish={CheckAnswerButton} />
          <div className="quiz_question">
            {currentQuestion.map(questionData => (
              <QuestionBlock question={questionData} key={questionData.id} />
            ))}
          </div>
          <ButtonComponent
            type="default"
            isDisabled={isFinish}
            onClickButton={CheckAnswerButton}
          />
          <ResultComponent
            isFinish={isFinish}
            CorrectAnswer={quantityCorrectAnswer}
            allAnswer={numberOfQuestions}
          />
          <Pagination
            defaultCurrent={1}
            total={totalPage}
            onChange={onChange}
          />
        </Space>
      ) : (
        <div>Ошибка базы данных</div>
      )}
    </div>
  )
}
export default Quiz
