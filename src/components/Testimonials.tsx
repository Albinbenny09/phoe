import TestimonialsCarousel from "./client/TestimonialsCarousel";

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
        {/* SEO-Critical Marketing Content - Server Rendered */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading companies across the UAE for quality electrical solutions and exceptional service.
          </p>
        </div>

        {/* Interactive Elements - Client Rendered */}
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default Testimonials;