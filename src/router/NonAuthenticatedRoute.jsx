import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

export default function NonAuthenticatedRoute() {
  const { user } = useAuthContext()

  if (user) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
