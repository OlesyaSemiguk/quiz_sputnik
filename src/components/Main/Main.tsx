import React from 'react'
import { Quiz } from 'components/Quiz/Quiz'
import { Layout, theme } from 'antd'

const { Content } = Layout

export const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Content style={{ padding: '0 50px' }}>
      <div
        className="site-layout-content"
        style={{ background: colorBgContainer }}
      >
        <Quiz />
      </div>
    </Content>
  )
}
