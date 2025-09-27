"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    const phoneNumber = "971588339415";
    const message = "Hi! I'm interested in getting a quote for electrical and automation solutions from PHOE Electricals.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const callPhone = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const sendEmail = (email: string) => {
    const subject = "Inquiry about Electrical and Automation Solutions";
    const body = "Hi PHOE Electricals team,\n\nI'm interested in learning more about your electrical and automation solutions. Please get in touch with me.\n\nThank you!";
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
  };

  const openMaps = () => {
    const address = "Sharjah Media City, Sharjah, UAE";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch with{" "}
              <span className="text-primary">PHOE Electricals</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Contact us for all your electrical, automation, and electronics product needs. We're here to provide quality solutions and expert support across the UAE.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 animate-slide-up">
            <div className="text-center group cursor-pointer" onClick={() => callPhone("+971557842929")}>
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground hover:text-[#019999] transition-colors">+971 55 784 2929</p>
              <p className="text-muted-foreground hover:text-[#019999] transition-colors" onClick={(e) => {e.stopPropagation(); callPhone("+971588339415");}}>+971 58 833 9415</p>
            </div>
            
            <div className="text-center group cursor-pointer" onClick={() => sendEmail("sales@phoeelectric.com")}>
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground hover:text-[#019999] transition-colors">sales@phoeelectric.com</p>
              <p className="text-muted-foreground hover:text-[#019999] transition-colors" onClick={(e) => {e.stopPropagation(); sendEmail("phoeelectric@gmail.com");}}>phoeelectric@gmail.com</p>
            </div>
            
            <div className="text-center group cursor-pointer" onClick={openMaps}>
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground hover:text-[#019999] transition-colors">Sharjah Media City</p>
              <p className="text-muted-foreground hover:text-[#019999] transition-colors">Sharjah, UAE</p>
            </div>
          </div>

          <div className="animate-slide-up">
            <Button 
              onClick={openWhatsApp}
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 shadow-elegant text-lg px-8 py-4 group transition-all duration-300"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              Typically respond within 24 hours via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
