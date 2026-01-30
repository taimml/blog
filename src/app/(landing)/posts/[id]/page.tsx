import { api } from '@/server/api';
import Link from 'next/link';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostPage({ params }: PageProps) {
  const { id } = await params;

  const response = await fetch(`http://localhost:3000/api/posts/${id}`);
  const post = await response.json();

  const postData = Array.isArray(post) ? post[0] : post;

  return (
    <div>
      <div className="bg-[#202020] rounded-lg mx-12 mt-20 px-6 py-4">
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-xs text-[#828282]">
              <Link href="/posts" className="hover:text-white">
                вернуться назад
              </Link>
              <div className="flex gap-2">
                <button>поделиться</button>
                <img src="/share.svg" alt="share" />
              </div>
            </div>
            <div>
              <p className="text-lg font-medium">{postData?.name}</p>
              <div className="text-[#828282] text-xs flex gap-3">
                <p>
                  {postData?.createdAt
                    ? new Date(postData.createdAt).toLocaleDateString()
                    : '21.06.2020'}
                </p>
                <img src="/Ellipse 3.svg" alt="3" />
                <p>{postData?.theme}</p>
              </div>
            </div>
          </div>
          <p className="text-sm mt-10">{postData?.contentBeforeImg}</p>

          <img src={postData?.img} alt="image" className="w-full my-6" />
          
          <p className="text-sm">{postData?.contentAfterImg}</p>
        </div>
        <div>
          <div className="border-b border-[#1C1C1C] w-full my-7" />
          <div className="flex flex-col gap-6">
            <p className="font-medium">Интересно почитать</p>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div>
                <p className="text-[#F3EBA2] font-medium text-sm">
                  Как я сходил на FrontEnd Conf 2021
                </p>
                <p className="text-[#828282] text-xs">21.06.2020</p>
              </div>
              <div>
                <p className="text-[#F3EBA2] font-medium text-sm">
                  Как писать код быстро и ...
                </p>
                <p className="text-[#828282] text-xs">21.06.2020</p>
              </div>
              <div>
                <p className="text-[#F3EBA2] font-medium text-sm">
                  Купил новый ноутбук за 150 000 руб
                </p>
                <p className="text-[#828282] text-xs">21.06.2020</p>
              </div>
              <div>
                <p className="text-[#F3EBA2] font-medium text-sm">
                  Купил новый ноутбук за 150 000 руб
                </p>
                <p className="text-[#828282] text-xs">21.06.2020</p>
              </div>
            </div>
          </div>
          <div className="border-b border-[#1C1C1C] w-full my-7" />
        </div>
        <div>
          <div>
            <p className="font-medium mb-6">Обсуждение</p>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Текст комментария"
                className="text-[#3F3F3F] text-sm border-b border-b-[#3F3F3F]"
              />
              <button className="bg-[#3137C9] rounded-sm px-6 py-2 text-xs mt-4">
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
