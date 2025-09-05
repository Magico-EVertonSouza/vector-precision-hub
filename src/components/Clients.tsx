import { Card } from "@/components/ui/card";
import { Building2, Truck, Factory, Zap } from "lucide-react";
import servicesImage from "@/assets/services-collage.jpg";

const Clients = () => {
  const clientTypes = [
    {
      icon: Building2,
      title: "Construtoras",
      description: "Manutenção de equipamentos de construção civil e obras"
    },
    {
      icon: Factory,
      title: "Indústrias",
      description: "Sistemas industriais complexos e linhas de produção"
    },
    {
      icon: Truck,
      title: "Logística",
      description: "Equipamentos de movimentação e transporte de cargas"
    },
    {
      icon: Zap,
      title: "Energia",
      description: "Sistemas energéticos e infraestrutura industrial"
    }
  ];

  // Placeholder client logos - in real scenario these would be actual client logos
  const clientLogos = [
    "CONSTRUTORA ABC",
    "INDÚSTRIA XYZ", 
    "LOGÍSTICA PRO",
    "ENERGIA PLUS",
    "OBRAS PRIME",
    "INDUSTRIAL TECH"
  ];

  return (
    <section id="clientes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            Nossos Clientes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Parceiros de confiança em diversos setores da indústria portuguesa
          </p>
        </div>

        {/* Client Types */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {clientTypes.map((type, index) => (
            <Card key={index} className="group p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {type.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Portfolio Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={servicesImage}
                alt="Portfólio de serviços Vector"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-primary">
                Portfólio de Excelência
              </h3>
              <p className="text-lg text-muted-foreground">
                Mais de 500 máquinas atendidas com sucesso, garantindo operações 
                contínuas e máximo desempenho para nossos parceiros.
              </p>
            </div>

            {/* Client Logos Grid */}
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Empresas que confiam na Vector:</h4>
              <div className="grid grid-cols-2 gap-4">
                {clientLogos.map((client, index) => (
                  <Card key={index} className="p-4 text-center border border-border hover:border-accent transition-colors">
                    <div className="text-sm font-medium text-muted-foreground">
                      {client}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500+</div>
                <div className="text-sm text-muted-foreground">Máquinas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">99%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;