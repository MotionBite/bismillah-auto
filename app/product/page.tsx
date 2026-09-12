import { Metadata } from 'next';
import prisma from '../../lib/prisma';
import { siteConfig, productData } from '../../public/data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductGallery from '../components/ProductGallery';
import ProductSpecs from '../components/ProductSpecs';
import ProductFAQ from '../components/ProductFAQ';
import PurchasePanel from '../components/PurchasePanel';

export const dynamic = 'force-dynamic';

const product = productData.motolock;

export const metadata: Metadata = {
  title: `${product.name} - Best GPS Tracker in Chapainawabganj | ${siteConfig.name}`,
  description: `${product.name} - চাঁপাইনবাবগঞ্জের সেরা GPS tracker। Real-time tracking, engine lock, IP66 waterproof। Price: ৳${product.price}। Free installation + 1 year warranty।`,
  keywords: [
    `${product.name} Chapainawabganj`,
    'MotoLock GPS v4.0 price Bangladesh',
    'GPS tracker with engine lock',
    'waterproof motorcycle tracker',
    'real time bike tracking device',
    'anti theft GPS system',
    'GPS installation Chapainawabganj',
    'motorcycle security device',
    'bike tracker with mobile app',
    'GPS tracker warranty Bangladesh'
  ],
  openGraph: {
    title: `${product.name} - Best GPS Tracker in Chapainawabganj`,
    description: `${product.description} Price: ৳${product.price}। Free installation + 1 year warranty।`,
    images: [
      {
        url: product.images[0].url,
        width: 800,
        height: 600,
        alt: product.images[0].alt,
      },
    ],
  },
  alternates: {
    canonical: 'https://bismillah-auto.netlify.app/product',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  brand: product.brand,
  sku: product.sku,
  description: product.longDescription,
  image: product.images.map(img => img.url),
  offers: {
    '@type': 'Offer',
    price: product.price,
    priceCurrency: product.currency,
    availability: 'https://schema.org/InStock',
    priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    seller: {
      '@type': 'Organization',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
      },
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      author: {
        '@type': 'Person',
        name: 'রহিম উদ্দিন',
      },
      reviewBody: '২ মাস আগে আমার বাইক চুরি হওয়ার চেষ্টা হয়েছিল। Motolock এর alert পেয়ে সাথে সাথে পুলিশকে জানিয়ে বাইক উদ্ধার করতে পেরেছি।',
    },
  ],
};

export default async function ProductPage() {
  const dynamicProducts = await prisma.product.findMany({
    where: { inStock: true },
    orderBy: { createdAt: 'desc' }
  });
  
  const displayProducts = dynamicProducts.length > 0 ? dynamicProducts : Object.values(productData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="pt-16">
          {/* Product Banner */}
          <section className="bg-gradient-to-r from-[#0A7E7E] to-[#0A7E7E]/80 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center bg-[#F97316] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    Best Seller in Chapainawabganj
                  </div>

                  <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                    {product.name}
                  </h1>

                  <p className="text-xl text-teal-100 mb-8">
                    {product.longDescription}
                  </p>

                  <div className="flex items-center space-x-8 mb-8">
                    <div>
                      <span className="text-3xl font-bold">৳{product.price.toLocaleString()}</span>
                      <span className="text-teal-200 ml-2 line-through">৳{product.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span className="text-teal-100">{product.warranty}</span>
                    </div>
                  </div>

                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#F97316]/90 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call to Order Now
                  </a>
                </div>

                <div className="relative">
                  <ProductGallery images={product.images} />
                </div>
              </div>
            </div>
          </section>

          {/* Our Products */}
          {displayProducts.length > 0 && (
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Our Products
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    আমাদের সকল পণ্য দেখুন এবং আপনার পছন্দের পণ্যটি বেছে নিন
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {displayProducts.map((p) => {
                    const imgUrl = Array.isArray(p.images) && p.images[0] ? p.images[0].url : (p.imageUrl || undefined);
                    
                    return (
                      <div
                        key={p.id}
                        className="bg-slate-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                      >
                        <div className="relative aspect-video overflow-hidden bg-slate-200">
                          {imgUrl ? (
                            <img
                              src={imgUrl}
                              alt={p.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400">
                              No Image
                            </div>
                          )}
                          <div className="absolute top-3 left-3 bg-[#F97316] text-white text-xs font-semibold px-3 py-1 rounded-full">
                            Best Seller
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h3>
                          <p className="text-gray-600 text-sm mb-4 flex-1">{p.description}</p>
                          <div className="flex items-center justify-between mb-5">
                            <div>
                              <span className="text-2xl font-bold text-[#0A7E7E]">
                                ৳{Number(p.price).toLocaleString()}
                              </span>
                              {p.originalPrice && (
                                <span className="text-gray-400 text-sm line-through ml-2">
                                  ৳{Number(p.originalPrice).toLocaleString()}
                                </span>
                              )}
                            </div>
                            <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
                              {p.warranty || 'No Warranty'}
                            </span>
                          </div>
                          <a
                            href={`tel:${siteConfig.phone}`}
                            className="inline-flex items-center justify-center w-full px-5 py-3 bg-[#0A7E7E] text-white font-semibold rounded-lg hover:bg-[#0A7E7E]/90 transition-all duration-300 text-sm"
                          >
                            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Order Now
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* Product Features */}
          <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Premium Features
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  আধুনিক প্রযুক্তির সাথে বাংলাদেশি চাহিদার নিখুঁত মিশ্রণ
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {product.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="inline-flex p-3 bg-[#0A7E7E]/10 rounded-2xl mb-4">
                      <svg className="h-6 w-6 text-[#0A7E7E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ProductSpecs specifications={product.specifications} />
          <ProductFAQ faqs={product.faqs} />
        </main>
        <Footer />
        <PurchasePanel product={product} />
      </div>
    </>
  );
}
