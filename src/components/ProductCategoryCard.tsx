"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductCategoryCardProps {
  imgURL: string;
  name: string;
  description: string;
}

const ProductCategoryCard = ({ imgURL, name, description }: ProductCategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className="relative flex flex-col w-full bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] sm:hover:scale-105 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Name Header */}
      <div className="p-4 sm:p-6 pb-3 sm:pb-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center leading-tight">
          {name}
        </h3>
      </div>
      
      {/* Image Container */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
        <div 
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            isHovered ? '-translate-y-full' : 'translate-y-0'
          }`}
        >
          {!imageError ? (
            <Image 
              src={imgURL} 
              alt={name} 
              fill
              className="object-cover"
              loading="lazy"
              onError={() => setImageError(true)}
              onLoad={() => setImageError(false)}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="text-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 text-xs sm:text-sm">Image not available</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Description Container */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-glow/95 flex items-center justify-center p-4 sm:p-6 transition-transform duration-500 ease-in-out ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <p className="text-white text-center text-xs sm:text-sm leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
