import { QuestionBlock } from 'components/QuestionBlock/QuestionBlock'
import { questionsData } from 'data/question'
import React from 'react'
const { Header, Content, Footer } = Layout
import { Breadcrumb, Layout, Menu, theme } from 'antd'
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
        <div className="main">
          {questionsData.map(questionData => (
            <QuestionBlock question={questionData} key={questionData.id} />
          ))}
        </div>
      </div>
    </Content>
  )
}
