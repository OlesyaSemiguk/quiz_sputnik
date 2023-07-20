import {
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCESS,
  LOGOUT,
  TOKEN_UPDATE,
} from './authReducer'

export interface AuthAction {
  type: string
  payload?: string
  payloadToken?: string
  payloadEmail?: string
}

export const loginStart = (): AuthAction => {
  return {
    type: LOGIN_START,
  }
}
export const loginSucces = (accessToken: string, email: string) => {
  return {
    type: LOGIN_SUCESS,
    payloadToken: accessToken,
    payloadEmail: email,
  }
}
export const loginFailure = (error: string): AuthAction => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  }
}
export const logout = (): AuthAction => {
  return {
    type: LOGOUT,
  }
}
export const tokenUpdate = (accessToken: string): AuthAction => {
  return {
    type: TOKEN_UPDATE,
    payload: accessToken,
  }
}
