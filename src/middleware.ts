import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

let locales = ['uz', 'ru', 'en'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Agar pathname ichida til kodi bo'lsa (uz/ru/en), middleware-ni to'xtatish
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // 2. Agar til kodi bo'lmasa, uni /uz ga redirect qilish
  const locale = 'uz';
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    /*
     * Quyidagi manzillar uchun middleware ISHLAMAYDI (istisno qilingan):
     * 1. api (API yo'nalishlari)
     * 2. _next/static (statik fayllar)
     * 3. _next/image (rasmlarni optimallashtirish)
     * 4. sitemap.xml va robots.txt (SEO fayllari)
     * 5. favicon.ico, assets va barcha rasm formatlari
     */
    '/((?!api|_next/static|_next/image|sitemap.xml|robots.txt|assets|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};