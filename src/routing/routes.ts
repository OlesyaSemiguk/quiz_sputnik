import NotFoundPage from 'pages/NotFoundPage'
import QuizPage from 'pages/QuizPage'
import { AuthPage } from 'pages/AuthPage'
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
    Component: AuthPage,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: AuthPage,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
]
