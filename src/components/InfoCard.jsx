import React from 'react'

export default function InfoCard({ title, content }) {
  return (
    <div className="max-w-96 p-6 bg-white border rounded-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}
