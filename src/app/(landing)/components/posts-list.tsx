import Link from 'next/link';

interface Post {
  id: string;
  name: string;
  contentBeforeImg: string | null;
  createdAt: string | Date | null;
  theme: string;
  img: string | null;
}

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <div className="grid grid-cols-1 gap-10">
      {posts.map((post) => (
        <div key={post.id} className="bg-[#202020] rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.3)]">
          <img src={post.img || ''} alt="img" className="w-full" />

          <div className="p-6 flex flex-col gap-4">
            <h3 className="text-lg font-medium">{post.name}</h3>

            <p className="text-sm text-mylightgray">
              {post.contentBeforeImg?.substring(0, 300) || ''}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-xs text-[#828282]">
                <span>
                  {post.createdAt
                    ? new Date(post.createdAt).toLocaleDateString()
                    : 'Дата не указана'}
                </span>
                <span>•</span>
                <span>{post.theme}</span>
              </div>

              <Link
                href={`/posts/${post.id}`}
                className="text-[#107EFF] text-sm hover:underline"
              >
                читать
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
