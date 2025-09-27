import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

type Partner = { name: string; src: string };

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // E-commerce Partners
  const ECOMMERCE_PARTNERS: Partner[] = [
    { name: "Amazon", src: "/e-commerce partners/amazon.png" },
    { name: "noon", src: "/e-commerce partners/noon.png" },
    { name: "Dubai Store", src: "/e-commerce partners/dubai_store.png" },
  ];

  // Delivery Partners
  const DELIVERY_PARTNERS: Partner[] = [
    { name: "UPS", src: "/deliverypartners/ups.png" },
    { name: "FedEx", src: "/deliverypartners/fedex.png" },
    { name: "DHL", src: "/deliverypartners/dhl.png" },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Image 
              src="/logo.png" 
              alt="PHOE Electricals Trading LLC Logo - Leading electrical and automation supplier Dubai UAE" 
              className="h-12 w-auto mb-6 brightness-0 invert"
              width={200}
              height={48}
              loading="eager"
              title="PHOE Electricals Trading LLC"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading supplier of electrical, automation, and electronics products in Dubai, UAE. 
              Quality solutions for industrial and commercial sectors.
            </p>
            
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/phoeelectricals" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-400 transition-all duration-300 hover:scale-110"
                aria-label="Follow PHOE Electricals on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.twitter.com/phoeelectricals" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-400 transition-all duration-300 hover:scale-110"
                aria-label="Follow PHOE Electricals on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/phoe-electricals" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-400 transition-all duration-300 hover:scale-110"
                aria-label="Connect with PHOE Electricals on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/phoeelectricals" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-400 transition-all duration-300 hover:scale-110"
                aria-label="Follow PHOE Electricals on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div>
                <p className="text-white font-semibold text-lg mb-2">PHOE ELECTRICALS TRADING L.L.C</p>
                <div className="text-gray-300 space-y-1">
                  <p>Sharjah Media City</p>
                  <p>Sharjah, UAE</p>
                </div>
              </div>
              
              <div className="pt-2">
                <div className="text-gray-300 space-y-1">
                  <p className="hover:text-teal-400 transition-colors cursor-pointer">+971 55 784 2929</p>
                  <p className="hover:text-teal-400 transition-colors cursor-pointer">+971 58 833 9415</p>
                </div>
              </div>
              
              <div className="pt-2">
                <div className="text-gray-300 space-y-1">
                  <p className="hover:text-teal-400 transition-colors cursor-pointer">sales@phoeelectric.com</p>
                  <p className="hover:text-teal-400 transition-colors cursor-pointer">phoeelectric@gmail.com</p>
                  <p className="hover:text-teal-400 transition-colors cursor-pointer">www.phoeelectric.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* E-commerce Partners */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-white">E-Commerce Partners</h3>
            <div className="space-y-4 text-left">
              {ECOMMERCE_PARTNERS.map((partner) => (
                <div key={partner.name} className="transition-all duration-300 hover:opacity-80 flex justify-start items-center">
                  <Image
                    src={partner.src}
                    alt={`${partner.name} logo - PHOE Electricals partner`}
                    className="h-8 object-contain max-w-full"
                    width={120}
                    height={32}
                    loading="lazy"
                    title={`${partner.name} - PHOE Electricals Partner`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Partners */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-white">Shipping Partners</h3>
            <div className="space-y-4 text-left">
              {DELIVERY_PARTNERS.map((partner) => (
                <div key={partner.name} className="transition-all duration-300 hover:opacity-80 flex justify-start items-center">
                  <Image
                    src={partner.src}
                    alt={`${partner.name} logo - PHOE Electricals partner`}
                    className="h-8 object-contain max-w-full"
                    width={120}
                    height={32}
                    loading="lazy"
                    title={`${partner.name} - PHOE Electricals Partner`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} PHOE Electricals Trading LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/privacy-policy" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="/sitemap.xml" className="hover:text-teal-400 transition-colors">Sitemap</a>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <div className="flex flex-col items-center space-y-1">
              <span className="text-gray-500 text-xs font-light">
                Crafted with precision by
              </span>
              <a 
                href="https://albin-benny-port-folio-site.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-105"
              >
                <span className="text-xs font-medium tracking-wider text-teal-400 hover:text-teal-300 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>A. Benny</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
