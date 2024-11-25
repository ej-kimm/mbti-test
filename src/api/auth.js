import axios from 'axios'

const API_URL = 'https://moneyfulpublicpolicy.co.kr'

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData)
  return response.data
}

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData)
  return response.data
}

export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const updateProfile = async (formData, token) => {
  const data = new FormData()
  data.append('avatar', formData.imgFile)
  data.append('nickname', formData.nickname)

  const response = await axios.patch(`${API_URL}/profile`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
