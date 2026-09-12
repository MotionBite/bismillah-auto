'use client';

import React from 'react';
import { siteConfig } from '../../public/data';

interface Product {
  name: string;
  price: number;
  originalPrice: number;
  warranty: string;
  installation: string;
}

interface PurchasePanelProps {
  product: Product;
}

export default function PurchasePanel({ product }: PurchasePanelProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-40 p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-[#0A7E7E]">৳{product.price.toLocaleString()}</span>
          <span className="text-gray-500 ml-2 line-through">৳{product.originalPrice.toLocaleString()}</span>
          <p className="text-sm text-gray-600">{product.installation} + {product.warranty}</p>
        </div>
        
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex items-center px-6 py-3 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#F97316]/90 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call to Order
        </a>
      </div>
    </div>
  );
}