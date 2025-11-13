import { useParams } from 'react-router-dom';
import data from '../data/portfolioData';


export default function DetailPage() {
  const { section, index } = useParams();
  const item = data[section]?.[parseInt(index)];

  if (!item) return <div className="text-gray-100 p-6">Item not found.</div>;

  const { title, subtitle, date, description, bullets, details } = item;

  return (
    <div className="bg-navy-900 min-h-screen text-gray-100 px-6 py-12 max-w-3xl mx-auto">
      <button onClick={() => window.history.back()} className="mb-6 text-sm text-blue-400 hover:underline">
        ← Back to Portfolio
      </button>

      <h1 className="text-3xl font-semibold mb-2">{title}</h1>
      {subtitle && <p className="text-lg text-gray-300 mb-4">{subtitle}</p>}
      {date && <p className="text-sm text-gray-400 mb-4">{date}</p>}
      {description && <p className="text-base text-gray-300 mb-6">{description}</p>}
      {bullets && (
        <ul className="list-disc ml-6 space-y-2 text-gray-300 mb-6">
          {bullets.map((b, i) => (
            <li key={i}>
              {b.startsWith('http') ? (
                <a href={b} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  {b}
                </a>
              ) : (
                b
              )}
            </li>
          ))}
        </ul>
      )}
      <hr className="border-t border-gray-700 my-8" />

      {/* {bullets && (
        <ul className="list-disc ml-6 space-y-2 text-gray-300 mb-6">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )} */}

      {/* Extended Details */}
      {details?.longText && <p className="text-sm text-gray-300 mb-6">{details.longText}</p>}
      {details?.tags && (
        <div className="flex flex-wrap gap-2 mb-6">
          {details.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-black/30 border border-gray-700 rounded text-xs text-gray-200">
              {tag}
            </span>
          ))}
        </div>
      )}
      {details?.images && (
        <div className="grid grid-cols-2 gap-4">
          {details.images.map((src, i) => (
            <img key={i} src={src} alt={`detail ${i}`} className="rounded-lg border border-gray-700" />
          ))}
        </div>
      )}
      {details?.bullets && (
        <ul className="list-disc ml-6 space-y-2 text-gray-300 mb-6">
          {details.bullets.map((bullet, i) => (
            <li key={i}>
              {bullet.title}
              {bullet.subpoints && (
                <ul className="list-[circle] list-inside ml-4 mt-1 space-y-1">
                  {bullet.subpoints.map((sub, j) => (
                    <li key={j} className="text-gray-400">{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



// // DetailPage.jsx
// W/o independet page rendering


// export default function DetailPage() {
//   const { section, index } = useParams();
//   const item = data[section]?.[parseInt(index)];

//   if (!item) return <div className="text-gray-100 p-6">Item not found.</div>;

//   return (
//     <div className="bg-navy-900 min-h-screen text-gray-100 px-6 py-12 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-semibold mb-2">{item.title}</h1>
//       {item.subtitle && <p className="text-lg text-gray-300 mb-4">{item.subtitle}</p>}
//       {item.date && <p className="text-sm text-gray-400 mb-4">{item.date}</p>}
//       {item.description && <p className="text-base text-gray-300 mb-6">{item.description}</p>}
//       {item.bullets && (
//         <ul className="list-disc ml-6 space-y-2 text-gray-300">
//           {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
//         </ul>
//       )}
//     </div>
//   );
// }