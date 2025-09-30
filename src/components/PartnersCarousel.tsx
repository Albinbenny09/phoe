"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

type Partner = { name: string; src: string };

// Manufacturing Partners
const MANUFACTURING_PARTNERS: Partner[] = [
  { name: "Schneider Electric", src: "/Partners/schneider.png" },
  { name: "ABB", src: "/Partners/abb.png" },
  { name: "Siemens", src: "/Partners/siemens.png" },
  { name: "Eaton", src: "/Partners/eaton.png" },
  { name: "Phoenix Contact", src: "/Partners/phoenix.png" },
  { name: "Legrand", src: "/Partners/legrand.png" },
  { name: "Panasonic", src: "/Partners/panasonic.png" },
  { name: "SICK", src: "/Partners/sick.png" },
  { name: "Omron", src: "/Partners/omron.png" },
  { name: "Mitsubishi Electric", src: "/Partners/mitsubishi.png" },
  { name: "ETI", src: "/Partners/eti.png" },
  { name: "BTicino", src: "/Partners/bticino.png" },
  { name: "WAGO", src: "/Partners/wago.png" },
  { name: "Allen-Bradley", src: "/Partners/allen-bradley.png" },
];

const LogoCard = ({ partner }: { partner: Partner }) => (
  <div className="flex-shrink-0 w-48 h-32 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mx-3 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1">
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={partner.src}
        alt={`${partner.name} logo - PHOE Electricals manufacturing partner`}
        loading="lazy"
        decoding="async"
        className="max-h-full max-w-full object-contain opacity-90 transition-all duration-300 group-hover:opacity-100"
        width={120}
        height={80}
        title={`${partner.name} - PHOE Electricals Partner`}
      />
    </div>
  </div>
);

const SectionHeader = ({ title, description }: { title: string; description: string }) => (
  <div className="text-center mb-12">
    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{title}</h3>
    <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
  </div>
);

// Mobile Infinite Scroll Component
const MobileCarousel = ({ partners }: { partners: Partner[] }) => {
  return (
    <div className="md:hidden mb-8">
      <div className="relative overflow-hidden bg-gray-50/30 rounded-2xl py-6">
        {/* Infinite Scrolling Container */}
        <div className="relative h-40">
          <div className="flex animate-scroll">
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div key={`first-${partner.name}`} className="flex-shrink-0 mx-6">
                <div className="group">
                  <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md border border-gray-200/60 p-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 group-hover:border-[#019999]/30">
                    <Image
                      src={partner.src}
                      alt={`${partner.name} logo - PHOE Electricals manufacturing partner`}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain opacity-80 transition-all duration-300 group-hover:opacity-100"
                      width={120}
                      height={80}
                      title={`${partner.name} - PHOE Electricals Partner`}
                    />
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`second-${partner.name}`} className="flex-shrink-0 mx-6">
                <div className="group">
                  <div className="w-36 h-24 flex items-center justify-center bg-white rounded-xl shadow-md border border-gray-200/60 p-4 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 group-hover:border-[#019999]/30">
                    <Image
                      src={partner.src}
                      alt={`${partner.name} logo - PHOE Electricals manufacturing partner`}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain opacity-80 transition-all duration-300 group-hover:opacity-100"
                      width={120}
                      height={80}
                      title={`${partner.name} - PHOE Electricals Partner`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Desktop Grid Component
const PartnersGrid = ({ partners }: { partners: Partner[] }) => {
  return (
    <div className="hidden md:block mb-8">
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {partners.map((partner) => (
          <LogoCard key={partner.name} partner={partner} />
        ))}
      </div>
    </div>
  );
};

const PartnersCarousel = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white" id="partners-carousel">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-120px,rgba(10,102,204,.06),transparent_60%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
         
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Dealing <span className="text-primary relative">
          Brands
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30"/>
              </svg>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From manufacturing to delivery, we work with the best in every sector to ensure excellence at every step.
          </p>
        </div>

        <div className="mb-8">
         
          {/* Mobile Carousel */}
          <MobileCarousel partners={MANUFACTURING_PARTNERS} />
          {/* Desktop Grid */}
          <PartnersGrid partners={MANUFACTURING_PARTNERS} />
        </div>

      </div>
    </section>
  );
};

export default PartnersCarousel;
