import React from 'react'
import { Routes, Route } from 'react-router-dom'
import QuizPage from 'pages/QuizPage'
import NotFoundPage from 'pages/NotFoundPage'
import { AuthPage } from 'pages/AuthPage'
import { PrivateRoute } from './PrivetRoute'
import StartPage from 'pages/StartPage'
import {
  LOGIN_ROUTE,
  QUIZ_ROUTE,
  REGISTRATION_ROUTE,
  START_ROUTE,
} from 'utils/consts'

const AppRouter = () => {
  return (
    <Routes>
      <Route
        key={REGISTRATION_ROUTE}
        path={REGISTRATION_ROUTE}
        element={<AuthPage />}
      />
      <Route key={LOGIN_ROUTE} path={LOGIN_ROUTE} element={<AuthPage />} />
      <Route key={START_ROUTE} path={START_ROUTE} element={<StartPage />} />
      {/* <Route key={'*'} path={'*'} element={<NotFoundPage />} /> */}
      <Route element={<PrivateRoute />}>
        <Route key={QUIZ_ROUTE} path={QUIZ_ROUTE} element={<QuizPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
