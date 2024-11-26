import { useState } from 'react'
import { register } from '../api/auth'
import { useAuthContext } from '../context/AuthContext'

export default function useAuthForm(mode) {
  const { login } = useAuthContext()
  const [user, setUser] = useState({ id: '', password: '', nickname: '' })

  const handleChange = (e) => {
    const { id, value } = e.target
    setUser((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (mode === 'login') {
      await login(user.id, user.password)
    } else if (mode === 'signup') {
      await register({
        id: user.id,
        password: user.password,
        nickname: user.nickname,
      })
    }
  }

  return { user, handleChange, handleSubmit }
}
