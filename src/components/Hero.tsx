"use client";

import { Button } from "@/components/ui/button";

const Hero = () => {
  const openWhatsApp = () => {
    const phoneNumber = "971588339415";
    const message = "Hi! I'm interested in getting a quote for electrical and automation solutions from PHOE Electricals.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/banner-video.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          UAE's Leading Trader & Supplier of {" "}
            <span className="text-primary-glow">Electrical and Automation Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up">
          Quality, Reliability, and Prompt Service for Industrial and Commercial Sectors Worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              onClick={openWhatsApp}
              size="lg" 
              className="bg-gradient-to-r from-[#019999] to-[#7ED957] hover:from-[#017575] hover:to-[#6BBD47] hover:opacity-90 shadow-elegant text-lg px-8 py-4 transition-all duration-300"
            >
              Get a Quote
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-800 transition-all duration-300 text-lg px-8 py-4"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
