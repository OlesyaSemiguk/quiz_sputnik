import { Layout } from 'antd'
import React from 'react'

const { Footer } = Layout

const FooterComponents = () => {
  return <Footer style={{ textAlign: 'center' }}>Quiz ©2023</Footer>
}
export default React.memo(FooterComponents)
