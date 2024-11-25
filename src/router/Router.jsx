import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
import TestPage from '../pages/TestPage'
import TestResultPage from '../pages/TestResultPage'
import ProtectedRoute from './ProtectedRoute'
import NonAuthenticatedRoute from './NonAuthenticatedRoute'
import Layout from '../components/Layout'

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<NonAuthenticatedRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/results" element={<TestResultPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
