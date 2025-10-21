import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { 
  Building2, 
  Droplets, 
  Wrench, 
  Shield, 
  FileText, 
  Snowflake,
  Apple,
  Wind,
  Settings,
  Users
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Building2,
      title: "Cold Storage Design Consultancy",
      description: "Expert design and planning for efficient, cost-effective cold storage facilities. We analyze your requirements and create custom solutions optimized for your specific products and scale.",
    },
    {
      icon: Droplets,
      title: "Humidity Control Chamber Setup",
      description: "State-of-the-art humidity control systems for agriculture, food processing, and pharmaceutical applications. Precise control for optimal product preservation.",
    },
    {
      icon: Apple,
      title: "Specialty Cold Storage",
      description: "Custom solutions for Kesar Mangoes, Mushrooms, Flowers, and other specialty products. Temperature and humidity optimization for premium quality retention.",
    },
    {
      icon: Wind,
      title: "Gatta Dryer & Dehumidification",
      description: "Advanced dehumidification solutions and Gatta dryer systems for industrial applications. Energy-efficient designs with precise moisture control.",
    },
    {
      icon: Wrench,
      title: "Installation Consultancy",
      description: "End-to-end guidance through your cold storage installation. From site selection to commissioning, we ensure flawless execution.",
    },
    {
      icon: Settings,
      title: "AMC Lite",
      description: "Basic maintenance plan covering regular inspections, preventive maintenance, and standard repairs to keep your systems running smoothly.",
    },
    {
      icon: Shield,
      title: "AMC Pro",
      description: "Premium maintenance with 24x7 support, priority response, comprehensive coverage, and dedicated technical assistance for critical operations.",
    },
    {
      icon: FileText,
      title: "Subsidy Consultation",
      description: "Expert guidance on government subsidies and financial benefits for cold storage projects. We help you navigate the application process and maximize your eligible benefits.",
    },
    {
      icon: Users,
      title: "Membership Program",
      description: "Exclusive membership offering service discounts, priority support, regular training sessions, and industry insights for long-term partners.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 animate-fade-up">
              Comprehensive Cold Storage & Humidity Control Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose Temperature Guru?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">30+ Years of Expertise</h3>
                    <p className="text-muted-foreground">
                      Three decades of hands-on experience in refrigeration and cold storage innovation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Proven Track Record</h3>
                    <p className="text-muted-foreground">
                      500+ satisfied clients and 1000+ successful projects across India.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Custom Solutions</h3>
                    <p className="text-muted-foreground">
                      Tailored designs optimized for your specific industry and requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Energy Efficiency</h3>
                    <p className="text-muted-foreground">
                      Cutting-edge technology for maximum efficiency and minimum operational costs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">
                      Round-the-clock technical assistance for our AMC Pro members.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Industry Leaders</h3>
                    <p className="text-muted-foreground">
                      Trusted by Coca-Cola, PepsiCo, Mother Dairy, and other major brands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation with Anand Bhatnagar to discuss your cold storage needs
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Request Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
