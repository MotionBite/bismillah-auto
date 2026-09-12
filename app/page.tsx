import { Metadata } from 'next';
import { siteConfig, seoKeywords, productData } from '../public/data';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: `${seoKeywords.primary} | ${siteConfig.name}`,
  description: `চাঁপাইনবাবগঞ্জের সেরা Motolock GPS tracker সেবা। Real-time tracking, engine lock, anti-theft protection। Free installation এবং ১ বছর warranty। Call ${siteConfig.phone}`,
  keywords: [
    seoKeywords.primary,
    'GPS tracker Chapainawabganj',
    'MotoLock GPS Bangladesh',
    'বাইক GPS ট্র্যাকার চাঁপাইনবাবগঞ্জ',
    'motorcycle security system',
    'real time bike tracking',
    'engine lock GPS device',
    'anti theft motorcycle tracker',
    'GPS installation Chapainawabganj',
    'Bismillah Auto GPS service'
  ],
  openGraph: {
    title: `${seoKeywords.primary} | ${siteConfig.name}`,
    description: `চাঁপাইনবাবগঞ্জের সেরা Motolock GPS tracker সেবা। Real-time tracking, engine lock, free installation।`,
    url: 'https://bismillah-auto.netlify.app',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Motolock GPS Tracker in Chapainawabganj - Bismillah Auto',
      },
    ],
  },
  alternates: {
    canonical: 'https://bismillah-auto.netlify.app',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: `${seoKeywords.primary} | ${siteConfig.name}`,
  description: metadata.description,
  url: 'https://bismillah-auto.netlify.app',
  mainEntity: {
    '@type': 'Product',
    name: productData.motolock.name,
    brand: productData.motolock.brand,
    sku: productData.motolock.sku,
    description: productData.motolock.description,
    offers: {
      '@type': 'Offer',
      price: productData.motolock.price,
      priceCurrency: productData.motolock.currency,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: siteConfig.name,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <Stats />
        </main>
        <Footer />
      </div>
    </>
  );
}