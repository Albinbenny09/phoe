"use client";

import React from "react";
import ProductCategoryCard from "./ProductCategoryCard";

// Product category data based on images in product-category folder
interface ProductCategory {
  imgURL: string;
  name: string;
  description: string;
}

const productCategories: ProductCategory[] = [
  {
    imgURL: "/product-category/Circuit Breakers and Switches.jpg",
    name: "Circuit Breakers and Switches",
    description: "Advanced circuit protection solutions including MCB, MCCB, ACB, and RCCB devices. Ensuring electrical safety and reliable power distribution for residential and commercial applications."
  },
  {
    imgURL: "/product-category/Contactor Relay & Protection Relays.jpg",
    name: "Contactor Relay & Protection Relays",
    description: "High-performance contactors and protection relays for motor control and electrical safety. Featuring TeSys series contactors and comprehensive relay protection systems."
  },
  {
    imgURL: "/product-category/Electrical Protection and Control.jpg",
    name: "Electrical Protection and Control",
    description: "Complete electrical protection and control solutions including motor starters, overload protection, and advanced control systems for industrial automation applications."
  },
  {
    imgURL: "/product-category/Light Switches and Electrical Sockets.jpg",
    name: "Light Switches and Electrical Sockets",
    description: "Modern and reliable electrical accessories including switches, sockets, and lighting controls. Premium quality components for residential and commercial installations."
  },
  {
    imgURL: "/product-category/Medium Voltage Switchgear.jpg",
    name: "Medium Voltage Switchgear",
    description: "Robust medium voltage switchgear solutions for industrial power distribution. Featuring advanced protection, monitoring, and control capabilities for critical applications."
  },
  {
    imgURL: "/product-category/Push buttons, Switches, Pilot Lights and Joysticks.jpg",
    name: "Push Buttons, Switches, Pilot Lights and Joysticks",
    description: "Industrial control devices including push buttons, selector switches, pilot lights, and joysticks. Designed for harsh industrial environments with superior durability."
  },
  {
    imgURL: "/product-category/Uninterruptible Power Supply (UPS).jpg",
    name: "Uninterruptible Power Supply (UPS)",
    description: "Reliable UPS systems providing continuous power protection for critical equipment. Advanced battery backup solutions ensuring uninterrupted operations during power outages."
  },
  {
    imgURL: "/product-category/Variable Speed Drives and Soft Starters.jpg",
    name: "Variable Speed Drives and Soft Starters",
    description: "Energy-efficient motor control solutions including VFDs and soft starters. Optimizing motor performance while reducing energy consumption and mechanical stress."
  }
];

const ProductCategories = () => {
  return (
    <section id="product-categories" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Our Products & <span className="text-primary">Ranges</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Comprehensive electrical, automation, and electronics solutions for industrial and commercial applications across the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {productCategories.map((category, index) => (
            <div 
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCategoryCard 
                imgURL={category.imgURL}
                name={category.name}
                description={category.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
