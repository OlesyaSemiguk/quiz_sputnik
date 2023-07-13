import React from 'react'
import { Layout } from 'antd'
import { Typography } from 'antd'

import './HeaderComponents.scss'
const { Title } = Typography

const { Header } = Layout

export const HeaderComponents = () => {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="demo-logo" />
      <Title className="tit" level={3}>
        QUIZ
      </Title>{' '}
    </Header>
  )
}
