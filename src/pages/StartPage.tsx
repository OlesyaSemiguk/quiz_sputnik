import ButtonWithError from 'components/ButtonWithError'
import ErrorBoundary from 'components/ErrorBoundary'
import HeaderComponents from 'components/Header/HeaderComponents'

import './stylePage.scss'
import FooterComponents from 'components/Footer/FooterComponents'
const StartPage = () => {
  return (
    <>
      <HeaderComponents />
      <div className="PageContent">
        <p className="TitlePageContent">Главная страница</p>
        <a className="StartPageLink" href="#/login">
          Перейти на страницу авторизации
        </a>
        <ErrorBoundary>
          <ButtonWithError />
        </ErrorBoundary>
      </div>
      <FooterComponents />
    </>
  )
}

export default StartPage
