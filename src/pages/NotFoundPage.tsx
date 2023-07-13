import { HeaderComponents } from 'components/Header/HeaderComponents'
import React from 'react'

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
        <a href="/login">Перейти на страницу авторизации</a>
      </div>
    </>
  )
}

export default NotFoundPage
