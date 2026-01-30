'use client';

import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const THEMES = [
  'создание сайтов',
  'интернет маркетинг', 
  'продвижение видео'
];

export default function Header() {
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);

  return (
    <header className="flex justify-between items-center w-full bg-[#0D0D0D] text-xs shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <div className="flex gap-5 pl-6 relative">
        <Link href="/" className="py-4">
          ГЛАВНАЯ
        </Link>
        <div className="relative">
          <button
            onClick={() => setIsArticlesOpen(!isArticlesOpen)}
            className="flex gap-4 py-4 relative z-10 px-4"
          >
            <p>СТАТЬИ</p>
            <Image
              src={'/Polygon.svg'}
              alt="polygon"
              width={10}
              height={10}
            />
          </button>

          {isArticlesOpen && (
            <div className="absolute top-0 left-0 right-0 h-full bg-[#3137C9]" />
          )}

          {isArticlesOpen && (
            <div className="absolute flex flex-col bg-[#3137C9] rounded-b-md shadow-lg min-w-45 py-4 px-4 text-xs gap-2 z-20">
              {THEMES.map((theme) => (
                <Link 
                  key={theme}
                  href={`/posts?theme=${encodeURIComponent(theme)}`}
                  className="hover:text-white transition-colors"
                  onClick={() => setIsArticlesOpen(false)}
                >
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/works" className="py-4">
          ОБО МНЕ
        </Link>
        <Link href="/" className="py-4">
          РЕКЛАМА
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <Link href="/profile" className="py-4">
          ПРОФИЛЬ
        </Link>
        <Input
          placeholder="Поиск по блогу"
          className="bg-[#202020] py-6 border-none rounded-none w-60"
        />
      </div>
    </header>
  );
}