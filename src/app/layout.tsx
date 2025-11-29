import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const siteUrl = "https://rawdah.top";
const siteName = "Rawdah";
const siteDescription = "Learn and memorize the 99 Names of Allah (Asmaul Husna) with audio pronunciation, interactive quizzes, progress tracking, and gamification. Available in Kazakh, Russian, English, and Turkish.";
const siteDescriptionRu = "Изучайте и запоминайте 99 имён Аллаха (Асмауль Хусна) с аудио произношением, интерактивными тестами, отслеживанием прогресса и геймификацией. Доступно на казахском, русском, английском и турецком языках.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rawdah - Learn 99 Names of Allah | Асмауль Хусна",
    template: "%s | Rawdah"
  },
  description: siteDescription,
  keywords: [
    "99 names of Allah",
    "Asmaul Husna",
    "99 имён Аллаха",
    "Асмауль Хусна",
    "Islamic app",
    "learn Arabic",
    "Rawdah",
    "Muslim app",
    "Quran",
    "Islamic education",
    "Allah names",
    "имена Аллаха",
    "исламское приложение",
    "изучение ислама",
    "мусульманское приложение"
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
    locale: "ru_RU",
    alternateLocale: ["en_US", "kk_KZ", "tr_TR"],
    url: siteUrl,
    siteName: siteName,
    title: "Rawdah - Learn 99 Names of Allah",
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Rawdah - 99 Names of Allah App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rawdah - Learn 99 Names of Allah",
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
    creator: "@rawdah_app",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'ru': `${siteUrl}`,
      'en': `${siteUrl}`,
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: ["ru", "en", "kk", "tr"],
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
        name: "Rawdah - 99 Names of Allah",
        description: siteDescription,
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
        featureList: [
          "99 Names of Allah",
          "Audio Pronunciation",
          "Interactive Quizzes",
          "Progress Tracking",
          "Multiple Languages",
          "Offline Support",
          "Dark Mode",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Rawdah?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Rawdah is a free educational app for learning and memorizing the 99 Names of Allah (Asmaul Husna) with audio pronunciation, quizzes, and progress tracking.",
            },
          },
          {
            "@type": "Question",
            name: "Is Rawdah free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Rawdah is completely free to use with no ads or in-app purchases.",
            },
          },
          {
            "@type": "Question",
            name: "What languages does Rawdah support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Rawdah supports Kazakh, Russian, English, and Turkish languages.",
            },
          },
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
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a]`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
