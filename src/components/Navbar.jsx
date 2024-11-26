import React from 'react'
import { Link } from 'react-router-dom'
import Button from './ui/Button'
import { useAuthContext } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuthContext()

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-indigo-600">
              MBTI Test
            </span>
          </Link>
          {user ? (
            <div className="flex gap-2">
              <Link to="/profile">
                <Button type="button" variant="ghost">
                  Profile
                </Button>
              </Link>
              <Link to="/results">
                <Button type="button" variant="ghost">
                  Results
                </Button>
              </Link>
              <Button type="button" variant="default" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button type="button" variant="default">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
