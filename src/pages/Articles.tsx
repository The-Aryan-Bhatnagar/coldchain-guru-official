import { Card } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";
import controlPanel from "@/assets/gallery/control-panel.jpg";

const Articles = () => {
  const articles = [
    {
      title: "How Humidity Control Saves Crops & Energy",
      excerpt: "Discover how precise humidity control can reduce crop loss by up to 30% while cutting energy costs significantly. Learn the science behind optimal storage conditions.",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "Technology",
    },
    {
      title: "Revolutionizing Cold Storage Design in India",
      excerpt: "The cold storage industry in India is evolving rapidly. Explore the latest innovations in design, efficiency, and sustainability that are transforming the sector.",
      date: "March 10, 2025",
      readTime: "7 min read",
      category: "Innovation",
    },
    {
      title: "Common Mistakes in Cold Room Maintenance",
      excerpt: "Learn about the most frequent maintenance errors that lead to equipment failure and how to avoid them. Essential reading for facility managers.",
      date: "March 5, 2025",
      readTime: "6 min read",
      category: "Maintenance",
    },
    {
      title: "Future of Refrigeration Efficiency in India",
      excerpt: "What does the future hold for refrigeration technology? From AI-powered systems to eco-friendly refrigerants, explore upcoming trends in the industry.",
      date: "February 28, 2025",
      readTime: "8 min read",
      category: "Future Trends",
    },
    {
      title: "Optimizing Cold Storage for Kesar Mangoes",
      excerpt: "Kesar mangoes require specialized storage conditions. Learn the exact parameters needed to maintain quality and extend shelf life for this premium fruit.",
      date: "February 20, 2025",
      readTime: "5 min read",
      category: "Agriculture",
    },
    {
      title: "Government Subsidies for Cold Storage Projects",
      excerpt: "A comprehensive guide to available government schemes, eligibility criteria, and application processes for cold storage subsidies in India.",
      date: "February 15, 2025",
      readTime: "10 min read",
      category: "Business",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={controlPanel} 
            alt="Technical engineering and control systems" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
              Articles & Insights
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 animate-fade-up">
              Expert perspectives on cold storage and humidity control
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    {article.category}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>Anand Bhatnagar</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights, industry news, and expert tips on cold storage technology.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
