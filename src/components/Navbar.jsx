import React from 'react'
import { Link } from 'react-router-dom'
import Button from './ui/Button'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-indigo-600">
              MBTI Test
            </span>
          </Link>
          <Link to="/login">
            <Button type="button" variant="default">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
