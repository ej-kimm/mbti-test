import { useState } from 'react'
import { register } from '../api/auth'
import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function useAuthForm(mode) {
  const { login } = useAuthContext()
  const [user, setUser] = useState({ id: '', password: '', nickname: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { id, value } = e.target
    setUser((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (mode === 'login') {
      try {
        await login(user.id, user.password)
      } catch (error) {
        console.error(error)
        alert('로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.')
      }
    } else if (mode === 'signup') {
      try {
        await register({
          id: user.id,
          password: user.password,
          nickname: user.nickname,
        })
        alert('회원가입 성공했습니다! 로그인 해주세요')
        navigate('/login')
      } catch (error) {
        console.error(error)
        alert('회원가입에 실패했습니다. 다시 시도해주세요.')
      }
    }
  }

  return { user, handleChange, handleSubmit }
}
