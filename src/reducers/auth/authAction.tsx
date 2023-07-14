import { Auth, REMOVE_USER, SET_USER } from './authReducer'

export interface AuthAction {
  type: string
  payload?: Auth
}

export const SetUser = (newUser: Auth): AuthAction => {
  return {
    type: SET_USER,
    payload: newUser,
  }
}
export const RemoveUser = (): AuthAction => {
  return {
    type: REMOVE_USER,
  }
}
