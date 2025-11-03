import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LucideIcon } from "lucide-react";

interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription?: string;
  features?: string[];
  images?: string[];
}

interface ServiceDetailDialogProps {
  service: ServiceDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ServiceDetailDialog = ({ service, open, onOpenChange }: ServiceDetailDialogProps) => {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-primary/10 rounded-full">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <DialogTitle className="text-3xl">{service.title}</DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">{service.description}</p>
          
          {service.fullDescription && (
            <div className="prose prose-sm max-w-none">
              <p className="text-foreground">{service.fullDescription}</p>
            </div>
          )}

          {service.features && service.features.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.images && service.images.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {service.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden border border-border">
                    <img 
                      src={image} 
                      alt={`${service.title} - ${index + 1}`}
                      className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailDialog;
