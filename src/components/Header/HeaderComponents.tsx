import { Button, Layout } from 'antd'
import { Typography } from 'antd'
import { useDispatch } from 'react-redux'

import { useAuth } from 'hooks/use-auth'
import { deleteRefreshToken } from 'api/cookie'
import { logout } from 'reducers/auth/authAction'
import React from 'react'

const { Title } = Typography
const { Header } = Layout

const HeaderComponents = () => {
  const { isAuth } = useAuth()
  const dispatch = useDispatch()
  const exitUser = () => {
    dispatch(logout())
    deleteRefreshToken()
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
export default React.memo(HeaderComponents)
