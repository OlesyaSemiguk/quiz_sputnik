import { FooterComponents } from 'components/Footer/FooterComponents'
import { HeaderComponents } from 'components/Header/HeaderComponents'
import { Main } from 'components/Main/Main'
import React from 'react'
import { Layout } from 'antd'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from 'components/AppRouter'
export function App() {
  return <AppRouter />
}
