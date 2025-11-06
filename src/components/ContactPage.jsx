// src/components/ContactPage.jsx


/////// Email JS
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_45o0lax',     
      'template_y675qgs',
      e.target,
      'ga1Ct7Uaf5Zaksu1P'         // e.g., 'user_ABC123XYZ'
    ).then(() => {
      setLoading(false);
      setSubmitted(true);
    }).catch((error) => {
      setLoading(false);
      console.error('EmailJS error:', error);
      alert('Something went wrong. Please try again.');
    });
  };

  return (
    <div className="bg-navy-900 min-h-screen text-gray-100 px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Contact</h1>

      {submitted ? (
        <p className="text-green-400 text-sm">Thanks! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 rounded bg-black/30 border border-gray-700 text-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 rounded bg-black/30 border border-gray-700 text-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Phone (optional)</label>
            <input
              type="tel"
              name="phone"
              className="w-full px-3 py-2 rounded bg-black/30 border border-gray-700 text-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-3 py-2 rounded bg-black/30 border border-gray-700 text-gray-100"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary px-4 py-2 rounded text-sm"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}

      <div className="mt-10 text-base text-gray-300">
        <span className="font-medium">Connect on{' '}</span>
        <a
            href="https://www.linkedin.com/in/garrison-underwood-b0272632a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline text-lg font-semibold"
        >
            LinkedIn
        </a>.
        </div>
    </div>
  );
}



// import React from 'react';

// export default function ContactPage() {
//   return (
//     <div className="bg-navy-900 min-h-screen text-gray-100 px-6 py-12 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-semibold mb-4">Contact</h1>
//       <p className="text-gray-300 text-sm">
//         Feel free to reach out via email at{' '}
//         <a href="mailto:garrison@example.com" className="text-light-gold hover:underline">
//           garrison@example.com
//         </a>{' '}
//         or connect on LinkedIn.
//       </p>
//       <div className="mt-4">
//         <a
//           href="https://www.linkedin.com/in/garrison-underwood"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-400 hover:underline text-sm"
//         >
//           linkedin.com/in/garrison-underwood
//         </a>
//       </div>
//     </div>
//   );
// }


///// Formspace
// import React, { useState } from 'react';

// export default function ContactPage() {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);

//     const response = await fetch('https://formspree.io/f/xnnoevgn', {
//       method: 'POST',
//       body: formData,
//       headers: {
//         Accept: 'application/json',
//       },
//     });

//     setLoading(false);

//     if (response.ok) {
//       setSubmitted(true);
//     } else {
//       alert('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="bg-navy-900 min-h-screen text-gray-100 px-6 py-12 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-semibold mb-4">Contact</h1>

//       {submitted ? (
//         <p className="text-green-400 text-sm">Thanks! Your message has been sent.</p>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm mb-1">Name</label>
//             <input
//               type="text"
//               name="name"
//               required
//               className="w-full px-3 py-2 rounded bg-black/30 border border-gray-700 text-gray-100"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               required
//               className="w-full px-3 py-2 rounded bg-black/30 border border-gray-700 text-gray-100"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Phone (optional)</label>
//             <input
//               type="tel"
//               name="phone"
//               className="w-full px-3 py-2 rounded bg-black/30 border border-gray-700 text-gray-100"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Message</label>
//             <textarea
//               name="message"
//               rows="5"
//               required
//               className="w-full px-3 py-2 rounded bg-black/30 border border-gray-700 text-gray-100"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="btn-primary px-4 py-2 rounded text-sm"
//           >
//             {loading ? 'Sending...' : 'Send Message'}
//           </button>
//         </form>
//       )}

//       <div className="mt-10 text-sm text-gray-300">
//         Or reach out directly at{' '}
//         <a href="mailto:garrison@example.com" className="text-light-gold hover:underline">
//           garrison@example.com
//         </a>{' '}
//         or connect on{' '}
//         <a
//           href="https://www.linkedin.com/in/garrison-underwood"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-400 hover:underline"
//         >
//           LinkedIn
//         </a>.
//       </div>
//     </div>
//   );
// }