import { Metadata } from 'next';
import { siteConfig, servicesData } from '../../public/data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

export const metadata: Metadata = {
  title: `Motorcycle Services in Chapainawabganj | ${siteConfig.name}`,
  description: `Complete motorcycle services in Chapainawabganj। Oil change, engine repair, electrical work, GPS installation। Expert mechanics, modern tools, warranty service।`,
  keywords: [
    'motorcycle service Chapainawabganj',
    'bike repair Chapainawabganj',
    'engine overhaul service',
    'GPS installation service',
    'motorcycle maintenance',
    'bike servicing center',
    'electrical repair motorcycle',
    'oil change service',
    'Bismillah Auto services',
    'motorcycle workshop Chapainawabganj'
  ],
  openGraph: {
    title: `Motorcycle Services in Chapainawabganj | ${siteConfig.name}`,
    description: `Complete motorcycle services। Oil change, engine repair, electrical work, GPS installation। Expert service in Chapainawabganj।`,
  },
  alternates: {
    canonical: 'https://bismillah-auto.netlify.app/services',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Motorcycle Services',
  provider: {
    '@type': 'AutoRepair',
    name: siteConfig.name,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
    },
  },
  serviceType: 'Motorcycle Repair and Maintenance',
  areaServed: 'Chapainawabganj, Bangladesh',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Motorcycle Services',
    itemListElement: servicesData.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
      },
      priceRange: service.price,
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-[#0A7E7E] to-[#0A7E7E]/80 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Complete Motorcycle Services
                </h1>
                <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
                  চাঁপাইনবাবগঞ্জের বিশ্বস্ত মোটরসাইকেল সার্ভিস সেন্টার। 
                  GPS installation থেকে শুরু করে সম্পূর্ণ ইঞ্জিন overhaul - সব ধরনের সেবা এক জায়গায়।
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#F97316]/90 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Book Service Call
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  আমাদের সেবাসমূহ
                </h2>
                <p className="text-xl text-gray-600">
                  দক্ষ মিস্ত্রি এবং আধুনিক যন্ত্রপাতির মাধ্যমে সর্বোচ্চ মানের সেবা
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {servicesData.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Workshop Credentials */}
          <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                    কেন Bismillah Auto বেছে নেবেন?
                  </h2>
                  
                  <p className="text-lg text-gray-700 mb-8">
                    ১২ বছরেরও বেশি সময় ধরে চাঁপাইনবাবগঞ্জে বিশ্বস্ত মোটরসাইকেল সার্ভিসিং এর কাজ করে আসছি। 
                    আমাদের রয়েছে অভিজ্ঞ মিস্ত্রি, আধুনিক যন্ত্রপাতি এবং গুণগত সেবার নিশ্চয়তা।
                  </p>

                  <div className="space-y-4">
                    {[
                      "12+ বছরের অভিজ্ঞতা সম্পন্ন মিস্ত্রিগণ",
                      "আধুনিক যন্ত্রপাতি ও সরঞ্জাম",
                      "Original spare parts এবং accessories",
                      "সকল কাজের জন্য written warranty",
                      "Emergency repair service",
                      "Home service available (GPS installation)"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <svg className="h-6 w-6 text-[#0A7E7E] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#0A7E7E]">500+</div>
                      <div className="text-sm text-gray-600">Bikes Serviced</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#0A7E7E]">12+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#0A7E7E]">98%</div>
                      <div className="text-sm text-gray-600">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl">
                    <img
                      src="https://images.pexels.com/photos/3689541/pexels-photo-3689541.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Bismillah Auto Workshop"
                      className="w-full rounded-lg mb-6"
                    />
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="font-semibold text-gray-900">4.9/5 Rating</span>
                      </div>
                      
                      <blockquote className="text-gray-700 italic">
                        "বিসমিল্লাহ অটোর সার্ভিস সত্যিই অসাধারণ। আমার বাইকের GPS installation এবং engine servicing দুটোই এখানে করিয়েছি। দাম ঠিক আছে এবং কাজের মান খুবই ভালো।"
                      </blockquote>
                      
                      <div className="text-sm text-gray-600">
                        - আব্দুর রহিম, নিয়মিত গ্রাহক
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-[#0A7E7E]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  আজই সার্ভিস বুক করুন
                </h2>
                
                <p className="text-xl text-teal-100 mb-8">
                  ফোন করুন এবং আপনার বাইকের জন্য best service নিশ্চিত করুন। 
                  Emergency repair এবং home service এর সুবিধাও রয়েছে।
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#F97316]/90 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call {siteConfig.phone}
                  </a>
                  
                  <div className="text-teal-100 text-sm">
                    Open: Sat-Thu 9AM-8PM | Friday Closed
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}