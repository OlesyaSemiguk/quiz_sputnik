import ButtonWithError from 'components/ButtonWithError'
import ErrorBoundary from 'components/ErrorBoundary'
import { HeaderComponents } from 'components/Header/HeaderComponents'
import { error } from 'console'
import React from 'react'
import { LOGIN_ROUTE } from 'utils/consts'
import './stylePage.scss'
const StartPage = () => {
  return (
    <>
      <HeaderComponents />
      <div className="PageContent">
        <p className="TitlePageContent">Главная страница</p>
        <a className="StartPageLink" href={LOGIN_ROUTE}>
          Перейти на страницу авторизации
        </a>
        <ErrorBoundary>
          <ButtonWithError />
        </ErrorBoundary>
      </div>
    </>
  )
}

export default StartPage
