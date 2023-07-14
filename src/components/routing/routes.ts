import NotFoundPage from 'pages/NotFoundPage'
import QuizPage from 'pages/QuizPage'
import { StartPage } from 'pages/StartPage'
import { LOGIN_ROUTE, QUIZ_ROUTE, REGISTRATION_ROUTE } from 'utils/consts'

export const authRoutes = [
  {
    path: QUIZ_ROUTE,
    Component: QuizPage,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: StartPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: StartPage,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]
