const SET_USER = 'SET_USER'
const REMOVE_USER = 'REMOVE_USER'

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

interface AuthAction {
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

export default authReducer
