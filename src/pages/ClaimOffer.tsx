import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const ClaimOffer = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email with form details
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY", // User needs to get this from web3forms.com
          subject: "New Consultancy Offer Claim - Temperature Guru",
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          to_email: "info@temperatureguru.com",
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your request has been submitted. We'll contact you soon!",
        });
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        setTimeout(() => navigate("/"), 2000);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try WhatsApp or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-block bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
              LIMITED TIME OFFER - VALID TILL 1ST JAN 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Claim Your Special Consultancy Offer
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-center">
                <div className="text-muted-foreground line-through text-2xl">₹25,000</div>
                <div className="text-sm text-muted-foreground">Regular Price</div>
              </div>
              <div className="text-5xl font-bold text-primary">₹18,000</div>
            </div>
            <p className="text-xl text-muted-foreground">
              Save ₹7,000 on expert cold storage consultation
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Fill Your Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company / Business Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Project Details / Requirements</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your cold storage requirements..."
                    rows={4}
                  />
                </div>

                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">Expert consultation on cold storage design</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">Humidity control solutions tailored to your needs</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">30+ years of industry expertise</p>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Claim Offer Now"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Or call us directly at: <strong>+91 9837493412</strong> / <strong>+91 7351712217</strong>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClaimOffer;
