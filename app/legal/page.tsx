import { Metadata } from 'next';
import { siteConfig } from '../../public/data';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: `Privacy Policy & Terms - ${siteConfig.name}`,
  description: `Privacy policy, refund policy এবং terms of service for ${siteConfig.name}। GPS tracker warranty, installation terms, এবং customer rights।`,
  keywords: [
    'Bismillah Auto privacy policy',
    'GPS tracker warranty terms',
    'refund policy Bangladesh',
    'motorcycle service terms',
    'customer rights GPS tracker',
    'installation warranty',
    'service terms conditions'
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://bismillah-auto.netlify.app/legal',
  },
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0A7E7E] to-[#0A7E7E]/80 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Legal Information
              </h1>
              <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
                আমাদের গোপনীয়তা নীতি, রিফান্ড পলিসি এবং সেবার শর্তাবলী সম্পর্কে জানুন
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-blue-50 rounded-2xl">
                  <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold mb-4">তথ্য সংগ্রহ ও ব্যবহার</h3>
                <p className="text-gray-700 mb-6">
                  Bismillah Auto আপনার ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষায় প্রতিশ্রুতিবদ্ধ। 
                  আমরা শুধুমাত্র GPS tracker installation এবং সেবা প্রদানের জন্য প্রয়োজনীয় তথ্য সংগ্রহ করি:
                </p>
                
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>নাম, ফোন নাম্বার এবং ঠিকানা</li>
                  <li>মোটরসাইকেলের মডেল ও রেজিস্ট্রেশন তথ্য</li>
                  <li>GPS tracker এর লোকেশন ডেটা (শুধুমাত্র সার্ভিস উদ্দেশ্যে)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">তথ্যের নিরাপত্তা</h3>
                <p className="text-gray-700 mb-6">
                  আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে আমরা যথাযথ নিরাপত্তা ব্যবস্থা গ্রহণ করি। 
                  কোনো তৃতীয় পক্ষের সাথে আপনার তথ্য শেয়ার করা হয় না, কেবলমাত্র আইনগত বাধ্যবাধকতার ক্ষেত্রে ব্যতিক্রম।
                </p>

                <h3 className="text-xl font-semibold mb-4">GPS ডেটা ব্যবহার</h3>
                <p className="text-gray-700 mb-6">
                  GPS tracker থেকে প্রাপ্ত লোকেশন ডেটা শুধুমাত্র আপনার নিজস্ব ব্যবহারের জন্য। 
                  আমরা এই ডেটা store করি না বা অন্য কোনো উদ্দেশ্যে ব্যবহার করি না। 
                  সমস্ত ট্র্যাকিং তথ্য সরাসরি আপনার মোবাইল অ্যাপে পৌঁছায়।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Policy */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-green-50 rounded-2xl">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Refund Policy</h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold mb-4">রিফান্ড শর্তাবলী</h3>
                <p className="text-gray-700 mb-6">
                  আমরা গ্রাহক সন্তুষ্টিকে সর্বোচ্চ অগ্রাধিকার দিই। MotoLock GPS Tracker এর জন্য আমাদের রিফান্ড নীতি:
                </p>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <div className="flex items-start space-x-3">
                    <svg className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">গুরুত্বপূর্ণ নোটিশ</h4>
                      <p className="text-yellow-700">
                        GPS tracker installation এর পর সাধারণত রিফান্ড প্রযোজ্য নয়। 
                        তবে device এ manufacturing defect থাকলে ১ বছরের মধ্যে replacement দেওয়া হবে।
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4">রিফান্ড প্রযোজ্য ক্ষেত্রসমূহ</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>পণ্য delivery এর পূর্বে অর্ডার cancel করলে (100% রিফান্ড)</li>
                  <li>Installation এর পূর্বে গ্রাহক মত পরিবর্তন করলে (90% রিফান্ড, 10% handling charge)</li>
                  <li>Device এ manufacturing defect পাওয়া গেলে (নতুন device replacement)</li>
                  <li>আমাদের পক্ষ থেকে installation সম্পন্ন করতে না পারলে (100% রিফান্ড)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">রিফান্ড প্রক্রিয়া</h3>
                <p className="text-gray-700 mb-4">
                  রিফান্ডের জন্য অবশ্যই ৭ দিনের মধ্যে আমাদের সাথে যোগাযোগ করতে হবে। 
                  রিফান্ড প্রক্রিয়া সম্পন্ন হতে ৭-১৪ কার্যদিবস সময় লাগতে পারে।
                </p>

                <div className="bg-[#0A7E7E]/10 border border-[#0A7E7E]/20 rounded-lg p-6">
                  <h4 className="font-semibold text-[#0A7E7E] mb-2">যোগাযোগ করুন</h4>
                  <p className="text-gray-700 mb-4">
                    রিফান্ড সংক্রান্ত যেকোনো প্রশ্ন বা সমস্যার জন্য আমাদের সাথে যোগাযোগ করুন:
                  </p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center text-[#0A7E7E] font-semibold hover:text-[#0A7E7E]/80 transition-colors"
                  >
                    <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-[#0A7E7E]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                কোনো প্রশ্ন আছে?
              </h2>
              
              <p className="text-xl text-teal-100 mb-8">
                আমাদের নীতিমালা সম্পর্কে আরও জানতে বা কোনো সমস্যার সমাধানের জন্য যোগাযোগ করুন
              </p>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#F97316]/90 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {siteConfig.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}