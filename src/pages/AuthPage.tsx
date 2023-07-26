import React, { useState } from 'react'
import { Button, Modal } from 'antd'
import { HeaderComponents } from 'components/Header/HeaderComponents'
import { useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from 'utils/consts'
import './stylePage.scss'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUserRequest, loginUserRequest } from 'api/requestsToDatabase'
import { loginSucces } from 'reducers/auth/authAction'

interface dataResponse {
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
  registered?: boolean
}
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
      createUser(email, password)
    }
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const loginUser = async (email: string, password: string) => {
    loginUserRequest(email, password)
      .then(({ data }) => {
        setData(data)
      })
      .catch(() => alert('Invalid user'))
  }
  const createUser = async (email: string, password: string) => {
    createUserRequest(email, password)
      .then(({ data }) => {
        setData(data)
      })
      .catch(() => alert('Invalid user'))
  }
  const setData = (data: dataResponse) => {
    console.log(data)
    document.cookie = `refresh_token=${data.refreshToken};max-age=3600`
    dispatch(loginSucces(data.idToken, data.email))
    navigate('/quiz')
  }
  const textOnPage = isLogin ? 'Авторизация' : 'Регистрация'
  return (
    <>
      <HeaderComponents />
      <Button
        type="primary"
        onClick={showModal}
        className="button_auth"
        size="large"
      >
        {textOnPage}
      </Button>{' '}
      <Modal
        title={textOnPage}
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
              Нет аккаунта? <a href="#/registration">Регистрация</a>
            </div>
          ) : (
            <div className="anotherModal">
              Есть аккаунт? <a href="#/login">Авторизация</a>
            </div>
          )}
        </div>
      </Modal>{' '}
    </>
  )
}
