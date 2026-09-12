import { Metadata } from 'next';
import { siteConfig } from '../../public/data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';
import MapSection from '../components/MapSection';

export const metadata: Metadata = {
  title: `Contact Us - GPS Tracker Service in Chapainawabganj | ${siteConfig.name}`,
  description: `Contact Bismillah Auto for Motolock GPS tracker installation in Chapainawabganj। Call ${siteConfig.phone}। Address: ${siteConfig.address.street}, ${siteConfig.address.city}।`,
  keywords: [
    'contact Bismillah Auto',
    'GPS tracker service Chapainawabganj',
    'MotoLock GPS installation contact',
    'motorcycle service contact',
    'Chapainawabganj GPS tracker shop',
    'bike security service contact',
    'GPS installation appointment',
    'motorcycle repair contact'
  ],
  openGraph: {
    title: `Contact Us - GPS Tracker Service in Chapainawabganj`,
    description: `Contact us for Motolock GPS tracker installation। Call ${siteConfig.phone}। Located in ${siteConfig.address.city}।`,
  },
  alternates: {
    canonical: 'https://bismillah-auto.netlify.app/contact',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Bismillah Auto',
  description: 'Contact information for GPS tracker installation and motorcycle services',
  mainEntity: {
    '@type': 'AutoRepair',
    name: siteConfig.name,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '20:00',
      },
    ],
  },
};

export default function ContactPage() {
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
                  Get in Touch
                </h1>
                <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
                  চাঁপাইনবাবগঞ্জে আমাদের সাথে যোগাযোগ করুন। GPS tracker installation, 
                  বাইক servicing বা যেকোনো প্রশ্নের জন্য আমরা সবসময় প্রস্তুত।
                </p>
              </div>
            </div>
          </section>

          <ContactInfo />
          <MapSection />

          {/* CTA Section */}
          <section className="py-20 bg-[#0A7E7E]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Ready to Secure Your Bike?
                </h2>
                
                <p className="text-xl text-teal-100 mb-8">
                  আজই কল করুন এবং Motolock GPS Tracker অর্ডার করুন। 
                  Free installation এবং ১ বছরের warranty সহ।
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
                  
                  <a
                    href={`https://wa.me/${siteConfig.social.whatsapp}?text=Hello! I want to know more about Motolock GPS tracker.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
                    </svg>
                    WhatsApp
                  </a>
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