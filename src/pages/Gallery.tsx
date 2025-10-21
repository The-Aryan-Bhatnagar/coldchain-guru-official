import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-cold-storage.jpg";
import humidityImage from "@/assets/humidity-control.jpg";
import installationImage from "@/assets/installation.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      category: "Cold Storage",
      images: [
        {
          src: heroImage,
          title: "Modern Cold Storage Facility",
          description: "Large-scale cold storage installation for food processing industry",
        },
        {
          src: installationImage,
          title: "Industrial Refrigeration Setup",
          description: "Complete cold chain solution with advanced monitoring systems",
        },
      ],
    },
    {
      category: "Humidity Control",
      images: [
        {
          src: humidityImage,
          title: "Humidity Control Chamber",
          description: "Precision humidity control for agricultural products",
        },
      ],
    },
    {
      category: "Installations",
      images: [
        {
          src: installationImage,
          title: "Cold Room Installation",
          description: "Custom cold room design and installation project",
        },
        {
          src: heroImage,
          title: "Warehouse Cold Storage",
          description: "Multi-chamber cold storage facility for logistics company",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-up">
              Project Gallery
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 animate-fade-up">
              Explore Our Successful Cold Storage Installations
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="cold-storage">Cold Storage</TabsTrigger>
              <TabsTrigger value="humidity">Humidity</TabsTrigger>
              <TabsTrigger value="installations">Installations</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-12">
              {projects.map((project, idx) => (
                <div key={idx}>
                  <h2 className="text-3xl font-bold text-foreground mb-6">{project.category}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {project.images.map((image, index) => (
                      <Card
                        key={index}
                        className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        onClick={() => setSelectedImage(image.src)}
                      >
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground mb-2">{image.title}</h3>
                          <p className="text-sm text-muted-foreground">{image.description}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="cold-storage">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects[0].images.map((image, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{image.title}</h3>
                      <p className="text-sm text-muted-foreground">{image.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="humidity">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects[1].images.map((image, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{image.title}</h3>
                      <p className="text-sm text-muted-foreground">{image.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="installations">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects[2].images.map((image, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{image.title}</h3>
                      <p className="text-sm text-muted-foreground">{image.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-6xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
