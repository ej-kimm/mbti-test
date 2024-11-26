import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

export default function ProtectedRoute() {
  const { user } = useAuthContext()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
