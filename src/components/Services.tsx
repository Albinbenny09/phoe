import { Zap, Settings, Cable, Gauge } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Circuit Protection",
      description: "MCB, MCCB, ACB, RCCB & RCBO, Motor Protection Circuit Breakers, DOL Starters, and comprehensive safety relay solutions."
    },
    {
      icon: Settings,
      title: "Automation & Control",
      description: "AC Drives (VFD), PLC & HMI systems, Temperature Controllers, Proximity & Inductive Sensors, and advanced control solutions."
    },
    {
      icon: Cable,
      title: "Power & Distribution",
      description: "Power & Network Cables, Isolators, Switches & Sockets, Panel Accessories, Enclosures, Terminal Blocks, and distribution equipment."
    },
    {
      icon: Gauge,
      title: "Monitoring & Instrumentation",
      description: "Digital Panel Meters, Energy Meters, Power Factor Controllers, Water Level Controllers, and precision monitoring equipment."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Products & <span className="text-primary">Ranges</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive electrical, automation, and electronics solutions for industrial and commercial applications across the UAE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:animate-glow transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
