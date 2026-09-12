'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductImage {
  url: string;
  alt: string;
  title: string;
}

interface ProductGalleryProps {
  images: ProductImage[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
      {/* Main Image */}
      <div className="mb-6">
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={images[selectedImage].url}
            alt={images[selectedImage].alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute -bottom-4 -right-4 bg-[#F97316] text-white p-4 rounded-2xl shadow-lg">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
              selectedImage === index 
                ? 'ring-2 ring-[#F97316] ring-offset-2 ring-offset-white/10' 
                : 'hover:opacity-80'
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Image Title */}
      <div className="mt-4 text-center">
        <p className="text-teal-100 text-sm font-medium">
          {images[selectedImage].title}
        </p>
      </div>
    </div>
  );
}