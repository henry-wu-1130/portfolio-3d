'use server';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  draft: boolean;
  tags: string[];
}

export async function getPosts(): Promise<Post[]> {
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
        tags: data.tags || [],
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}
