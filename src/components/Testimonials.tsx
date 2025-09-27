"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

// Mobile Testimonials Carousel Component
const MobileTestimonialsCarousel = ({ testimonials }: { testimonials: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 6000);
  };


  return (
    <div className="md:hidden mb-8">
      <div className="relative overflow-hidden bg-gray-50/30 rounded-2xl p-6">
        {/* Carousel Container */}
        <div className="relative h-80">
          <div 
            className="flex transition-transform duration-600 ease-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 flex items-center justify-center px-2">
                <Card className="bg-background/50 border-0 shadow-card hover:shadow-elegant transition-all duration-300 w-full max-w-sm">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-electric-green fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-foreground mb-6 leading-relaxed text-sm">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="border-t border-border pt-4">
                      <div className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.title}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>


        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2.5 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-400 ${
                index === currentIndex 
                  ? 'bg-[#019999] w-8 shadow-sm' 
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Desktop Testimonials Grid Component
const DesktopTestimonialsGrid = ({ testimonials }: { testimonials: any[] }) => {
  return (
    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card 
          key={index} 
          className="bg-background/50 border-0 shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <CardContent className="p-8">
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-electric-green fill-current" />
              ))}
            </div>
            
            <blockquote className="text-foreground mb-6 leading-relaxed">
              "{testimonial.content}"
            </blockquote>
            
            <div className="border-t border-border pt-4">
              <div className="font-semibold text-foreground">
                {testimonial.name}
              </div>
              <div className="text-sm text-muted-foreground">
                {testimonial.title}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      title: "CEO, Emirates Industrial Solutions",
      content: "Working with PHOE Electricals was a game-changer. Their team delivered a stunning, high-performance platform that exceeded all our expectations for our electrical supply business.",
      rating: 5
    },
    {
      name: "Sarah Mitchell",
      title: "Project Manager, Dubai Construction Group",
      content: "The automation solutions and technical expertise provided by PHOE Electricals helped streamline our procurement process significantly. Outstanding service and quality.",
      rating: 5
    },
    {
      name: "Omar Hassan",
      title: "Operations Director, Gulf Automation LLC",
      content: "Reliable, professional, and innovative. PHOE Electricals has been our trusted partner for electrical and automation products across multiple projects in the UAE.",
      rating: 5
    }
  ];

  return (
    <section className="py-12 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies across the UAE for quality electrical solutions and exceptional service.
          </p>
        </div>

        {/* Mobile Carousel */}
        <MobileTestimonialsCarousel testimonials={testimonials} />
        {/* Desktop Grid */}
        <DesktopTestimonialsGrid testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Testimonials;
