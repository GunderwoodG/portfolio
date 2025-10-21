import React, { useState, useEffect } from 'react'

const links = [
  { href: '#landing', label: 'Home' },
  { href: '#academic', label: 'Academic' },
  { href: '#extracurricular', label: 'Extracurricular' },
  { href: '#athletics', label: 'Athletics' },
  { href: '#skills', label: 'Skills' }
]

export default function Navbar() {
  const [shadow, setShadow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShadow(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 left-0 z-40 transition-shadow ${shadow ? 'shadow-md backdrop-blur-sm bg-black/40' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-deep-blue to-navy-900 flex items-center justify-center border border-gray-700">
            <span className="text-sm font-semibold text-light-gold">GU</span>
          </div>
          <div className="hidden md:block text-sm text-gray-200">Garrison Underwood</div>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map(l => (
            <li key={l.href}><a href={l.href} className="hover:text-light-gold transition-colors">{l.label}</a></li>
          ))}
        </ul>
        <div className="md:hidden">
          {/* simple mobile anchor menu */}
          <select onChange={(e)=>window.location.assign(e.target.value)} className="bg-transparent border border-gray-700 text-sm px-2 py-1 rounded">
            {links.map(l => <option key={l.href} value={l.href}>{l.label}</option>)}
          </select>
        </div>
      </nav>
    </header>
  )
}
