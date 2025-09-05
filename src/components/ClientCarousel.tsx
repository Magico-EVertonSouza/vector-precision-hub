import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

const ClientCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clientLogos = [
    { name: "CONSTRUTORA ABC", sector: "Construção Civil" },
    { name: "INDÚSTRIA XYZ", sector: "Metalúrgica" }, 
    { name: "LOGÍSTICA PRO", sector: "Transporte" },
    { name: "ENERGIA PLUS", sector: "Energético" },
    { name: "OBRAS PRIME", sector: "Construção" },
    { name: "INDUSTRIAL TECH", sector: "Tecnologia" },
    { name: "MEGA CONSTRUÇÕES", sector: "Construção Civil" },
    { name: "PORTO LOGÍSTICA", sector: "Portuário" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(clientLogos.length / 4));
    }, 3000);

    return () => clearInterval(interval);
  }, [clientLogos.length]);

  const getVisibleClients = () => {
    const startIndex = currentIndex * 4;
    return clientLogos.slice(startIndex, startIndex + 4);
  };

  return (
    <div className="space-y-6">
      <h4 className="font-semibold text-primary text-center">Empresas que confiam na Vector:</h4>
      
      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: Math.ceil(clientLogos.length / 4) }).map((_, groupIndex) => (
            <div key={groupIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                {clientLogos.slice(groupIndex * 4, (groupIndex + 1) * 4).map((client, index) => (
                  <Card key={index} className="p-4 text-center border border-border hover:border-accent transition-colors group">
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
                        {client.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {client.sector}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(clientLogos.length / 4) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-accent' : 'bg-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientCarousel;