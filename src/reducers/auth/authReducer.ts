import { TIME_TOKEN_LIFE } from 'utils/consts'
import { AuthAction } from './authAction'

export const LOGIN_SUCESS = 'LOGIN_SUCESS'
export const LOGOUT = 'LOGOUT'
export const TOKEN_UPDATE = 'TOKEN_UPDATE'

export interface AuthState {
  authData: {
    accessToken: string | null
    lifeTimeToken: number | null
    email: string | null
  }
}

const defaultAuthState: AuthState = {
  authData: {
    accessToken: null,
    lifeTimeToken: null,
    email: null,
  },
}

const authReducer = (
  state = defaultAuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case LOGIN_SUCESS:
      return {
        ...state,
        authData: {
          ...state.authData,
          accessToken: action.payloadToken,
          email: action.payloadEmail,
          lifeTimeToken: new Date().getTime() + TIME_TOKEN_LIFE,
        },
      }
    case LOGOUT:
      return {
        ...defaultAuthState,
      }
    case TOKEN_UPDATE:
      return {
        ...state,
        authData: {
          ...state.authData,
          accessToken: action.payloadToken,
        },
      }
    default:
      return state
  }
}

export default authReducer
