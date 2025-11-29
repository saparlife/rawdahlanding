import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rawdah - Learn 99 Names of Allah",
  description: "A beautiful app for learning and memorizing the 99 Names of Allah (Asmaul Husna) with audio pronunciation, quizzes, and progress tracking",
  keywords: ["99 names of Allah", "Asmaul Husna", "Islamic app", "learn Arabic", "Rawdah"],
  openGraph: {
    title: "Rawdah - Learn 99 Names of Allah",
    description: "A beautiful app for learning and memorizing the 99 Names of Allah",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
