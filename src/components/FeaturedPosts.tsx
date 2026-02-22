import { getPosts } from '@/utils/posts';
import TaggedPosts from './blog/TaggedPosts';

export default async function FeaturedPosts() {
  const posts = await getPosts();
  return <TaggedPosts posts={posts.slice(0, 4)} />;
}
