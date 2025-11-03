import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import { 
  Snowflake, 
  Droplets, 
  Building2, 
  Wrench, 
  Shield, 
  FileText,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import heroImage from "@/assets/hero-cold-storage.jpg";

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: "Cold Storage Design",
      description: "Expert design and consultation for efficient cold storage facilities tailored to your needs.",
    },
    {
      icon: Droplets,
      title: "Humidity Control",
      description: "Advanced humidity control chambers for agriculture, food, and pharmaceutical industries.",
    },
    {
      icon: Wrench,
      title: "Installation Consultancy",
      description: "Professional guidance through every step of your cold storage installation process.",
    },
    {
      icon: Shield,
      title: "AMC Services",
      description: "Comprehensive maintenance plans - Lite and Pro options with 24x7 support.",
    },
    {
      icon: FileText,
      title: "Subsidy Consultation",
      description: "Expert guidance on government subsidy benefits for cold storage projects.",
    },
    {
      icon: Snowflake,
      title: "Specialty Solutions",
      description: "Custom solutions for Kesar Mangoes, Mushrooms, Flowers, and Gatta Dryer systems.",
    },
  ];

  const stats = [
    { number: "35+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "24/7", label: "Support Available" },
  ];

  const clients = [
    "Coca-Cola", "PepsiCo", "Mother Dairy", "Vadilal", "Amul",
    "Wimco Homelite", "IWP", "56 APO Pithoragarh", "ITBP Bhuj", 
    "Bail Kolhu", "Kankor", "Gaylord Ice Cream"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Modern cold storage facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Innovating India's Cold Storage Future
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Humidity Control, Efficiency & Precision by Anand Bhatnagar
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
              Temperature Guru is India's trusted name in cold storage design and humidity control consultancy, 
              backed by 35+ years of experience and 500+ satisfied clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Consultancy <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 right-10 animate-float hidden lg:block">
          <div className="bg-secondary p-6 rounded-2xl shadow-lg">
            <Snowflake className="h-12 w-12 text-secondary-foreground" />
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-6 bg-gradient-to-r from-secondary/50 to-primary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-card/95 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <div className="inline-block bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold mb-2">
                  LIMITED OFFER
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Consultancy Special Price</h3>
                <p className="text-sm text-muted-foreground">Valid till 1st January 2026</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <div className="text-muted-foreground line-through text-lg">₹25,000</div>
                </div>
                <ArrowRight className="h-5 w-5 text-primary" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">₹18,000</div>
                </div>
                <Button size="sm" asChild className="ml-2">
                  <Link to="/claim-offer">Claim Offer</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Anand Bhatnagar
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founder & Expert at Temperature Guru, with over 35 years of pioneering work in refrigeration, 
              cold storage, and humidity control innovation.
            </p>
            <p className="text-muted-foreground">
              Previously with Vadilal, Anand has served prestigious clients including Coca-Cola, PepsiCo, and top 
              cold chain brands across India. His mission: revolutionizing India's cold storage industry with 
              precision, efficiency, and innovation.
            </p>
            <Button variant="default" size="lg" className="mt-6" asChild>
              <Link to="/about">Read Full Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cold storage and humidity control solutions tailored to your industry needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Trusted By Industry Leaders</h2>
            <p className="text-lg text-muted-foreground">
              Serving India's top brands with excellence and precision
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div key={index} className="text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Cold Storage?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Get expert consultation from India's leading cold storage and humidity control specialist
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Request Consultation</Link>
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              asChild
            >
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
