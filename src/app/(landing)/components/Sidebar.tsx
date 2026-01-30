import Link from 'next/link';
import Image from 'next/image';
import avatar from '/avatar.svg';
import { api } from '@/server/api';

export default async function Sidebar() {
  const response = await api.sidebar.get();
  const sidebarData = response?.data;

  return (
    <div className="hidden lg:flex flex-col bg-[#202020] max-w-75">
      <div className="relative flex flex-col items-center text-center gap-4 pt-25">
        <div className="absolute top-0">
          <img src="/background.svg" alt="bg" />
        </div>

        <div className="relative z-10">
          <img src="/avatar.svg" alt="avatar" className="w-40" />
        </div>

        <div>
          <h1 className="text-lg">{sidebarData?.name ?? ''}</h1>
          <p className="text-mylightgray text-sm font-light">
            {sidebarData?.desc ?? ''}
          </p>
        </div>
        <div className="flex gap-4">
          <img src="/instagram.svg" alt="instagram" />
          <img src="/vk.svg" alt="vk" />
          <img src="/pinterest.svg" alt="pinterest" />
        </div>
      </div>
      <div className="border-b border-[#1C1C1C] w-full my-6" />
      <div className="text-center">
        <p className="text-xs px-7">{sidebarData?.content ?? ''}</p>
      </div>
      <div className="border-b border-[#1C1C1C] w-full my-6" />
      <div className="flex mx-auto gap-5">
        <Link
          href="/works"
          className="py-4 px-7 bg-[#ED3024] rounded-4xl text-xs shadow-[0_4px_15px_rgba(237,48,36,0.3)] hover:bg-red-600 transition-colors"
        >
          Мои работы
        </Link>
        <button className="py-4 px-7 bg-[#3137C9] rounded-4xl text-xs shadow-[0_4px_15px_rgba(49,55,201,0.3)] hover:bg-blue-600 transition-colors">
          Написать мне
        </button>
      </div>
    </div>
  );
}
