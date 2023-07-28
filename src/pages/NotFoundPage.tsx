import HeaderComponents from 'components/Header/HeaderComponents'

import './stylePage.scss'
import FooterComponents from 'components/Footer/FooterComponents'
const NotFoundPage = () => {
  return (
    <>
      <HeaderComponents />
      <div className="PageContent">
        <p className="TitlePageContent">Страница не найдена</p>
        <a href="#/login">Перейти на страницу авторизации</a>
      </div>
      <FooterComponents />
    </>
  )
}

export default NotFoundPage
