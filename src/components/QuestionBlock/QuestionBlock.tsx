import { Question } from 'data/question'
import React from 'react'
import { Typography, Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { useDispatch } from 'react-redux/es/exports'
import { CheckingAnswer } from 'reducers/reposReducer'

const { Title, Paragraph, Text, Link } = Typography
interface QuestionBlockProps {
  question: Question
}
const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`)
}

export const QuestionBlock = ({ question }: QuestionBlockProps) => {
  const dispatch = useDispatch()
  function onCheckboxClick(answer: number) {
    dispatch(CheckingAnswer(answer))
  }
  return (
    <div className="question-block" key="{question.id}">
      <Title level={3}>{question.questionText}</Title>
      <div className="question-answers">
        {question.answers.map((answers, index) => (
          <div className="answer" key={index}>
            <Checkbox
              onChange={onChange}
              onClick={() => onCheckboxClick(answers.correct)}
            >
              {answers.textAnswer}
            </Checkbox>
          </div>
        ))}
      </div>
    </div>
  )
}
