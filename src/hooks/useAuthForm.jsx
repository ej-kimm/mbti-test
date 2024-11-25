import { useState } from 'react'
import { login, register } from '../api/auth'

export default function useAuthForm(mode) {
  const [user, setUser] = useState({ id: '', password: '', nickname: '' })

  const handleChange = (e) => {
    const { id, value } = e.target
    setUser((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (mode === 'login') {
      const response = await login({ id: user.id, password: user.password })
      console.log(response) // 확인
    } else if (mode === 'signup') {
      const response = await register({
        id: user.id,
        password: user.password,
        nickname: user.nickname,
      })
      console.log(response) // 확인
    }
  }

  return { user, handleChange, handleSubmit }
}
