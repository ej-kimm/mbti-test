import { authPrivateInstance, authPublicInstance } from '../axios/api'

export const register = async (userData) => {
  const response = await authPublicInstance.post('/register', userData)
  return response.data
}

export const login = async (userData) => {
  const response = await authPublicInstance.post('/login', userData)
  return response.data
}

export const getUserProfile = async () => {
  const response = await authPrivateInstance.get('/user')
  return response.data
}

export const updateProfile = async (formData) => {
  const data = new FormData()
  data.append('avatar', formData.imgFile)
  data.append('nickname', formData.nickname)

  const response = await authPrivateInstance.patch('/profile', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}
