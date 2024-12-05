import axios from 'axios'

const AUTH_API_URL = 'https://moneyfulpublicpolicy.co.kr'
const TEST_RESULT_API_URL = 'https://open-six-droplet.glitch.me/testResults'

// auth
export const authPublicInstance = axios.create({
  baseURL: AUTH_API_URL,
  headers: { 'Content-Type': 'application/json' },
})

export const authPrivateInstance = axios.create({
  baseURL: AUTH_API_URL,
  headers: { 'Content-Type': 'application/json' },
})

authPrivateInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem('authToken'))
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // 인증 에러 처리(로그아웃, 토큰 갱신 등)
      // 예를들어, setUser(null)을 호출하여 로그아웃 처리
    }
    return Promise.reject(error)
  }
)

// testResult
export const testResultPublicInstance = axios.create({
  baseURL: TEST_RESULT_API_URL,
})
