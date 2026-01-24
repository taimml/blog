'use client';

import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between items-center px-6 py-4 w-full bg-[#0D0D0D] text-[11px]">
            <div className="flex gap-10">
                <a href="/">ГЛАВНАЯ</a>
                <a href="#">СТАТЬИ</a>
                <a href="#">ОБО МНЕ</a>
                <a href="#">РЕКЛАМА</a>
            </div>
            <div className="flex items-center gap-8">
                <a href="#">ПРОФИЛЬ</a>
                <Input></Input>
            </div>
        </header>
    )
}