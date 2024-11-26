import { createContext, useContext, useState } from 'react'
import { login as loginAPI } from '../api/auth'

const AuthContext = createContext()

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(() => readTokenFromlocalStorage())

  const login = async (id, password) => {
    try {
      const response = await loginAPI({ id, password })
      localStorage.setItem('authToken', JSON.stringify(response.accessToken))
      setUser(response)
    } catch (error) {
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  return useContext(AuthContext)
}

function readTokenFromlocalStorage() {
  const token = localStorage.getItem('authToken')
  return token ? JSON.parse(token) : null
}
