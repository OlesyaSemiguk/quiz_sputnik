import { useAuth } from 'components/hooks/use-auth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const PrivateRoute = () => {
  const { isAuth } = useAuth()

  const location = useLocation()
  {
    console.log('почему юююю', isAuth)
  }

  return isAuth === true ? (
    <Outlet />
  ) : (
    // Если пользователь не авторизован, то перенаправляем его на маршрут /login с помощью компонента Navigate.
    // Свойство replace указывает, что текущий маршрут будет заменен на новый, чтобы пользователь не мог вернуться обратно, используя кнопку "назад" в браузере.
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
