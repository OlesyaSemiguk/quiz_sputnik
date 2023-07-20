import axios from 'axios'
import { getCookie } from 'api/cookie'

const requestFirebase = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
  params: {
    key: 'AIzaSyBssxDFsV1iClMXg_cvpudDZj52566q6B0',
  },
})

export async function createUserRequest(email: string, password: string) {
  const data = await requestFirebase.post('accounts:signUp', {
    email,
    password,
    returnSecureToken: true,
  })
  return data
}

export async function loginUserRequest(email: string, password: string) {
  const data = await requestFirebase.post('accounts:signInWithPassword', {
    email,
    password,
    returnSecureToken: true,
  })
  return data
}
export async function refreshTokenRequest() {
  const data = await requestFirebase.post('token', {
    grant_type: 'refresh_token',
    refresh_token: getCookie('refresh_token'),
  })
  return data
}
