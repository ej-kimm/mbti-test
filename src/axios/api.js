import axios from 'axios'

const AUTH_API_URL = 'https://moneyfulpublicpolicy.co.kr'
const TEST_RESULT_API_URL = 'http://localhost:5000/testResults'

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
  (error) => Promise.reject(error)
)

// testResult
export const testResultPublicInstance = axios.create({
  baseURL: TEST_RESULT_API_URL,
})
