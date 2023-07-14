import { HeaderComponents } from 'components/Header/HeaderComponents'
import React from 'react'
import { LOGIN_ROUTE } from 'utils/consts'

const NotFoundPage = () => {
  return (
    <>
      <HeaderComponents />
      <div
        style={{
          padding: 24,
          textAlign: 'center',
          fontSize: 20,
        }}
      >
        <p
          style={{
            fontSize: 30,
          }}
        >
          Страница не найдена
        </p>
        <a href={LOGIN_ROUTE}>Перейти на страницу авторизации</a>
      </div>
    </>
  )
}

export default NotFoundPage
