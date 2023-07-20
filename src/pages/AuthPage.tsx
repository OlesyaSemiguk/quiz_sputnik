import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import { HeaderComponents } from 'components/Header/HeaderComponents'
import { useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from 'utils/consts'
import './stylePage.scss'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUserRequest, loginUserRequest } from 'api/requestsToDatabase'
import { loginStart, loginSucces } from 'reducers/auth/authAction'

export const AuthPage = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    if (isLogin) {
      loginUser(email, password)
    } else {
      console.log('handleOk')
      dispatch(loginStart())
      createUser(email, password)
    }

    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const loginUser = async (email: string, password: string) => {
    console.log('loginUser')
    loginUserRequest(email, password)
      .then(({ data }) => {
        console.log(data)
        console.log(data.refreshToken)
        document.cookie = `refresh_token=${data.refreshToken};max-age=3600`
        dispatch(loginSucces(data.idToken, data.email))
        navigate('/quiz')
      })
      .catch(() => alert('Invalid user'))
  }
  const createUser = async (email: string, password: string) => {
    console.log('createUser')
    createUserRequest(email, password)
      .then(({ data }) => {
        document.cookie = `refresh_token=${data.refreshToken};max-age=3600`
        dispatch(loginSucces(data.idToken, data.email))
        navigate('/quiz')
      })
      .catch(() => alert('Invalid user'))
  }
  return (
    <>
      <HeaderComponents />
      <Button
        type="primary"
        onClick={showModal}
        className="button_auth"
        size="large"
      >
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
          <input
            type="text"
            placeholder="Введите Email"
            required
            onChange={e => setEmail(e.target.value)}
          />
          <p>Пароль</p>
          <input
            type="password"
            placeholder="Введите пароль"
            required
            onChange={e => setPassword(e.target.value)}
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
