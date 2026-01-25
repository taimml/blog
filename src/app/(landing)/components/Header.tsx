'use client';

import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Header() {
  const [isArticlesOpen, setIsArticlesOpen] = useState(false);

  return (
    <header className="flex justify-between items-center w-full bg-[#0D0D0D] text-xs shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <div className="flex gap-5 pl-6 relative">
        <a href="/" className="py-4">
          ГЛАВНАЯ
        </a>
        <div className="relative">
          <button
            onClick={() => setIsArticlesOpen(!isArticlesOpen)}
            className="flex gap-4 py-4 relative z-10 px-4"
          >
            <p>СТАТЬИ</p>
            <img src="Polygon.svg" alt="polygon" />
          </button>

          {isArticlesOpen && (
            <div className="absolute top-0 left-0 right-0 h-full bg-[#3137C9]" />
          )}

          {isArticlesOpen && (
            <div className="absolute flex flex-col bg-[#3137C9] rounded-b-md shadow-lg  min-w-45 py-4 px-4 text-xs gap-2">
              <a href="#">Создание сайтов</a>
              <a href="#">Интернет маркетинг</a>
              <a href="#">Продвижение видео</a>
            </div>
          )}
        </div>

        <a href="#" className="py-4">
          ОБО МНЕ
        </a>
        <a href="#" className="py-4">
          РЕКЛАМА
        </a>
      </div>

      <div className="flex items-center gap-8">
        <a href="#" className="py-4">
          ПРОФИЛЬ
        </a>
        <Input
          placeholder="Поиск по блогу"
          className="bg-[#202020] py-6 border-none rounded-none w-60"
        />
      </div>
    </header>
  );
}
