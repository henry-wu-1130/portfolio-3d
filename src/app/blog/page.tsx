import Link from 'next/link';
import TaggedPosts from '@/components/blog/TaggedPosts';
import { getPosts } from '@/utils/posts';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <div className="mb-6">
        <Link href="/" className="text-blue-600 hover:underline">
          ← 回到首頁 / Back to Home
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <TaggedPosts posts={posts} />
    </main>
  );
}
