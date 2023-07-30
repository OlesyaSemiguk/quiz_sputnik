import axios from 'axios'
import { refreshTokenRequest } from './requestsToDatabase'
import { useDispatch, useSelector } from 'react-redux'
import { tokenUpdate } from 'reducers/auth/authAction'
import { RootState } from 'reducers/store'
import { getCookie } from 'api/cookie'
import { TIME_TOKEN_LIFE } from 'utils/consts'

axios.interceptors.request.use(async function (res) {
  const lifetimeTokenLeft =
    useSelector((state: RootState) => state.stateAuth.authData.lifeTimeToken) -
    Date.now()
  const minLifeTimeForUpdate = TIME_TOKEN_LIFE * 0.1

  const refreshToken = getCookie('refresh_token')
  //замена токена
  if (refreshToken && lifetimeTokenLeft < minLifeTimeForUpdate) {
    const dispatsh = useDispatch()
    const { data } = await refreshTokenRequest()
    dispatsh(tokenUpdate(data.id_token))
    document.cookie = `refresh_token=${data.refresh_token};max-age=3600`
  }

  const accessToken = useSelector(
    (state: RootState) => state.stateAuth.authData.accessToken,
  )

  if (accessToken) {
    res.params = { ...res.params, auth: accessToken }
  }

  return res
})
