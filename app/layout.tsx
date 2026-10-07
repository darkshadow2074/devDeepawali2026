import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import { siteConfig } from '@/data/site-config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  authors: [{ name: siteConfig.business.name }],
  creator: siteConfig.business.name,
  metadataBase: new URL('https://example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.business.name,
    images: [
      {
        url: siteConfig.business.ogImage,
        width: 1200,
        height: 630,
        alt: 'Dev Deepawali Boat Booking Varanasi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.business.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Dev Deepawali Boat Booking Varanasi',
  description: siteConfig.seo.description,
  image: siteConfig.business.ogImage,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Varanasi',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  offers: {
    '@type': 'Offer',
    name: 'Dev Deepawali Boat Experience',
    description: 'Shared and private boat bookings for Dev Deepawali in Varanasi',
    availability: 'https://schema.org/PreOrder',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
