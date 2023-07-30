import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from '../pages/PrivateRoute'
import AuthPage from 'pages/AuthPage'

import {
  LOGIN_ROUTE,
  QUIZ_ROUTE,
  REGISTRATION_ROUTE,
  START_PAGE_ROUTE,
  START_ROUTE,
} from 'utils/consts'
import LayoutPage from 'pages/LayoutPage'

const StartPage = lazy(() => import('pages/StartPage'))
const NotFoundPage = lazy(() => import('pages/NotFoundPage'))
const QuizPage = lazy(() => import('pages/QuizPage'))

const AppRouter = () => {
  return (
    <Routes>
      <Route key={START_ROUTE} path={START_ROUTE} element={<LayoutPage />}>
        <Route
          key={REGISTRATION_ROUTE}
          path={REGISTRATION_ROUTE}
          element={<AuthPage />}
        />
        <Route key={LOGIN_ROUTE} path={LOGIN_ROUTE} element={<AuthPage />} />
        <Route
          index
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <StartPage />
            </Suspense>
          }
        />
        <Route
          key={'*'}
          path={'*'}
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <NotFoundPage />
            </Suspense>
          }
        />
        <Route element={<PrivateRoute />}>
          <Route
            key={QUIZ_ROUTE}
            path={QUIZ_ROUTE}
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <QuizPage />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRouter
