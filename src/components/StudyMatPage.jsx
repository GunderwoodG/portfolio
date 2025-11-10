// components/StudyMaterialsPage.jsx
import React from 'react';

const studyMaterials = [
  {
    title: "ECE 2214 - Signals and Systems Study Guide",
    description: "Comprehensive...",
    file: "/pdfs/ECE2214Exam2StudyGuide.pdf"
  },
  {
    title: "MATH 2214 - Differential Equations Practice",
    description: "Practice problems and solutions for first-order and second-order DEs.",
    file: "/pdfs/ECE2214Exam2StudyGuide.pdf"
  },
  {
    title: "PHYS 2306 - Electromagnetism Summary",
    description: "Quick reference guide for Maxwell's equations and field theory.",
    file: "/pdfs/phys2306_summary.pdf"
  }
];

export default function StudyMaterialsPage() {
  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-semibold text-light-gold">VT Study Materials</h2>
      <p className="text-gray-300">Click to view or download PDFs for various VT courses.</p>
      <ul className="space-y-6">
        {studyMaterials.map((item, idx) => (
          <li key={idx} className="border border-gray-700 p-4 rounded-lg bg-navy-800">
            <h3 className="text-xl font-medium text-gray-100">{item.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{item.description}</p>
            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              View / Download PDF
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}