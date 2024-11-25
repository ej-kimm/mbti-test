import React from 'react'
import AuthForm from '../components/AuthForm'

export default function Signup() {
  return (
    <div>
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-3xl font-bold">Create an Account</h1>
        <p className="mt-4 text-gray-600">
          Join us to take the MBTI test and discover more about yourself. Please
          sign up to get started.
        </p>
      </div>
      <AuthForm mode="signup" />
    </div>
  )
}
