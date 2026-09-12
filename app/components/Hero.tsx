'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig, productData } from '../../public/data';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-24 pb-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://i.ibb.co/zW3kZyFK/create-a-single-futuristic-motorcycles-orange-fire-neon-glowing-image-like-this-one-https-thumbs-dre.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Secure Your Ride with
            <span className="text-[#F97316] block mt-2">
              Motolock GPS Tracker in Chapainawabganj
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            চাঁপাইনবাবগঞ্জের সেরা Motolock GPS ট্র্যাকার সেবা। Real-time
            tracking, engine lock, anti-theft protection দিয়ে আপনার বাইকের
            নিরাপত্তা নিশ্চিত করুন।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/product"
              className="inline-flex items-center px-8 py-4 bg-[#0A7E7E] text-white font-semibold rounded-lg hover:bg-[#0A7E7E]/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              Buy Now - ৳{productData.motolock.price.toLocaleString()}
            </Link>

            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#F97316]/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call {siteConfig.phone}
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <svg
                className="h-5 w-5 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Free Installation</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <svg
                className="h-5 w-5 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>1 Year Warranty</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <svg
                className="h-5 w-5 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}