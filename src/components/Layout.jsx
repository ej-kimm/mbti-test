import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="px-4 flex flex-1 justify-center items-center">
        {children}
      </main>
    </div>
  )
}
