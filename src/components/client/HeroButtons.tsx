"use client";

import { Button } from "@/components/ui/button";

const HeroButtons = () => {
  const openWhatsApp = () => {
    const phoneNumber = "971588339415";
    const message = "Hi! I'm interested in getting a quote for electrical and automation solutions from PHOE Electricals.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const callPhone = () => {
    window.open('tel:+971588339415', '_self');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
      <Button 
        onClick={openWhatsApp}
        size="lg" 
        className="bg-gradient-to-r from-[#019999] to-[#7ED957] hover:from-[#017575] hover:to-[#6BBD47] hover:opacity-90 shadow-elegant text-lg px-8 py-4 transition-all duration-300"
      >
        Get a Quote
      </Button>
      <Button 
        onClick={callPhone}
        size="lg" 
        variant="outline" 
        className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-800 transition-all duration-300 text-lg px-8 py-4"
      >
        Contact Us
      </Button>
    </div>
  );
};

export default HeroButtons;
