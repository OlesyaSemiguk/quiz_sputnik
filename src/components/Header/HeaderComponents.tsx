import { Button, Layout } from 'antd'
import { Typography } from 'antd'
import { useDispatch } from 'react-redux'
import { useAuth } from 'hooks/useAuth'
import { deleteRefreshToken } from 'api/cookie'
import { logout } from 'reducers/auth/authAction'
import React from 'react'
import './HeaderComponents.scss'
import { ResetQuiz } from 'reducers/quiz/quizActions'
const { Title } = Typography
const { Header } = Layout

const HeaderComponents = () => {
  const { isAuth } = useAuth()
  const dispatch = useDispatch()
  const exitUser = () => {
    dispatch(logout())
    dispatch(ResetQuiz())
    deleteRefreshToken()
  }
  return (
    <Header>
      <div className="header">
        <div className="demo-logo" />
        <div className="title"> QUIZ</div>
        {isAuth && (
          <Button
            type="primary"
            size="large"
            className="button"
            onClick={exitUser}
          >
            Выйти
          </Button>
        )}
      </div>
    </Header>
  )
}
export default React.memo(HeaderComponents)
