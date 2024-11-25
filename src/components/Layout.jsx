import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="h-screen bg-gray-50">
      <Navbar />
      <main className="px-4">{children}</main>
    </div>
  )
}
