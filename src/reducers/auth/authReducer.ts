import { TIME_TOKEN_LIFE } from 'utils/constsAuth'
import { AuthAction } from './authAction'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCESS = 'LOGIN_SUCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'
export const TOKEN_UPDATE = 'TOKEN_UPDATE'

export interface AuthState {
  authData: {
    accessToken: string | null
    lifeTimeToken: number | null
    isLoading: boolean
    error: string | null
    email: string | null
  }
}

const defaultAuthState: AuthState = {
  authData: {
    accessToken: null,
    lifeTimeToken: null,
    isLoading: false,
    error: null,
    email: null,
  },
}

const authReducer = (
  state = defaultAuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        authData: {
          ...state.authData,
          isLoading: true,
        },
      }
    case LOGIN_SUCESS:
      return {
        ...state,
        authData: {
          ...state.authData,
          accessToken: action.payloadToken,
          email: action.payloadEmail,

          lifeTimeToken: new Date().getTime() + TIME_TOKEN_LIFE,
          isLoading: false,
          error: null,
        },
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        authData: {
          ...state.authData,
          isLoading: false,
          error: action.payload,
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
          accessToken: action.payload,
        },
      }
    default:
      return state
  }
}

export default authReducer
