import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
  // 인증된 사용자만

  return <Outlet />
}
