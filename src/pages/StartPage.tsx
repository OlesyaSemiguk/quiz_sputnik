import ButtonWithError from 'components/ButtonWithError'
import ErrorBoundary from 'components/ErrorBoundary'

import './stylePage.scss'
const StartPage = () => {
  return (
    <>
      <div className="PageContent">
        <p className="TitlePageContent">Главная страница</p>
        <a className="StartPageLink" href="#/login">
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
