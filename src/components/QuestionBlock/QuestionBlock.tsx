import { Question } from 'data/question'
import { Typography, Checkbox } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers/store'
import {
  ChooseAnswer,
  CurrentQuestion,
  DeleteAnswer,
} from 'reducers/quiz/quizActions'
import { useCheckedAnswer } from 'hooks/useChekedAnswer'

const { Title } = Typography

interface QuestionBlockProps {
  question: Question
}

export const QuestionBlock = ({ question }: QuestionBlockProps) => {
  const dispatch = useDispatch()
  const isFinish = useSelector((state: RootState) => state.stateQuiz.isFinish)
  const answers = useSelector((state: RootState) => state.stateQuiz.answers)
  function onCheckboxClick(questionId: number, answerIndex: number) {
    dispatch(CurrentQuestion(questionId))
    dispatch(ChooseAnswer(answerIndex))
    if (answers[questionId] === answerIndex) {
      dispatch(DeleteAnswer(answerIndex))
    }
  }

  const isQuention = !!question.answers.length

  return (
    <div className="question-block" key="{question.id}">
      <Title level={3}>{question.questionText}</Title>
      <div className="question-answers">
        {question.answers.map((answers, index) =>
          isQuention ? (
            <div className="answer" key={index}>
              <Checkbox
                onClick={() => onCheckboxClick(question.id, index)}
                checked={useCheckedAnswer(question.id, index)}
                disabled={isFinish}
                className={String(index)}
              >
                {answers.textAnswer}
              </Checkbox>
            </div>
          ) : (
            <div>Ошибка сервера, нет ответов</div>
          ),
        )}
      </div>
    </div>
  )
}
