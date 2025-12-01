import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/components/ThemeProvider';
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const siteUrl = "https://rawdah.top";
const siteName = "Rawdah";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const isRussian = locale === 'ru';

  const title = isRussian
    ? "Rawdah - Изучение 99 имён Аллаха | Асмауль Хусна"
    : "Rawdah - Learn 99 Names of Allah | Asmaul Husna";

  const description = isRussian
    ? "Изучайте и запоминайте 99 имён Аллаха (Асмауль Хусна) с аудио произношением, интерактивными тестами, отслеживанием прогресса и геймификацией. Бесплатно."
    : "Learn and memorize the 99 Names of Allah (Asmaul Husna) with audio pronunciation, interactive quizzes, progress tracking, and gamification. Free.";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s | Rawdah"
    },
    description,
    keywords: isRussian ? [
      "99 имён Аллаха",
      "Асмауль Хусна",
      "имена Аллаха",
      "исламское приложение",
      "изучение ислама",
      "мусульманское приложение",
      "Rawdah",
      "99 names of Allah",
      "Asmaul Husna"
    ] : [
      "99 names of Allah",
      "Asmaul Husna",
      "Islamic app",
      "learn Arabic",
      "Rawdah",
      "Muslim app",
      "Quran",
      "Islamic education",
      "Allah names"
    ],
    authors: [{ name: "Rawdah Team" }],
    creator: "Rawdah",
    publisher: "Rawdah",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: "website",
      locale: isRussian ? "ru_RU" : "en_US",
      alternateLocale: isRussian ? ["en_US"] : ["ru_RU"],
      url: isRussian ? siteUrl : `${siteUrl}/en`,
      siteName: siteName,
      title: isRussian ? "Rawdah - Изучение 99 имён Аллаха" : "Rawdah - Learn 99 Names of Allah",
      description,
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: isRussian ? "Rawdah - 99 имён Аллаха" : "Rawdah - 99 Names of Allah App",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isRussian ? "Rawdah - Изучение 99 имён Аллаха" : "Rawdah - Learn 99 Names of Allah",
      description,
      images: [`${siteUrl}/og-image.png`],
      creator: "@rawdah_app",
    },
    alternates: {
      canonical: isRussian ? siteUrl : `${siteUrl}/en`,
      languages: {
        'ru': siteUrl,
        'en': `${siteUrl}/en`,
      },
    },
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: siteName,
    },
    formatDetection: {
      telephone: false,
    },
    category: "education",
    classification: "Islamic Education App",
    other: {
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "theme-color": "#10b981",
      "msapplication-TileColor": "#10b981",
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  // JSON-LD structured data
  const isRussian = locale === 'ru';
  const description = isRussian
    ? "Изучайте и запоминайте 99 имён Аллаха (Асмауль Хусна) с аудио произношением, интерактивными тестами и геймификацией."
    : "Learn and memorize the 99 Names of Allah (Asmaul Husna) with audio pronunciation, interactive quizzes, and gamification.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description,
        inLanguage: ["ru", "en"],
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
        },
      },
      {
        "@type": "MobileApplication",
        "@id": `${siteUrl}/#app`,
        name: isRussian ? "Rawdah - 99 имён Аллаха" : "Rawdah - 99 Names of Allah",
        description,
        applicationCategory: "EducationalApplication",
        operatingSystem: "iOS, Android, Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "500",
          bestRating: "5",
          worstRating: "1",
        },
        downloadUrl: "https://apps.apple.com/ru/app/rawdah-99-%D0%B8%D0%BC%D0%B5%D0%BD-%D0%B0%D0%BB%D0%BB%D0%B0%D1%85%D0%B0/id1626704913",
        installUrl: "https://rawdah-app.web.app/",
        screenshot: `${siteUrl}/og-image.png`,
        softwareVersion: "2.0.0",
        author: {
          "@type": "Organization",
          name: siteName,
        },
        featureList: isRussian ? [
          "99 имён Аллаха",
          "Аудио произношение",
          "Интерактивные тесты",
          "Отслеживание прогресса",
          "Мультиязычность",
          "Офлайн режим",
          "Тёмная тема",
        ] : [
          "99 Names of Allah",
          "Audio Pronunciation",
          "Interactive Quizzes",
          "Progress Tracking",
          "Multiple Languages",
          "Offline Support",
          "Dark Mode",
        ],
      },
    ],
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
