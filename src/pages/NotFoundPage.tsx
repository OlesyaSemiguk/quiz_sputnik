import { HeaderComponents } from 'components/Header/HeaderComponents'
import React from 'react'
import { LOGIN_ROUTE } from 'utils/consts'
import './stylePage.scss'
const NotFoundPage = () => {
  return (
    <>
      <HeaderComponents />
      <div className="PageContent">
        <p className="TitlePageContent">Страница не найдена</p>
        <a href={LOGIN_ROUTE}>Перейти на страницу авторизации</a>
      </div>
    </>
  )
}

export default NotFoundPage
