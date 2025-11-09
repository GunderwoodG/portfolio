import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { loadPosts } from "../utils/loadPosts";
import { Helmet } from "react-helmet";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    loadPosts().then((posts) => {
      const found = posts.find((p) => p.slug === slug);
      setPost(found);
    });
  }, [slug]);

  if (!post) {
    return (
      <div className="p-8">
        <p>Loading...</p>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://garrisonunderwoodportfolio.netlify.app/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: "Garrison Underwood"
    },
    keywords: post.tags
  };

  return (
    <div className="p-8">
      <Helmet>
        <title>{post.title} | Garrison's Blog</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={`https://garrisonunderwoodportfolio.netlify.app/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Link to="/blog" className="text-blue-600 hover:underline">
        ← Back to Blog
      </Link>
      <h1 className="text-3xl font-bold mt-4 mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{post.date}</p>

      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
}

///Worked
// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { loadPosts } from "../utils/loadPosts";

// export default function BlogPost() {
//   const { slug } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     loadPosts().then((posts) => {
//       const found = posts.find((p) => p.slug === slug);
//       setPost(found);
//     });
//   }, [slug]);

//   if (!post) {
//     return (
//       <div className="p-8">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8">
//       <Link to="/blog" className="text-blue-600 hover:underline">
//         ← Back to Blog
//       </Link>
//       <h1 className="text-3xl font-bold mt-4 mb-2">{post.title}</h1>
//       <p className="text-gray-500 text-sm mb-6">{post.date}</p>

//       {/* This is where your Markdown-rendered HTML goes */}
//       <div
//         className="markdown"
//         dangerouslySetInnerHTML={{ __html: post.html }}
//       />
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { loadPosts } from "../utils/loadPosts";

// export default function BlogPost() {
//   const { slug } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     loadPosts().then((posts) => {
//       const found = posts.find((p) => p.slug === slug);
//       setPost(found);
//     });
//   }, [slug]);

//   if (!post) {
//     return (
//       <div className="p-8">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8">
//       <Link to="/blog" className="text-blue-600 hover:underline">
//         ← Back to Blog
//       </Link>
//       <h1 className="text-3xl font-bold mt-4 mb-2">{post.title}</h1>
//       <p className="text-gray-500 text-sm mb-6">{post.date}</p>
//       <div
//         className="prose max-w-none"
//         dangerouslySetInnerHTML={{ __html: post.html }}
//       />
//     </div>
//   );
// }



