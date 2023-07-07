import { Question } from 'data/question'
import React from 'react'
import { Typography, Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { ChooseAnswer, CurrentQuestion } from 'reducers/reposReducer'
import { RootState } from 'reducers/store'
const { Title, Paragraph, Text, Link } = Typography
interface QuestionBlockProps {
  question: Question
}
const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`)
}

export const QuestionBlock = ({ question }: QuestionBlockProps) => {
  const dispatch = useDispatch()
  const isFinish = useSelector((state: RootState) => state.store.isFinish)
  function onCheckboxClick(questionId: number, answerIndex: number) {
    dispatch(CurrentQuestion(questionId))
    dispatch(ChooseAnswer(answerIndex))
  }

  return (
    <div className="question-block" key="{question.id}">
      <Title level={3}>{question.questionText}</Title>
      <div className="question-answers">
        {question.answers.map((answers, index) => (
          <div className="answer" key={index}>
            <Checkbox
              onChange={onChange}
              onClick={() => onCheckboxClick(question.id, index)}
              disabled={isFinish ? true : false}
            >
              {answers.textAnswer}
            </Checkbox>
          </div>
        ))}
      </div>
    </div>
  )
}
