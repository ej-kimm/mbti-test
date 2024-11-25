import React from 'react'

export default function Button({ children, type, variant = 'default' }) {
  const buttonClasses =
    variant === 'ghost'
      ? 'hover:bg-gray-100'
      : 'bg-black text-white hover:bg-zinc-800'

  return (
    <button
      type={type}
      className={`${buttonClasses} font-semibold px-3 py-2 rounded-md`}
    >
      {children}
    </button>
  )
}
