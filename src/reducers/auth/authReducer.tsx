import { AuthAction } from './authAction'

export const SET_USER = 'SET_USER'
export const REMOVE_USER = 'REMOVE_USER'

export interface Auth {
  email: string
  token: string
  id: string
}

const defaultQuizState: Auth = {
  email: null,
  token: null,
  id: null,
}

const authReducer = (state = defaultQuizState, action: AuthAction): Auth => {
  switch (action.type) {
    case SET_USER:
      return {
        email: action.payload.email,
        token: action.payload.token,
        id: action.payload.id,
      }
    case REMOVE_USER: {
      return {
        email: null,
        token: null,
        id: null,
      }
    }

    default:
      return state
  }
}

export default authReducer
