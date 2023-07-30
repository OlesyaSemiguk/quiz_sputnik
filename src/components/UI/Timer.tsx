import { Statistic } from 'antd'
import React from 'react'

const Timer = ({ deadline }: any, { finish }: any) => {
  const { Countdown } = Statistic
  return (
    <div className="timer">
      <div>Таймер</div>
      <Countdown value={deadline} onFinish={finish} />
    </div>
  )
}

export default Timer
