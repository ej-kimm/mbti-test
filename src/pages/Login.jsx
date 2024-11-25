import React from 'react'
import AuthForm from '../components/AuthForm'

export default function Login() {
  return (
    <div>
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-3xl font-bold">Welcome Back!</h1>
        <p className="mt-4 text-gray-600">
          Thank you for visiting our MBTI test site. Please log in to proceed
          with the test.
        </p>
      </div>
      <AuthForm mode="login" />
    </div>
  )
}
