import { Input } from '@/components/ui/input';
import { api } from '@/server/api';
import Image from 'next/image';

export default async function Profile() {
  return (
    <div className="flex flex-col gap-16 mt-20">
      <p className="text-xl">Профиль</p>
      <div className="flex justify-between gap-24">
        <div className="flex flex-col gap-6 flex-1">
          <input
            type="text"
            placeholder="Имя Фамилия"
            className="w-full border-b text-sm border-[#3F3F3F] bg-mydarkgray pb-1 pl-1 focus:outline-none focus:border-[#107EFF]"
          />
          <input
            type="email"
            placeholder="Введите почту"
            className="w-full border-b text-sm border-[#3F3F3F] bg-mydarkgray pb-1 pl-1 focus:outline-none focus:border-[#107EFF]"
          />
          <input
            type="password"
            placeholder="Новый пароль"
            className="w-full border-b text-sm border-[#3F3F3F] bg-mydarkgray pb-1 pl-1 focus:outline-none focus:border-[#107EFF]"
          />
          <input
            type="password"
            placeholder="Подтвердите пароль"
            className="w-full border-b text-sm border-[#3F3F3F] bg-mydarkgray pb-1 pl-1 focus:outline-none focus:border-[#107EFF]"
          />

          <button className="bg-[#3137C9] py-2 px-8 text-xs rounded-sm w-fit">
            Сохранить
          </button>
        </div>

        <div className="flex flex-col items-start gap-4">
          <Image src={'/avatar67.svg'} alt="67" width={240} height={240} />
          <a
            href="#"
            className="text-[#107EFF] border-b border-b-[#107EFF] text-sm"
          >
            выбрать аватар
          </a>
        </div>
      </div>
    </div>
  );
}
