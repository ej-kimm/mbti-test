import React from 'react'
import { Link } from 'react-router-dom'
import InfoCard from '../components/InfoCard'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-4rem)]">
      <h1 className="text-5xl font-bold text-center text-indigo-600 mb-6">
        Discover Your MBTI Personality
      </h1>
      <p className="text-xl text-center text-gray-600 max-w-2xl mb-8">
        Embark on a journey of self-discovery. Our MBTI test helps you
        understand your personality type and how you interact with the world
        around you
      </p>
      <Link to="/login">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full text-lg">
          Start Your Test Now
        </button>
      </Link>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <InfoCard
          title="Quick & Easy"
          content="Complete the test in just 10 minutes and get instant results."
        />
        <InfoCard
          title="Insightful"
          content="Gain deep insights into your personality traits and tendencies."
        />
        <InfoCard
          title="Scientific"
          content="Based on Carl Jung's and Isabel Briggs Myers' typological approach."
        />
      </div>
    </div>
  )
}
