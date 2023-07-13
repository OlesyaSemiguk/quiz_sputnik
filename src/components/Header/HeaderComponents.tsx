import React from 'react'
import { Layout } from 'antd'
import { Typography } from 'antd'
import { LOGIN_ROUTE } from 'utils/consts'
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
      <a href={LOGIN_ROUTE}>
        <Title style={{ color: 'white' }} level={3}>
          QUIZ
        </Title>
      </a>
    </Header>
  )
}
