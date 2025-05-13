
'use client'

import { forwardRef } from 'react'

const Preloader = forwardRef(function Preloader(_, ref) {
  return (
    <div
      ref={ref}
      className="fixed inset-0 flex items-center justify-center bg-white z-50"
      aria-label="Loading…"
    >
      <svg
        className="animate-spin h-12 w-12"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
    </div>
  )
})

export default Preloader
