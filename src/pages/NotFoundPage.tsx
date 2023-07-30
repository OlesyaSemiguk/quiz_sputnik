import './stylePage.scss'
const NotFoundPage = () => {
  return (
    <>
      <div className="PageContent">
        <p className="TitlePageContent">Страница не найдена</p>
        <a href="#/login">Перейти на страницу авторизации</a>
      </div>
    </>
  )
}

export default NotFoundPage
