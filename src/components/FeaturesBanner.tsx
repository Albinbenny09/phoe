import React from "react";
import { FileText, ShieldCheck, Truck, Banknote } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  text: string;
}

const FeaturesBanner = () => {
  const features: Feature[] = [
    {
      icon: <FileText className="w-8 h-8" />,
      text: "Authorised Supplier"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      text: "Quality Brands"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      text: "Global Delivery"
    },
    {
      icon: <Banknote className="w-8 h-8" />,
      text: "Best Price"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center space-y-4 group"
            >
              {/* Icon */}
              <div className="text-white/90 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              
              {/* Text */}
              <h3 className="text-white text-sm font-semibold tracking-wider uppercase text-center leading-tight">
                {feature.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;