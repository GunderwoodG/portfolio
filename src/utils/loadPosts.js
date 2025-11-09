// src/utils/loadPosts.js
import fm from "front-matter";
import { marked } from "marked";

export async function loadPosts() {
  const modules = import.meta.glob("/src/posts/*.md", {
    query: "?raw",
    import: "default",
  });

  const posts = await Promise.all(
    Object.entries(modules).map(async ([filePath, resolver]) => {
      const fileContent = await resolver();
      const { attributes, body } = fm(fileContent);
      const html = marked(body);
      const slug = filePath.split("/").pop().replace(".md", "");
      return { slug, ...attributes, html };
    })
  );

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

