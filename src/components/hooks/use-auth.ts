import { useSelector } from 'react-redux'
import { RootState } from 'reducers/store'

export function useAuth() {
  const { email, token, id } = useSelector(
    (state: RootState) => state.stateAuth,
  )
  return {
    isAuth: !!email,
    email,
    token,
    id,
  }
}
