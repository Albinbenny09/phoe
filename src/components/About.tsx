import { CheckCircle } from "lucide-react";
import Image from "next/image";

const About = () => {
  const valuePoints = [
    {
      title: " UNCOMPROMISING QUALITY",
      description: "We meticulously source all products from internationally recognized manufacturers, guaranteeing that every component you receive meets the highest standards for performance and durability. Your peace of mind is our priority."
    },
    {
      title: " EXPERT TECHNICAL SUPPORT", 
      description: "Our team is composed of technically qualified professionals who are here to serve as your advisors. We provide responsive, expert guidance on product selection, system design, and troubleshooting to help you find the perfect solution for your specific needs."
    },
    {
      title: "PROMPT AND RELIABLE SERVICE",
      description: "We understand the critical nature of project timelines. With a dedicated logistics network and a focus on efficiency, we ensure your orders are processed quickly and delivered on time, every time, helping you keep your projects on track and on budget."
    },
    {
      title: "EXTENSIVE PRODUCT RANGE",
      description: " As your single-source partner, we offer a comprehensive portfolio of electrical and automation solutions. This simplifies your procurement process and ensures you have access to everything you need, from a single component to a complete system."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content with image and text aligned */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Image 
              src="/about-image.jpg" 
              alt="Modern electrical control room with automation systems at PHOE Electricals Dubai UAE"
              className="rounded-2xl shadow-elegant w-full h-[500px] object-cover"
              width={600}
              height={700}
              loading="lazy"
              title="PHOE Electricals Modern Control Room"
              priority={false}
            />
          </div>
          
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About{" "}
              <span className="text-primary">PHOE Electricals Trading L.L.C</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Phoe Electricals Trading LLC is a leading Dubai-based supplier and trusted partner for premium electrical and automation
 products, serving the industrial, commercial, and infrastructural sectors across the UAE and beyond. As a Schneider electric supplier & Distributor in Dubai & Saudi Arabia, we offer an extensive
 portfolio that includes switchgear components, control and automation systems, power cables, lighting solutions, and wiring
 accessories, delivering reliable and high-performing products sourced from internationally recognized manufacturers.
            </p>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Our
 commitment goes beyond supplying quality products—we provide expert technical support, responsive after-sales service,
 and tailored solutions that empower our clients to achieve efficiency, safety, and innovation in every project. Backed by a
 reputation for excellence, competitive pricing, and customer-focused service, Phoe Electricals Trading LLC continues to set
 the benchmark as a preferred supplier of world-class electrical and automation solutions in the region.            </p>
          </div>
        </div>

        {/* Value Points - 2 columns under image and text */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 gap-6">
            {valuePoints.map((point, index) => (
              <div 
                key={index} 
                className="flex items-start space-x-4 p-6 rounded-lg bg-background/50 shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
