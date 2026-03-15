"use client";
import { useRouter, usePathname } from 'next/navigation';

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLang = (lang: string) => {
    // Til o'zgarganda URL ham o'zgaradi: /uz -> /ru
    router.push(`/${lang}${pathname.substring(3)}`);
  };

  return (
    <div className="flex gap-2 font-bold text-sm">
      <button onClick={() => changeLang('uz')} className="hover:text-blue-600">UZ</button>
      <span className="text-gray-300">|</span>
      <button onClick={() => changeLang('ru')} className="hover:text-blue-600">RU</button>
      <span className="text-gray-300">|</span>
      <button onClick={() => changeLang('en')} className="hover:text-blue-600">EN</button>
    </div>
  );
}