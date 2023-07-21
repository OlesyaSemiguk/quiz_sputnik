import { loginSucces, logout, tokenUpdate } from './authAction'
import authReducer, { AuthState } from './authReducer'

let state: AuthState

describe('Тест Reducer', () => {
  beforeEach(() => {
    state = {
      authData: {
        accessToken: null,
        lifeTimeToken: null,
        email: null,
      },
    }
  })

  test('Авторизация', () => {
    const stateTest = authReducer(state, loginSucces('accessToken', 'email'))
    expect(stateTest.authData.accessToken).toBe('accessToken')
    expect(stateTest.authData.email).toBe('email')
  })
  test('Выход', () => {
    const stateTest = authReducer(state, logout())
    expect(stateTest.authData.accessToken).toBe(null)
    expect(stateTest.authData.email).toBe(null)
  })
  test('Обновление токена', () => {
    const stateTest = authReducer(state, tokenUpdate('accessTokenUpdate'))
    expect(stateTest.authData.accessToken).toBe('accessTokenUpdate')
  })
})
