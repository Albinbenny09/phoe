import { PopularProductsCarousel, ViewAllProductsButton } from "./client/PopularProductsCarousel";

const PopularProducts = () => {
  return (
    <section id="products" className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-120px,rgba(10,102,204,.06),transparent_60%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO-Critical Marketing Content - Server Rendered */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-wider text-sm text-muted-foreground font-semibold mb-3">
            Quality electrical solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary relative">
              Popular Products
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30"/>
              </svg>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value.
          </p>
        </div>

        {/* Interactive Elements - Client Rendered */}
        <PopularProductsCarousel />
        <ViewAllProductsButton />
      </div>
    </section>
  );
};

export default PopularProducts;