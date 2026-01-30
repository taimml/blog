import { api } from '@/server/api';
import PostsList from './components/posts-list';

export default async function Home() {
  const response = await api.posts.get();
  const posts = response?.data || [];

  return (
    <div className="mx-12 mt-20">
      <div>
        {posts.length === 0 ? (
          <p className="text-gray-400 text-center py-8">Пока нет статей</p>
        ) : (
          <PostsList posts={posts} />
        )}
      </div>
    </div>
  );
}