import React from 'react'

export default function InputField({ id, type, placeholder, value, onChange }) {
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  )
}
