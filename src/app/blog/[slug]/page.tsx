import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import _get from 'lodash/get';

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
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mt-8 mb-4">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>
          ),
          p: ({ children }) => (
            <p className="text-gray-800 leading-relaxed mb-4">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="text-gray-800">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">
              {children}
            </blockquote>
          ),
          code: ({ children, ...props }) => {
            const isInline =
              _get(props, 'node.tagName') === 'code' &&
              _get(props, 'node.position.start.line') ===
                _get(props, 'node.position.end.line');

            return isInline ? (
              <code className="bg-gray-100 rounded px-1 py-0.5">
                {children}
              </code>
            ) : (
              <code className="block bg-gray-100 rounded p-4 mb-4 overflow-x-auto">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
      <div className="mt-8">
        <Link href="/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    </main>
  );
}
