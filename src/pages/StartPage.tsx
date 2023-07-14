import { HeaderComponents } from 'components/Header/HeaderComponents'
import React from 'react'
import { LOGIN_ROUTE } from 'utils/consts'

const StartPage = () => {
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
          Главная страница
        </p>
        <a href={LOGIN_ROUTE}>Перейти на страницу авторизации</a>
      </div>
    </>
  )
}

export default StartPage
