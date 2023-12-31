import { useAuth } from 'hooks/useAuth'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
export const PrivateRoute = () => {
  const { isAuth } = useAuth()
  const location = useLocation()

  return isAuth === true ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
