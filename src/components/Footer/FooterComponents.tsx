import { Layout } from 'antd'
import React from 'react'
import './FooterComponents.scss'

const { Footer } = Layout

const FooterComponents = () => {
  return (
    <Footer>
      <div className="footer-text">Quiz ©2023</div>
    </Footer>
  )
}
export default React.memo(FooterComponents)
