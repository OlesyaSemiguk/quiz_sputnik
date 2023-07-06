import { FooterComponents } from 'components/Footer/FooterComponents'
import { HeaderComponents } from 'components/Header/HeaderComponents'
import { Main } from 'components/Main/Main'
import React from 'react'
import { DatePicker } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { Button, ConfigProvider } from 'antd'
export function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#006d75',
        },
      }}
    >
      <Layout className="layout">
        <HeaderComponents />
        <Main />
        <FooterComponents />
      </Layout>
    </ConfigProvider>
  )
}
