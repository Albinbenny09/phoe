import NavbarInteractive from "./client/NavbarInteractive";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="w-full h-16 flex items-center justify-between relative">
        {/* SEO-Critical Content - Server Rendered */}
        <button className="h-full flex items-center">
          <img 
            src="/PhoeLogo.webp" 
            alt="PHOE Electricals Trading LLC - Leading electrical and automation supplier in Dubai UAE" 
            className="h-full w-auto object-contain logo-crisp" 
            style={{ imageRendering: 'crisp-edges' }}
            width={150}
            height={44}
            loading="eager"
            title="PHOE Electricals Trading LLC"
          />
          <span className="sr-only">PHOE Electricals Trading LLC</span>
        </button>
        
        {/* Interactive Elements - Client Rendered */}
        <NavbarInteractive />
      </div>
    </header>
  );
};

export default Navbar;