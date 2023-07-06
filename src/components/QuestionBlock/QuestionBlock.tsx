import { Question } from 'data/question'
import React from 'react'
import { Typography, Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

const { Title, Paragraph, Text, Link } = Typography
interface QuestionBlockProps {
  question: Question
}
const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`)
}

export const QuestionBlock = ({ question }: QuestionBlockProps) => {
  return (
    <div className="question-block">
      <Title level={3}>{question.questionText}</Title>
      <div className="question-answers">
        {question.answers.map(answers => (
          <div className="answer">
            <Checkbox onChange={onChange}>{answers.textAnswer}</Checkbox>
          </div>
        ))}
      </div>
    </div>
  )
}
