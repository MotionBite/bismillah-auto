import React from 'react';
import { productData } from '../../public/data';

export default function Features() {
  const features = productData.motolock.keyFeatures;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            কেন Motolock GPS বেছে নেবেন?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            আধুনিক প্রযুক্তি আর বাংলাদেশি পরিবেশের জন্য বিশেষভাবে ডিজাইন করা ফিচারসমূহ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`inline-flex p-3 rounded-2xl ${
                index === 0 ? 'bg-[#0A7E7E]/10' : 
                index === 1 ? 'bg-[#F97316]/10' : 
                'bg-red-50'
              } mb-6`}>
                <svg className={`h-8 w-8 ${
                  index === 0 ? 'text-[#0A7E7E]' : 
                  index === 1 ? 'text-[#F97316]' : 
                  'text-red-600'
                }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {index === 0 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  )}
                  {index === 1 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  )}
                  {index >= 2 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.343 4.343l1.414 1.414m0 0l1.414 1.414M20.485 4.929l-1.414 1.414m-1.414 1.414l-1.414-1.414M4 12h2.5m11 0H20m-7-7v2.5m0 11V16" />
                  )}
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0A7E7E] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}