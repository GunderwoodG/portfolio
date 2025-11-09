import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';
import DetailPage from './components/DetailPage'; // new detail view
import data from './data/portfolioData';
import vtlogo from './assets/vt.webp';
import ContactPage from './components/ContactPage';
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

export default function App() {
  return (
    <div className="bg-navy-900 min-h-screen text-gray-100 font-sans">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                {/* Landing Section */}
                <section id="landing" className="pt-20">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Garrison Underwood</h1>
                      <p className="mt-2 text-lg text-gray-300">
                        Junior at Virginia Tech (Graduating One Year Early)<br />
                        Double Major: Electrical Engineering (Controls, Robotics, Autonomy) & Computer Engineering (Machine Learning)<br />
                        Minor: Physics, Computer Science, Mathematics<br />
                        GPA: 3.88 <br />
                      </p>
                      <p className="mt-6 text-sm text-gray-300 italic">
                        Welcome — this portfolio documents academic achievements, projects, and extracurricular activities. <br />
                        "Two men looked out from prison bars - one saw mud, the other saw stars" - Dale Carnegie.
                      </p>
                      <div className="mt-6 flex gap-4">
                        <a href="#academic" className="inline-block btn-primary">Academics</a>
                        <a href="#extracurricular" className="inline-block btn-outline">Extracurricular</a>
                      </div>
                    </div>
                    <div className="mx-auto w-44 h-44 rounded-xl bg-gradient-to-br from-deep-blue to-navy-900 flex items-center justify-center shadow-lg border border-gray-800">
                      <img
                        src={vtlogo}
                        alt="vt logo"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </section>

                {/* Dynamic Sections */}
                <Section id="academic" title="Academic" items={data.academic} />
                <Section id="academic_projects" title="Academic Projects" items={data.academic_projects} />
                <Section id="notable_courses" title="Notable Courses" items={data.notable_courses} />
                <Section id="extracurricular" title="Extracurricular" items={data.extracurricular} />
                <Section id="athletics" title="Athletics" items={data.athletics} />
                <Section id="skills" title="Notable Skills & Activities" items={data.skills} />
                <Section id="personal_projects" title="Personal Projects" items={data.personal_projects} />

                <Footer />
              </>
            }
          />

          {/* Detail Page Route */}
          <Route path="/detail/:section/:index" element={<DetailPage />} />

          {/* existing routes */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Blog Routes */} 

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />


        </Routes>
      </main>
    </div>
  );
}

// import React from 'react'
// import Navbar from './components/Navbar'
// import Section from './components/Section'
// import Footer from './components/Footer'
// import data from './data/portfolioData'
// import vtlogo from './assets/vt.webp'

// export default function App() {
//   return (
//     <div className="bg-navy-900 min-h-screen text-gray-100 font-sans">
//       <Navbar />
//       <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
//         {/* Landing */}
//         <section id="landing" className="pt-20">
//           <div className="grid md:grid-cols-3 gap-8 items-center">
//             <div className="md:col-span-2">
//               <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Garrison Underwood</h1>
//               <p className="mt-2 text-lg text-gray-300">
//                 Junior at Virginia Tech (Graduating One Year Early)<br />
//                 Double Major: Electrical Engineering (Controls, Robotics, Autonomy) & Computer Engineering (Machine Learning)<br />
//                 Minor: Computer Science<br />
//                 GPA: 3.88 <br />
//               </p>

//               <p className="mt-6 text-sm text-gray-300 italic">Welcome — this portfolio documents academic achievements, projects, and extracurricular activities. "Two men looked out from prison bars - one saw mud, the other saw stars" - Dale Carnegie.</p>
//               <div className="mt-6 flex gap-4">
//                 <a href="#academic" className="inline-block btn-primary">Academics</a>
//                 <a href="#extracurricular" className="inline-block btn-outline">Extracurricular</a>
//               </div>
//             </div>
//             <div className="mx-auto w-44 h-44 rounded-xl bg-gradient-to-br from-deep-blue to-navy-900 flex items-center justify-center shadow-lg border border-gray-800">
//               <img
//               src={vtlogo}
//               alt="vt logo"
//               className="w-full h-full object-cover rounded-xl"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Dynamic sections from data */}
//         <Section id="academic" title="Academic" items={data.academic} />
//         <Section id="academic_projects" title="Academic Projects" items={data.academic_projects} />
//         <Section id="notable_courses" title="Notable Courses" items={data.notable_courses} />
//         <Section id="extracurricular" title="Extracurricular" items={data.extracurricular} />
//         <Section id="athletics" title="Athletics" items={data.athletics} />
//         <Section id="skills" title="Notable Skills & Activities" items={data.skills} />
//         <Section id="personal_projects" title="Personal Projects" items={data.personal_projects} />

//         <Footer />
//       </main>
//     </div>
//   )
// }
