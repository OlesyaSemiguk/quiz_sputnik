import './stylePage.scss'
const StartPage = () => {
  return (
    <>
      <div className="PageContent">
        <p className="TitlePageContent">Главная страница</p>
        <a className="StartPageLink" href="#/login">
          Перейти на страницу авторизации
        </a>
      </div>
    </>
  )
}

export default StartPage
