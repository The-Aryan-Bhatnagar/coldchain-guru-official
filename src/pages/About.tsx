import { Award, Target, Users, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const milestones = [
    { 
      year: "1990 – 1995", 
      event: "Worked with Pepsi and Gaylord Ice Cream. Installed and maintained ice cream production & refrigeration systems." 
    },
    { 
      year: "1995 – 2001", 
      event: "Worked with Vadilal Ice Cream. Led multiple industrial refrigeration and ice cream plant projects across North India. Developed expertise in cold storage design, ice plants, and chiller systems." 
    },
    { 
      year: "2001 – 2015", 
      event: "Executed large-scale projects for Kankor Ingredients and Camphor & Allied Products. Handled 50+ Cold Storage AMCs. Designed 100+ Fruit & Vegetable Cold Storages, 20+ Chiller Water Systems, 10+ Milk Chillers, 10+ Mushroom Chambers, 20+ Moisture Control Godowns, 10+ Ice Candy Plants. Major Clients: Pepsi, Coca-Cola, Maaza, Kinley." 
    },
    { 
      year: "2015", 
      event: "Founded Temperature Guru" 
    },
    { 
      year: "2020", 
      event: "Crossed 300+ client milestone" 
    },
    { 
      year: "2025", 
      event: "Creating cold storage revolution" 
    },
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
            <h2 className="text-4xl font-bold text-foreground mb-8">About Anand Bhatnagar</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                For over three decades, Anand Bhatnagar has been at the forefront of India's refrigeration 
                and cold storage revolution. What began as a passion for precision engineering has evolved 
                into a legacy of innovation that has transformed countless businesses across the nation.
              </p>
              <p>
                With extensive experience at Vadilal and collaborations with industry giants like Coca-Cola, 
                PepsiCo, Maaza, and Kinley, Anand developed a deep understanding of the unique challenges 
                facing India's cold chain industry. This expertise became the foundation for Temperature Guru.
              </p>
              <p>
                Today, Temperature Guru stands as a trusted name in cold storage design and humidity control 
                consultancy, with expertise spanning ice plants, chiller systems, specialty chambers, and 
                comprehensive AMC services across agriculture, food processing, and industrial sectors.
              </p>
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Our Journey</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
              
              {/* Timeline Items */}
              <div className="space-y-0">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className="relative pb-12 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full z-10" style={{ top: '32px' }}></div>
                    
                    {/* Card */}
                    <div className={`flex ${index % 2 === 0 ? 'justify-start pr-[52%]' : 'justify-end pl-[52%]'}`}>
                      <Card className="p-6 w-full bg-card border-border">
                        <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start justify-between gap-4`}>
                          <div className={index % 2 === 0 ? 'text-left' : 'text-right'}>
                            <p className="text-foreground text-base">{milestone.event}</p>
                          </div>
                          <div className="text-3xl font-bold text-foreground flex-shrink-0">{milestone.year}</div>
                        </div>
                      </Card>
                    </div>
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
