import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ServiceDetailDialog from "@/components/ServiceDetailDialog";
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
  Users,
  CheckCircle2
} from "lucide-react";
import coldChambers from "@/assets/gallery/cold-chambers.jpg";
import compressorSystem from "@/assets/gallery/compressor-system.jpg";
import controlPanel from "@/assets/gallery/control-panel.jpg";
import iceProduction from "@/assets/gallery/ice-production.jpg";
import coldRoomEntrance from "@/assets/gallery/cold-room-entrance.jpg";
import pharmaceuticalStorage from "@/assets/gallery/pharmaceutical-storage.jpg";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const mainServices = [
    {
      icon: Snowflake,
      title: "Ice Plants & Production Systems",
      description: "Design and installation of Freon & Ammonia-based ice plants, ice candy plants, and ice cream production systems. Expertise gained from projects with Pepsi, Gaylord Ice Cream, and Vadilal.",
      fullDescription: "We provide comprehensive ice plant solutions including design, installation, and commissioning of both Freon and Ammonia-based systems. Our expertise spans from small-scale ice candy production to large industrial ice plants serving major beverage and ice cream manufacturers.",
      features: [
        "Freon & Ammonia-based ice plants",
        "Ice candy production systems",
        "Industrial ice cream manufacturing",
        "High-capacity ice production",
        "Energy-efficient designs",
        "24/7 technical support"
      ],
      images: [iceProduction, compressorSystem, controlPanel]
    },
    {
      icon: Wind,
      title: "Chiller Water Systems",
      description: "Comprehensive chiller solutions with 20+ installations including dairy chillers, industrial process cooling, and custom water chilling systems for various applications.",
      fullDescription: "Our chiller water systems are designed for maximum efficiency and reliability. With over 20 successful installations, we provide solutions for dairy cooling, industrial processes, and specialized applications requiring precise temperature control.",
      features: [
        "Dairy chiller systems",
        "Industrial process cooling",
        "Custom water chilling solutions",
        "Energy-efficient designs",
        "Preventive maintenance support",
        "Emergency backup systems"
      ],
      images: [compressorSystem, controlPanel, coldChambers]
    },
    {
      icon: Building2,
      title: "Cold Storage Design & Installation",
      description: "Expert design and planning for 100+ fruit & vegetable cold storages across India. Custom solutions optimized for your products with deep-temperature systems and AMC support.",
      fullDescription: "With over 100 successful cold storage projects across India, we specialize in designing and installing custom cold storage facilities for fruits, vegetables, and other perishable goods. Our solutions ensure optimal product preservation while maximizing energy efficiency.",
      features: [
        "Custom design for your products",
        "Deep-temperature systems",
        "Energy-efficient insulation",
        "Automated control systems",
        "Comprehensive AMC support",
        "Government subsidy assistance"
      ],
      images: [coldChambers, coldRoomEntrance, pharmaceuticalStorage]
    },
    {
      icon: Apple,
      title: "Specialty Chambers",
      description: "Custom solutions for Mushroom Chambers, Kesar Mangoes, Flowers, and specialty products. Temperature and humidity optimization for premium quality retention.",
      fullDescription: "We design specialized chambers that maintain precise temperature and humidity levels for premium agricultural products. Our solutions ensure maximum quality retention and extended shelf life for your specialty products.",
      features: [
        "Mushroom growing chambers",
        "Kesar mango ripening rooms",
        "Flower preservation chambers",
        "Precise humidity control",
        "Temperature monitoring systems",
        "Custom solutions for any product"
      ],
      images: [coldChambers, pharmaceuticalStorage, coldRoomEntrance]
    },
    {
      icon: Droplets,
      title: "Moisture Control & Dehumidification",
      description: "20+ Moisture Control Godowns with advanced dehumidification technology and Gatta dryer systems for industrial applications. Energy-efficient designs with precise moisture control.",
      fullDescription: "Our moisture control and dehumidification systems protect your products from humidity damage. With 20+ successful installations, we provide energy-efficient solutions for warehouses, godowns, and specialized drying applications.",
      features: [
        "Advanced dehumidification technology",
        "Gatta dryer systems",
        "Energy-efficient operation",
        "Precise moisture monitoring",
        "Industrial-scale solutions",
        "Automated control systems"
      ],
      images: [controlPanel, compressorSystem, coldChambers]
    },
    {
      icon: Wrench,
      title: "Installation & Commissioning",
      description: "End-to-end installation consultancy from site selection to commissioning. Proven track record with major clients including Coca-Cola, PepsiCo, Maaza, and Kinley.",
      fullDescription: "We provide complete installation consultancy services, guiding you through every step from site selection to final commissioning. Our proven methodology ensures timely project completion and optimal system performance.",
      features: [
        "Site selection and analysis",
        "Complete project planning",
        "Professional installation team",
        "System commissioning",
        "Staff training",
        "Post-installation support"
      ],
      images: [compressorSystem, controlPanel, coldRoomEntrance]
    },
    {
      icon: Settings,
      title: "AMC & Maintenance (50+ Projects)",
      description: "Comprehensive AMC services for deep-temperature systems including regular inspections, preventive maintenance, and emergency support for cold storages and refrigeration plants.",
      fullDescription: "Our Annual Maintenance Contract (AMC) services ensure your systems operate at peak efficiency year-round. With 50+ projects under AMC, we provide comprehensive maintenance, emergency support, and preventive care.",
      features: [
        "Regular system inspections",
        "Preventive maintenance",
        "24/7 emergency support",
        "Spare parts availability",
        "Performance optimization",
        "Detailed service reports"
      ],
      images: [compressorSystem, controlPanel, coldChambers]
    },
    {
      icon: Shield,
      title: "Government & Industrial Projects",
      description: "Specialized solutions for government and defense establishments including 56 APO Pithoragarh, ITBP Bhuj, and industrial clients like Wimco Homelite, IWP, Kankor Ingredients, and Camphor & Allied Products.",
      fullDescription: "We have extensive experience working with government, defense, and large industrial clients. Our solutions meet stringent quality standards and compliance requirements for mission-critical applications.",
      features: [
        "Defense & government projects",
        "Industrial cold storage",
        "Compliance with standards",
        "High-security installations",
        "Custom specifications",
        "Reliable support network"
      ],
      images: [coldChambers, pharmaceuticalStorage, compressorSystem]
    },
    {
      icon: FileText,
      title: "Subsidy Consultation",
      description: "Expert guidance on government subsidies and financial benefits for cold storage projects. We help you navigate the application process and maximize your eligible benefits.",
      fullDescription: "We provide comprehensive consultation on government subsidy schemes for cold storage and refrigeration projects. Our team helps you understand eligibility criteria, prepare applications, and maximize your benefits.",
      features: [
        "Subsidy eligibility analysis",
        "Application preparation",
        "Documentation support",
        "Liaison with authorities",
        "Benefit maximization",
        "Compliance guidance"
      ],
      images: [coldChambers, coldRoomEntrance, pharmaceuticalStorage]
    },
  ];

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={coldChambers} 
            alt="Cold storage chambers and humidity control systems" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
              <div 
                key={index} 
                className="animate-fade-up cursor-pointer" 
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => handleServiceClick(service)}
              >
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
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">35+ Years of Expertise</h3>
                  <p className="text-muted-foreground">
                    Decades of experience in refrigeration, cold storage, and humidity control innovation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">500+ Happy Clients</h3>
                  <p className="text-muted-foreground">
                    Trusted by leading brands including Coca-Cola, PepsiCo, government departments, and industrial giants.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Custom Solutions</h3>
                  <p className="text-muted-foreground">
                    Every project is uniquely designed to meet your specific requirements and maximize efficiency.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Comprehensive Support</h3>
                  <p className="text-muted-foreground">
                    From design to installation, maintenance, and emergency support - we're with you every step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Contact us today for a consultation and discover how we can optimize your cold storage needs
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <ServiceDetailDialog 
        service={selectedService}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
};

export default Services;
