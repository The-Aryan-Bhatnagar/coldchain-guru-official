import { Link } from "react-router-dom";
import { Thermometer, Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-secondary p-2 rounded-lg">
                <Thermometer className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Temperature Guru</h3>
                <p className="text-xs text-primary-foreground/80">by Anand Bhatnagar</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              India's leading cold storage and humidity control consultant with 30+ years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Cold Storage Design</li>
              <li className="text-sm text-primary-foreground/80">Humidity Control</li>
              <li className="text-sm text-primary-foreground/80">AMC Services</li>
              <li className="text-sm text-primary-foreground/80">Subsidy Consultation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@temperatureguru.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>India</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Temperature Guru. All rights reserved. | Designed for Excellence in Cold Storage Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
