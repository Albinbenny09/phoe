"use client";

import React, { useState, useEffect } from "react";
import PopularProductCard from "./PopularProductCard";

// Product data based on images in Best-Selling folder
interface Product {
  imgURL: string;
  name: string;
  price: string;
}

const products: Product[] = [
  {
    imgURL: "/Best-Selling/CONT 25A AC3 11KW 1NO 1NC 110VAC COIL.webp",
    name: "CONT 25A AC3 11KW 1NO 1NC 110VAC COIL",
    price: "AED 150"
  },

  {
    imgURL: "/Best-Selling/Easy9 MCB 2P 63A C 10000A 415V.webp",
    name: "Easy9 MCB 2P 63A C 10000A 415V",
    price: "AED 120"
  },
  {
    imgURL: "/Best-Selling/Easy9- 20A 1P MCB 6kA C Curve.webp",
    name: "Easy9- 20A 1P MCB 6kA C Curve",
    price: "AED 95"
  },
  {
    imgURL: "/Best-Selling/EasyLogic PM2120, Power & Energy meter, up to the 15th harmonic, LED display, RS485, class 1.webp",
    name: "EasyLogic PM2120 Power & Energy Meter",
    price: "AED 450"
  },
  {
    imgURL: "/Best-Selling/TeSys 150A 3P contactor with 220V AC control.webp",
    name: "TeSys 150A 3P Contactor 220V AC",
    price: "AED 280"
  },
  {
    imgURL: "/Best-Selling/TeSys 80A 3P contactor with 220V AC control.webp",
    name: "TeSys 80A 3P Contactor 220V AC",
    price: "AED 180"
  },
  {
    imgURL: "/Best-Selling/TeSys GV2 MPCB Overload Protection range of 1-1.6A.webp",
    name: "TeSys GV2 MPCB Overload Protection 1-1.6A",
    price: "AED 220"
  } ,
   {
    imgURL: "/Best-Selling/Easy9 MCB 1P 6A C 6000A 240V.webp",
    name: "Easy9 MCB 1P 6A C 6000A 240V",
    price: "AED 85"
  }
];

// Mobile Infinite Scroll Component
const MobileCarousel = ({ products }: { products: Product[] }) => {
  return (
    <div className="md:hidden mb-8">
      <div className="relative overflow-hidden bg-gray-50/30 rounded-2xl py-6">
        {/* Infinite Scrolling Container */}
        <div className="relative h-80">
          <div className="flex animate-scroll" style={{ width: `${products.length * 2 * 256}px` }}>
            {/* First set of products */}
            {products.map((product, index) => (
              <div key={`first-${product.name}`} className="flex-shrink-0 w-64 px-2">
                <PopularProductCard {...product} />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {products.map((product, index) => (
              <div key={`second-${product.name}`} className="flex-shrink-0 w-64 px-2">
                <PopularProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Desktop Carousel Component - Shows 4 cards at a time
const DesktopCarousel = ({ products }: { products: Product[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex >= products.length - 4 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, products.length]);


  return (
    <div className="hidden md:block mb-8">
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* Products Container */}
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
          {products.map((product, index) => (
            <div key={product.name} className="flex-shrink-0 w-1/4 px-3">
              <PopularProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: products.length - 3 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PopularProducts = () => {
  return (
    <section id="products" className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-120px,rgba(10,102,204,.06),transparent_60%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="uppercase tracking-wider text-sm text-muted-foreground font-semibold mb-3">
            Quality electrical solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary relative">
              Popular Products
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30"/>
              </svg>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value.
          </p>
        </div>

        {/* Mobile Carousel */}
        <MobileCarousel products={products} />
        
        {/* Desktop Carousel */}
        <DesktopCarousel products={products} />

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              // TODO: Navigate to products page when implemented
              console.log('Navigate to all products page');
            }}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary to-primary-glow rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary/30"
          >
            <span className="relative z-10">View All Products</span>
            <svg 
              className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <p className="mt-4 text-sm text-muted-foreground">
            Discover our complete range of electrical and automation solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
