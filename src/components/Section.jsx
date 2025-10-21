import React from 'react'
import SectionCard from './SectionCard'

export default function Section({ id, title, items = [] }) {
  return (
    <section id={id} className="pt-6">
      <h2 className="text-2xl font-semibold text-gray-100 mb-4">{title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it, idx) => <SectionCard key={idx} item={it} />)}
      </div>
    </section>
  )
}
