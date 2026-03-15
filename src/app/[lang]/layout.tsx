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

export const metadata = {
  title: 'Chiller Uzbekistan | Sanoat sovutish tizimlari narxlari',
  description: 'O‘zbekistonda chiller sotish va o‘rnatish. 15 yillik tajriba. Eng arzon chiller narxlari va sifatli servis.',
  keywords: 'chiller uzbekistan, chiller toshkent, sovutish tizimi, chiller narxi, chiller remont',
}

// RootLayout async bo'lishi shart
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {

  const resolvedParams = await params;
  const lang = resolvedParams.lang || "uz";

  return (
    <html lang={lang}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FDFDFD]`}>
        {children}
      </body>
    </html>
  );
}