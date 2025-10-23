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
      icon: Snowflake,
      title: "Ice Plants & Production Systems",
      description: "Design and installation of Freon & Ammonia-based ice plants, ice candy plants, and ice cream production systems. Expertise gained from projects with Pepsi, Gaylord Ice Cream, and Vadilal.",
    },
    {
      icon: Wind,
      title: "Chiller Water Systems",
      description: "Comprehensive chiller solutions with 20+ installations including dairy chillers, industrial process cooling, and custom water chilling systems for various applications.",
    },
    {
      icon: Building2,
      title: "Cold Storage Design & Installation",
      description: "Expert design and planning for 100+ fruit & vegetable cold storages across India. Custom solutions optimized for your products with deep-temperature systems and AMC support.",
    },
    {
      icon: Apple,
      title: "Specialty Chambers",
      description: "Custom solutions for Mushroom Chambers, Kesar Mangoes, Flowers, and specialty products. Temperature and humidity optimization for premium quality retention.",
    },
    {
      icon: Droplets,
      title: "Moisture Control & Dehumidification",
      description: "20+ Moisture Control Godowns with advanced dehumidification technology and Gatta dryer systems for industrial applications. Energy-efficient designs with precise moisture control.",
    },
    {
      icon: Wrench,
      title: "Installation & Commissioning",
      description: "End-to-end installation consultancy from site selection to commissioning. Proven track record with major clients including Coca-Cola, PepsiCo, Maaza, and Kinley.",
    },
    {
      icon: Settings,
      title: "AMC & Maintenance (50+ Projects)",
      description: "Comprehensive AMC services for deep-temperature systems including regular inspections, preventive maintenance, and emergency support for cold storages and refrigeration plants.",
    },
    {
      icon: Shield,
      title: "Government & Industrial Projects",
      description: "Specialized solutions for government and defense establishments including 56 APO Pithoragarh, ITBP Bhuj, and industrial clients like Wimco Hmolite, IWP, Kankor Ingredients, and Camphor & Allied Products.",
    },
    {
      icon: FileText,
      title: "Subsidy Consultation",
      description: "Expert guidance on government subsidies and financial benefits for cold storage projects. We help you navigate the application process and maximize your eligible benefits.",
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
                    <h3 className="font-semibold text-foreground mb-2">35+ Years of Expertise</h3>
                    <p className="text-muted-foreground">
                      Since 1990, delivering excellence in refrigeration with Pepsi, Gaylord, Vadilal, and major industrial clients.
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
                      100+ cold storages, 50+ AMC projects, 20+ chiller systems, and specialized projects across India.
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
                      Trusted by Pepsi, Coca-Cola, Maaza, Kinley, Vadilal, government establishments, and industrial leaders.
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
