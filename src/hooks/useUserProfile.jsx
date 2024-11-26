import { useEffect, useState } from 'react'
import { getUserProfile } from '../api/auth'
import { useAuthContext } from '../context/AuthContext'

export default function useUserProfile() {
  const { user: token } = useAuthContext()
  const [userProfile, setUserProfile] = useState(null)

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const profile = await getUserProfile(token)
        setUserProfile(profile)
      } catch (error) {
        console.error('Failed to fetch user profile:', error)
      }
    }

    if (token) {
      fetchUserInfo()
    }
  }, [token])

  return userProfile
}
