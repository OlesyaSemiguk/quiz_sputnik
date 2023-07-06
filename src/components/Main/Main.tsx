import { QuestionBlock } from 'components/QuestionBlock/QuestionBlock'
import { questionsData } from 'data/question'
import React from 'react'
export const Main = () => {
  return (
    <div className="main">
      {questionsData.map(questionData => (
        <QuestionBlock question={questionData} key={questionData.id} />
      ))}
    </div>
  )
}
