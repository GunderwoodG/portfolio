import React from 'react'

export default function Footer() {
  return (
    <footer className="pt-12 pb-6 text-center text-sm text-gray-400">
      <div className="opacity-80">Made by hand — React + Vite + Tailwind</div>
      <div className="mt-2">© {new Date().getFullYear()} Garrison Underwood</div>
    </footer>
  )
}
