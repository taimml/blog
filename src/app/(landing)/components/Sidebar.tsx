import Image from "next/image";
import avatar from "/avatar.svg";
import { api } from "@/server/api";

// interface SidebarData {
//   id: string;
//   name: string;
//   desc: string;
//   content: string;
//   img: string | null;
//   background: string | null;
//   createdAt: Date | null;
//   deletedAt: Date | null;
// }

export default async function Sidebar() {
	const response = await api.sidebar.get();

	console.log("response:", response);
	// console.log('Full response:', response);
	//   console.log('response.data:', response.data);
	//   console.log('response.data?.data:', response.data?.data);

	//   const sidebarData = response.data?.data;

	//   console.log('sidebarData:', sidebarData);
	//   console.log('sidebarData?.name:', sidebarData?.name);

	return (
		<div className="hidden lg:flex flex-col bg-[#202020] max-w-75 h-screen">
			<div className="relative flex flex-col items-center text-center gap-4 pt-25">
				<div className="absolute top-0">
					<img src="/background.svg" alt="bg" />
				</div>

				<div className="relative z-10">
					<img src="/avatar.svg" alt="avatar" className="w-40" />
				</div>

				<div>
					<h1 className="text-lg">Дмитрий Валак</h1>
					<p className="text-mylightgray text-sm font-light">
						блог front-end разработчика
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
				<p className="text-xs px-7">
					Front-end разработчик. Практик верстки сайтов. Созданием сайтов
					занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал
					более 10 000 часов в создании сайтов различной сложности.
				</p>
			</div>
			<div className="border-b border-[#1C1C1C] w-full my-6" />
			<div className="flex mx-auto gap-5">
				<button className="py-4 px-7 bg-[#ED3024] rounded-4xl text-xs shadow-[0_4px_15px_rgba(237,48,36,0.3)]">
					Мои работы
				</button>
				<button className="py-4 px-7 bg-[#3137C9] rounded-4xl text-xs shadow-[0_4px_15px_rgba(49,55,201,0.3)]">
					Написать мне
				</button>
			</div>
		</div>
	);
}
