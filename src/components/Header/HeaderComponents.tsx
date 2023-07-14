import React from 'react'
import { Button, Layout } from 'antd'
import { Typography } from 'antd'
import { useAuth } from 'components/hooks/use-auth'
import { useDispatch } from 'react-redux'
import { RemoveUser } from 'reducers/auth/authAction'

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
