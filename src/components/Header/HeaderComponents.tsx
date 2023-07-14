import React from 'react'
import { Button, Layout } from 'antd'
import { Typography } from 'antd'
import { LOGIN_ROUTE, START_ROUTE } from 'utils/consts'
import { useAuth } from 'components/hooks/use-auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { RemoveUser } from 'reducers/authReducer'
const { Title } = Typography

const { Header } = Layout

export const HeaderComponents = () => {
  const { isAuth } = useAuth()
  const dispatch = useDispatch()

  const exitUser = () => {
    dispatch(RemoveUser())
  }
  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="demo-logo" />
      <Title style={{ color: 'white', cursor: 'default' }} level={3}>
        QUIZ
      </Title>
      {isAuth && (
        <Button
          type="primary"
          size="large"
          style={{ display: 'flex', marginLeft: 'auto' }}
          onClick={exitUser}
        >
          Выйти
        </Button>
      )}
    </Header>
  )
}
