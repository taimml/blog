import { api } from '@/server/api';
import Link from 'next/link';

interface PageProps {
  searchParams: Promise<{
    theme?: string;
  }>;
}

export default async function PostsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const selectedTheme = params.theme || '';

  const response = await api.posts.get();
  const allPosts = response?.data || [];

  const posts = selectedTheme
    ? allPosts.filter(
        (post) => post.theme.toLowerCase() === selectedTheme.toLowerCase(),
      )
    : allPosts;

  return (
    <div className="mx-12 mt-20">
      {selectedTheme && (
        <p className="text-[21px] mb-8">
          Резултаты поиска: "<span className="">{selectedTheme}</span>"
        </p>
      )}
      <div className="grid grid-cols-1 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col gap-4 bg-[#202020] px-6 py-6 rounded-2xl"
          >
            <h2 className="text-lg font-medium text-[#ffffff]">{post.name}</h2>
            <p className="text-mylightgray text-sm">
              {post.contentBeforeImg?.substring(0, 200) || ''}...
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 text-xs text-[#828282]">
                <span>
                  {post.createdAt
                    ? new Date(post.createdAt).toLocaleDateString()
                    : ''}
                </span>
                <img src="/Ellipse 3.svg" alt="3" />
                <span>{post.theme}</span>
              </div>

              <Link
                href={`/posts/${post.id}`}
                className=" text-[#107EFF] text-xs hover:underline"
              >
                перейти
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
