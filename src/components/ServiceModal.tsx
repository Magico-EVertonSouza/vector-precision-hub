import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    fullDescription: string;
    benefits: string[];
    process: string[];
  } | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {service.title}
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            {service.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
          <div>
            <p className="text-foreground leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary mb-3">Benefícios:</h4>
            <ul className="space-y-2">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-primary mb-3">Nosso Processo:</h4>
            <ol className="space-y-2">
              {service.process.map((step, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="pt-4 border-t">
            <Button variant="vector" size="lg" className="w-full group">
              Solicitar Orçamento para {service.title}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;