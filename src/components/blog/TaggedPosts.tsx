'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Post } from '@/utils/posts';

function getAllTags(posts: Post[]): string[] {
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

interface TaggedPostsProps {
  posts: Post[];
}

export default function TaggedPosts({ posts }: TaggedPostsProps) {
  const allTags = getAllTags(posts);
  const [selectedTag, setSelectedTag] = useState<string>('');

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags?.includes(selectedTag))
    : posts;

  return (
    <div>
      {/* Tags Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag('')}
            className={`px-3 py-1 rounded-full text-sm ${
              !selectedTag
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            全部 / All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <ul className="space-y-8">
        {filteredPosts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link
              href={`/blog/${post.slug}`}
              className="text-xl font-semibold hover:underline text-blue-600"
            >
              {post.title}
            </Link>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <div className="flex items-center gap-4 mt-2">
              <p className="text-gray-500 text-sm">{post.date}</p>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className="text-sm text-gray-500 hover:text-blue-600"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
