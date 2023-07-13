import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { HeaderComponents } from 'components/Header/HeaderComponents'
import { useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from 'utils/consts'
import './stylePage.scss'
export const StartPage = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [isModalOpen, setIsModalOpen] = useState(true)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <HeaderComponents />
      <Button type="primary" onClick={showModal}>
        Авторизация
      </Button>
      <Modal
        title={isLogin ? 'Авторизация' : 'Регистрация'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="modal"
        width={350}
      >
        <div>
          <p>Email</p>
          <input type="text" placeholder="Enter Email" name="email" required />
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          {isLogin ? (
            <div className="anotherModal">
              Нет аккаунта? <a href={REGISTRATION_ROUTE}>Регистрация</a>
            </div>
          ) : (
            <div className="anotherModal">
              Есть аккаунт? <a href={LOGIN_ROUTE}>Авторизация</a>
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}
