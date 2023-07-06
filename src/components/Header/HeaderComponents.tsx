import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { Typography, Checkbox } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

import { ConfigProvider, Radio } from 'antd'
const { Title, Paragraph, Text, Link } = Typography

const { Header, Content, Footer } = Layout

export const HeaderComponents = () => {
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <div className="demo-logo" />
      <Title level={3}>QUIZ</Title>{' '}
    </Header>
  )
}
