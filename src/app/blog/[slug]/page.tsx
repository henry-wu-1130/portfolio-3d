import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';
import { notFound } from 'next/navigation';

interface PostProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: PostProps) {
  const { slug } = params;
  const postPath = path.join(process.cwd(), 'posts', `${slug}.md`);
  if (!fs.existsSync(postPath)) return notFound();
  const file = fs.readFileSync(postPath, 'utf8');
  const { content, data } = matter(file);

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <div className="text-gray-500 text-sm mb-6">{data.date}</div>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{content}</ReactMarkdown>
      <div className="mt-8">
        <a href="/blog" className="text-blue-600 hover:underline">← Back to Blog</a>
      </div>
    </main>
  );
}
