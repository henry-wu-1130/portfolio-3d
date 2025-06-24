import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

function getPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDir);
  return files
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(postsDir, file);
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'));
      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        description: data.description || '',
        draft: data.draft === true,
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export default function BlogPage() {
  const posts = getPosts();
  return (
    <main className="max-w-2xl mx-auto py-10 px-4 mt-20">
      <div className="mb-6">
        <Link href="/" className="text-blue-600 hover:underline">
          ← 回到首頁 / Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl font-semibold hover:underline text-blue-600"
            >
              {post.title}
            </Link>
            <div className="text-gray-500 text-sm mt-1">{post.date}</div>
            <p className="mt-2 text-gray-700">{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
