import { Award, Target, Users, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const milestones = [
    { year: "1990", event: "Started journey in refrigeration industry" },
    { year: "1995", event: "Joined Vadilal as Senior Consultant" },
    { year: "2005", event: "Pioneered humidity control innovations" },
    { year: "2015", event: "Founded Temperature Guru" },
    { year: "2020", event: "Expanded across multiple industries" },
    { year: "2025", event: "Creating cold storage revolution" },
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every project is executed with meticulous attention to detail and technical accuracy.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our mission. We build lasting partnerships through trust and excellence.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly evolving with cutting-edge technology to deliver superior solutions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Unwavering commitment to the highest standards in every aspect of our work.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
              About Anand Bhatnagar
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 animate-fade-up">
              Founder & Expert | Temperature Guru
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8">The Journey</h2>
            <div className="space-y-8">
              {/* 1990-1995 */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">1990 – 1995</h3>
                <ul className="space-y-2 text-lg text-muted-foreground">
                  <li>• Worked with Pepsi and Gaylord Ice Cream</li>
                  <li>• Installed and maintained ice cream production & refrigeration systems</li>
                </ul>
              </div>

              {/* 1995-2001 */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">1995 – 2001</h3>
                <ul className="space-y-2 text-lg text-muted-foreground">
                  <li>• Worked with Vadilal Ice Cream</li>
                  <li>• Led multiple industrial refrigeration and ice cream plant projects across North India</li>
                  <li>• Developed expertise in cold storage design, ice plants, and chiller systems</li>
                </ul>
              </div>

              {/* 2001-2016 */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">2001 – 2016</h3>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p className="font-semibold text-foreground">Executed large-scale projects for:</p>
                  <ul className="space-y-2">
                    <li>• Kankor Ingredients</li>
                    <li>• Camphor & Allied Products</li>
                  </ul>
                  <p className="font-semibold text-foreground mt-4">Handled 50+ Cold Storage AMCs (Deep-Temperature Systems)</p>
                  <p className="font-semibold text-foreground mt-4">Designed and commissioned:</p>
                  <ul className="space-y-2">
                    <li>• Freon & Ammonia-Based Ice Plants</li>
                    <li>• 20+ Chiller Water Systems</li>
                    <li>• 10+ Milk Chillers (in dairies)</li>
                    <li>• 100+ Fruit & Vegetable Cold Storages</li>
                    <li>• 10+ Mushroom Chambers</li>
                    <li>• 20+ Moisture Control Godowns</li>
                    <li>• 10+ Ice Candy Plants</li>
                  </ul>
                  <p className="font-semibold text-foreground mt-4">Major Clients: Pepsi, Coca-Cola, Maaza, Kinley</p>
                </div>
              </div>

              {/* 2016-Present */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">2016 – Present</h3>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>Continued work with leading industrial and government clients:</p>
                  <ul className="space-y-2">
                    <li>• Wimco Hmolite</li>
                    <li>• IWP</li>
                    <li>• 56 APO Pithoragarh</li>
                    <li>• ITBP, Bhuj</li>
                    <li>• Bail Kolhu</li>
                  </ul>
                  <p className="mt-4">Ongoing support for cold storage maintenance, AMC, and process optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To revolutionize India's cold storage industry by delivering innovative, efficient, and 
                sustainable humidity control solutions that preserve quality, reduce waste, and empower 
                businesses to reach their full potential.
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be recognized as India's leading authority in cold storage technology and humidity 
                control innovation, setting new standards for excellence while making advanced refrigeration 
                solutions accessible to businesses of all sizes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Journey</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <Card className="p-6 inline-block">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <div className="text-foreground">{milestone.event}</div>
                      </Card>
                    </div>
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Key Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Industry Recognition</h3>
                <p className="text-muted-foreground">
                  Recognized as one of India's leading cold storage consultants by major industry bodies 
                  and trade associations.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Innovation Awards</h3>
                <p className="text-muted-foreground">
                  Multiple patents and recognition for pioneering work in humidity control technology 
                  and energy-efficient refrigeration systems.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Client Success Stories</h3>
                <p className="text-muted-foreground">
                  Over 500 successful installations with 95% client retention rate and countless success 
                  stories across diverse industries.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Training & Mentorship</h3>
                <p className="text-muted-foreground">
                  Trained over 200 engineers and technicians, contributing to India's skilled workforce 
                  in refrigeration technology.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
