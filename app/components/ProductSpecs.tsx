'use client';

import React, { useState } from 'react';

interface ProductSpecsProps {
  specifications: {
    [key: string]: string[];
  };
}

export default function ProductSpecs({ specifications }: ProductSpecsProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('build');

  const specTitles: { [key: string]: string } = {
    build: "Build Quality & Durability",
    power: "Power & Battery",
    connectivity: "Connectivity & Apps",
    cost: "Monthly Data Cost"
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-600">
            বিস্তারিত যন্ত্রগত তথ্য এবং খরচের হিসাব
          </p>
        </div>

        <div className="space-y-4">
          {Object.entries(specifications).map(([key, items]) => (
            <div
              key={key}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveAccordion(activeAccordion === key ? null : key)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {specTitles[key]}
                </h3>
                {activeAccordion === key ? (
                  <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              
              {activeAccordion === key && (
                <div className="px-6 pb-4">
                  <ul className="space-y-2">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <svg className="h-5 w-5 text-[#0A7E7E] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}