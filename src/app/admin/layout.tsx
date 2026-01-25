import { LogOut, Menu } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/server/auth/auth";
import { Toaster } from "sonner";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default async function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (session?.user.role !== "admin") {
		redirect("/auth/sign-in");
	}

	return (
		<main className="flex min-h-screen bg-white ">
			<div className="hidden lg:block w-64 bg-black text-white p-6 border-r">
				<h1 className="text-xl font-bold mb-8">Админка</h1>
				<div className="flex flex-col gap-2">
					<Link href="/admin" className="p-3">
						Главная
					</Link>
					<Link href="/admin/comments" className="p-3">
						Комментарии
					</Link>
					<Link href="/admin/feedback" className="p-3">
						Формы
					</Link>
					<Link href="/admin/posts" className="p-3">
						Посты
					</Link>
				</div>
				<div className="mt-8">
					<Link href="/" className="flex items-center gap-2 p-3">
						<LogOut size={18} /> На сайт
					</Link>
				</div>
			</div>

			<div className="flex-1 flex flex-col">
				<div className="lg:hidden bg-black text-white p-4 flex justify-between items-center border-b">
					<h1 className="text-xl font-bold">Админка</h1>

					<Sheet>
						<SheetTrigger>
							<Menu size={24} />
						</SheetTrigger>
						<SheetContent side="left" className="bg-black text-white w-64 p-0">
							<div className="p-6">
								<h1 className="text-xl font-bold mb-8">Админка</h1>
								<div className="flex flex-col gap-2">
									<Link href="/admin" className="p-3">
										Главная
									</Link>
									<Link href="/admin/comments" className="p-3">
										Комментарии
									</Link>
									<Link href="/admin/feedback" className="p-3">
										Формы
									</Link>
									<Link href="/admin/posts" className="p-3">
										Посты
									</Link>
								</div>
								<div className="mt-8">
									<Link href="/" className="flex items-center gap-2 p-3">
										<LogOut size={18} /> На сайт
									</Link>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>

				<div className="flex-1 p-4 lg:p-6 container mx-auto">
					{children}
					<Toaster />
				</div>
			</div>
		</main>
	);
}
