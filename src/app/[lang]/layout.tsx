// layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Chiller va Sanoat Sovutish Tizimlari Toshkentda | New Style',
  description: 'O‘zbekiston bo‘ylab professional chiller o‘rnatish, ta’mirlash va servis xizmati. Hamyonbop narxlar va 15 yillik tajriba. Hoziroq bog‘laning!',
  keywords: 'chiller o\'rnatish Toshkent, sanoat sovutish tizimlari, chiller narxi Uzbekistan, fankoyl o\'rnatish, issiqlik nasosi narxi, chiller remont, industrial cooling Tashkent',
  alternates: {
    canonical: '/',
    languages: {
      'uz-UZ': '/uz',
      'ru-RU': '/ru',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'Chiller va Sanoat Sovutish Tizimlari | New Style',
    description: 'Toshkentda chiller va ventilyatsiya tizimlarini loyihalash va o\'rnatish.',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'New Style Chiller Uzbekistan',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang || "uz"}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}