import { CheckCircle } from "lucide-react";
import Image from "next/image";

const About = () => {
  const valuePoints = [
    {
      title: "Quality Products",
      description: "High-quality products sourced from internationally recognized manufacturers with expert technical support and responsive service."
    },
    {
      title: "Wide Product Range", 
      description: "Extensive portfolio including switchgear components, control systems, automation solutions, power cables, and industrial electronics."
    },
    {
      title: "Regional Expertise",
      description: "Years of technical and industry experience serving industrial and commercial sectors across the UAE and region."
    },
    {
      title: "Customer Partnership",
      description: "We don't just supply products — we build long-term partnerships based on trust, quality, and commitment to customer success."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Image 
              src="/about-image.jpg" 
              alt="Modern electrical control room with automation systems at PHOE Electricals Dubai UAE"
              className="rounded-2xl shadow-elegant w-full h-auto"
              width={600}
              height={400}
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
            
            <p className="text-xl text-muted-foreground mb-8">
              Phoe Electricals Trading LLC is a leading trader and supplier of electrical, automation, and electronics products based in Dubai, UAE. Known for quality, reliability, and prompt service, we cater to a wide range of industrial and commercial sectors across the region.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              We offer an extensive range of high-quality products sourced from internationally recognized manufacturers. Our portfolio includes switchgear components, control systems, automation solutions, power cables, lighting, wiring accessories, and industrial electronics — all backed by expert technical support and responsive service.
            </p>
            
            <div className="space-y-6">
              {valuePoints.map((point, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 shadow-card hover:shadow-elegant transition-all duration-300"
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
      </div>
    </section>
  );
};

export default About;
