import React from 'react'
import InputField from './InputField'
import { Link } from 'react-router-dom'
import useAuthForm from '../hooks/useAuthForm'

export default function AuthForm({ mode }) {
  const { user, handleChange, handleSubmit } = useAuthForm(mode)

  return (
    <form
      className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      onSubmit={handleSubmit}
    >
      <InputField
        id="id"
        type="text"
        placeholder="Enter your id"
        value={user.id}
        onChange={handleChange}
      />
      <InputField
        id="password"
        type="password"
        placeholder="Enter your password"
        value={user.password}
        onChange={handleChange}
      />
      {mode === 'signup' && (
        <InputField
          id="nickname"
          type="text"
          placeholder="Enter your nickname"
          value={user.nickname}
          onChange={handleChange}
        />
      )}
      <div className="flex items-center justify-between">
        {mode === 'login' ? (
          <p className="text-sm text-gray-600">
            No account yet?
            <Link to="/signup" className="underline">
              Create one
            </Link>
          </p>
        ) : (
          <p className="text-sm text-gray-600">
            Already have an account?
            <Link to="/login" className="underline">
              Sign In
            </Link>
          </p>
        )}
        <button
          className="inline-block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          type="submit"
        >
          {mode === 'login' ? 'Sign In' : 'Sign Up'}
        </button>
      </div>
    </form>
  )
}
