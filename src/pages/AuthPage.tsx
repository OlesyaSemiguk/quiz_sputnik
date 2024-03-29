import { useState } from 'react'
import { Button, Modal } from 'antd'
import { useLocation } from 'react-router-dom'
import { LOGIN_ROUTE } from 'utils/consts'
import './stylePage.scss'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createUserRequest, loginUserRequest } from 'api/requestsToDatabase'
import { loginSucces } from 'reducers/auth/authAction'
import InputComponent from 'components/UI/InputComponent'

interface dataResponse {
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
  registered?: boolean
}
const AuthPage = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [isModalOpen, setIsModalOpen] = useState(false)
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
    document.cookie = `refresh_token=${data.refreshToken};max-age=3600`
    dispatch(loginSucces(data.idToken, data.email))
    navigate('/quiz')
  }
  const textOnPage = isLogin ? 'Авторизация' : 'Регистрация'
  return (
    <>
      <div className="PageContent">
        <div>
          {isLogin ? (
            <div className="authPage__help">
              Для авторизации можете использовать email: user@as.as, пароль:
              123456 <br /> Или создать свою учетную запись, вводить настояющую
              почту для этого не обязательно
            </div>
          ) : (
            <div className="authPage__help">
              Для регистрации использовать настояющую почту для не обязательно
            </div>
          )}
        </div>
        <Button
          type="primary"
          onClick={showModal}
          className="button_auth"
          size="large"
        >
          {textOnPage}
        </Button>
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
            <InputComponent
              className="auth-page"
              type="text"
              placeholder="Введите Email"
              onChange={e => setEmail(e.target.value)}
            />
            <p>Пароль (минимум 6 символов)</p>
            <InputComponent
              className="auth-page"
              type="password"
              placeholder="Введите пароль"
              onChange={e => setPassword(e.target.value)}
            />
            {isLogin ? (
              <div className="link-another-modal">
                Нет аккаунта? <a href="#/registration">Регистрация</a>
              </div>
            ) : (
              <div className="link-another-modal">
                Есть аккаунт? <a href="#/login">Авторизация</a>
              </div>
            )}
          </div>
        </Modal>
      </div>
    </>
  )
}

export default AuthPage
