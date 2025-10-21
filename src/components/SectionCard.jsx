import React from 'react'

export default function SectionCard({ item }) {
  return (
    <article className="bg-gradient-to-tr from-black/60 to-navy-900/60 border border-gray-800 rounded-xl p-5 shadow-md hover:scale-[1.05] transition-transform">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-gray-100">{item.title}</h3>
          {item.subtitle && <p className="text-sm text-gray-300 mt-1">{item.subtitle}</p>}
        </div>
        {item.date && <div className="text-xs text-gray-400">{item.date}</div>}
      </div>
      {item.description && <p className="text-sm text-gray-300 mt-3">{item.description}</p>}
      {item.bullets && (
        <ul className="mt-3 ml-4 list-disc text-gray-300 text-sm space-y-1">
          {item.bullets.map((b,i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </article>
  )
}
