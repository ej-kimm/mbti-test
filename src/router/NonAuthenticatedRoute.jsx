import React from 'react'
import { Outlet } from 'react-router-dom'

export default function NonAuthenticatedRoute() {
  // 인증되지 않은 사용자만

  return <Outlet />
}
