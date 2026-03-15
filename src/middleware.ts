import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

let locales = ['uz', 'ru', 'en'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Agar URL'da til bo'lsa (masalan /uz), indamaymiz
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Agar til bo'lmasa, default 'uz' ga yo'naltiramiz
  const locale = 'uz';
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Bu matcher barcha static fayllarni (rasm, icon, logo) middleware-dan mustasno qiladi
  matcher: [
    // Barcha ichki yo'llarni (api, _next) va static fayllarni (jpg, png, svg) o'tkazib yuborish
    '/((?!api|_next/static|_next/image|assets|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};