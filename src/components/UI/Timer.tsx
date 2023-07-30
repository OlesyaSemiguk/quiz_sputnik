import { Statistic } from 'antd'
import React from 'react'
interface timerProps {
  deadline: number
  finish: () => void
}
const Timer = (props: timerProps) => {
  const { Countdown } = Statistic
  return (
    <div className="timer">
      <div>Таймер</div>
      <Countdown value={props.deadline} onFinish={props.finish} />
    </div>
  )
}

export default Timer
