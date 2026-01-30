import { api } from '@/server/api';

interface WorkData {
  id: string;
  name: string;
  content: string;
  img: string | null;
  tag1: string | null;
  tag2: string | null;
  tag3: string | null;
  createdAt: Date | null;
  deletedAt: Date | null;
}

export default async function Works() {
  const response = await api.works.get();
  const worksData = response?.data || [];

  return (
    <div className="flex flex-col mt-20 gap-10">
      <p className="text-xl">Мои работы</p>

      {worksData.length === 0 ? (
        <div className="text-center py-10 text-gray-400">Пока нет работ</div>
      ) : (
        <div className="space-y-8">
          {worksData.map((work: WorkData) => (
            <div
              key={work.id}
              className="flex justify-between bg-[#202020] h-138 rounded-2xl overflow-hidden"
            >
              <div className="w-120 overflow-hidden">
                <img
                  src={work.img || '/default-work.svg'}
                  alt={work.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="px-8 py-8 flex-1 relative flex flex-col">
                <div className="flex flex-col gap-7">
                  <h2 className="text-2xl font-medium">{work.name}</h2>
                  <p className="font-light text-[#D2D2D2] pr-4">
                    {work.content}
                  </p>

                  <div className="flex gap-2 text-xs">
                    {work.tag1 && (
                      <p className="bg-[#EA8C1E] rounded-xs py-1 px-2">
                        {work.tag1}
                      </p>
                    )}
                    {work.tag2 && (
                      <p className="bg-[#EA8C1E] rounded-xs py-1 px-2">
                        {work.tag2}
                      </p>
                    )}
                    {work.tag3 && (
                      <p className="bg-[#EA8C1E] rounded-xs py-1 px-2">
                        {work.tag3}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-auto pt-6 flex justify-end">
                  <button className="bg-[#3137C9] rounded-sm py-2 px-6 text-xs hover:bg-[#2a2fb0] transition-colors">
                    Перейти на сайт
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
