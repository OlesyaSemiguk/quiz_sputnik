import QuestionBlock from 'components/QuestionBlock/QuestionBlock'
import { questionsData } from 'data/question'
import { Button, Space, Statistic } from 'antd'
import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { QuizCheckAnswer } from './QuizCheckAnswer'
import { RootState } from 'reducers/store'
import { Pagination } from 'antd'
import type { PaginationProps } from 'antd'
import './quiz.scss'
import { FinishQuiz } from 'reducers/quiz/quizActions'

const Quiz = () => {
  const dispatch = useDispatch()
  const { Countdown } = Statistic
  const answers = useSelector((state: RootState) => state.stateQuiz.answers)
  const isFinish = useSelector((state: RootState) => state.stateQuiz.isFinish)
  //проверка ответов
  const [quantityСorrectAnswer, setQuantity] = useState(0)
  const [deadline, setDeadline] = useState(Date.now() + 1000 * 60 * 5)

  const CheckAnswerButton = () => {
    dispatch(FinishQuiz())
    QuizCheckAnswer(answers)
    setQuantity(QuizCheckAnswer(answers))
    setDeadline(Date.now())
  }

  //пангинация
  const [currentPage, setCurrentPage] = useState(1)
  const [questionPerPage] = useState(5)
  const lastQuestionIndex = currentPage * questionPerPage
  const firstQuestionIndex = lastQuestionIndex - questionPerPage
  const totalPage = Math.ceil(questionsData.length / questionPerPage) * 10
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
        <div className="timer">
          <div>Таймер</div>
          <Countdown value={deadline} onFinish={CheckAnswerButton} />
        </div>
        <div className="quiz_question">
          {currentQuestion.map(questionData => (
            <QuestionBlock question={questionData} key={questionData.id} />
          ))}
        </div>
        <Button type="primary" disabled={false} onClick={CheckAnswerButton}>
          Проверить ответы
        </Button>
        <h3 className={isFinish ? 'active' : 'result'}>
          Правильных ответов {quantityСorrectAnswer} из {questionsData.length}
        </h3>
        <Pagination defaultCurrent={1} total={totalPage} onChange={onChange} />{' '}
      </Space>
    </div>
  )
}
export default Quiz
