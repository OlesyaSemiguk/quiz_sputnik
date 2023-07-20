import { useSelector } from 'react-redux'
import { RootState } from 'reducers/store'

export function useAuth() {
  const { email } = useSelector((state: RootState) => state.stateAuth.authData)

  return {
    isAuth: !!email,
  }
}
