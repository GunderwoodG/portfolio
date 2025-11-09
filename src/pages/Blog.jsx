import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loadPosts } from "../utils/loadPosts";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts().then(setPosts);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.slug}>
            <Link
              to={`/blog/${post.slug}`}
              className="text-2xl text-blue-600 hover:underline font-semibold"
            >
              {post.title}
            </Link>
            <p className="text-gray-500 text-sm">{post.date}</p>
            <p className="text-gray-700 mt-2">
              {post.description || post.html.slice(0, 120) + "..."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}




// import React, { useEffect, useState } from 'react';
// import { loadPosts } from '../utils/loadPosts';

// export default function Blog() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     loadPosts().then(setPosts);
//   }, []);

//   return (
//     <div className="p-8">
//       <h1 className="text-4xl font-bold mb-6">Blog</h1>
//       {posts.map(post => (
//         <div key={post.slug} className="mb-10">
//           <h2 className="text-2xl font-semibold">{post.title}</h2>
//           <p className="text-gray-500 mb-4">{post.date}</p>
//           <div dangerouslySetInnerHTML={{ __html: post.html }} />
//         </div>
//       ))}
//     </div>
//   );
// }
