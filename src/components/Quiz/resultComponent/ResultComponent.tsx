import React from 'react'

interface resultComponentProps {
  isFinish: boolean
  CorrectAnswer: number
  allAnswer: number
}

const ResultComponent = ({
  isFinish,
  CorrectAnswer,
  allAnswer,
}: resultComponentProps) => {
  return (
    <h3 className={isFinish ? 'active' : 'result'}>
      Правильных ответов {CorrectAnswer} из {allAnswer}
    </h3>
  )
}

export default ResultComponent
