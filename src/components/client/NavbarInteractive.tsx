"use client";

import { useState } from "react";

const NavbarInteractive = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

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
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 absolute right-4 top-1/2 transform -translate-y-1/2">
        <button onClick={() => scrollToSection('home')} className="text-gray-800 hover:text-[#019999] text-base font-semibold transition-colors">Home</button>
        <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-[#019999] text-base font-semibold transition-colors">About</button>
        <button onClick={() => scrollToSection('partners-carousel')} className="text-gray-800 hover:text-[#019999] text-base font-semibold transition-colors">Partners</button>
        <button onClick={callPhone} className="text-gray-800 hover:text-[#019999] text-base font-semibold transition-colors">Contact</button>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-gray-800 text-xl absolute right-4 top-1/2 transform -translate-y-1/2"
        aria-label="Menu"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-800 hover:text-[#019999] font-semibold">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-800 hover:text-[#019999] font-semibold">About</button>
            <button onClick={() => scrollToSection('partners-carousel')} className="block w-full text-left text-gray-800 hover:text-[#019999] font-semibold">Partners</button>
            <button onClick={callPhone} className="block w-full text-left text-gray-800 hover:text-[#019999] font-semibold">Contact</button>
            <button 
              onClick={openWhatsApp}
              className="block w-full bg-[#019999] hover:bg-[#017575] text-white font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Get a Quote
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavbarInteractive;
