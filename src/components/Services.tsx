import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Zap, Droplets, Shield, AlertTriangle, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Manutenção Mecânica",
      description: "Diagnóstico completo, reparos precisos e revisão total de sistemas mecânicos.",
      features: ["Diagnóstico avançado", "Reparos especializados", "Revisão completa", "Peças originais"]
    },
    {
      icon: Zap,
      title: "Manutenção Elétrica", 
      description: "Intervenção especializada em sistemas elétricos de máquinas industriais.",
      features: ["Sistemas elétricos", "Painéis de controle", "Automação", "Segurança elétrica"]
    },
    {
      icon: Droplets,
      title: "Manutenção Hidráulica",
      description: "Especialistas em sistemas hidráulicos complexos e de alta pressão.",
      features: ["Sistemas hidráulicos", "Bombas e válvulas", "Cilindros", "Circuitos complexos"]
    },
    {
      icon: Shield,
      title: "Revisões Preventivas",
      description: "Programas personalizados que prolongam a vida útil das suas máquinas.",
      features: ["Planos preventivos", "Cronogramas flexíveis", "Relatórios detalhados", "Otimização"]
    },
    {
      icon: AlertTriangle,
      title: "Intervenções Corretivas",
      description: "Resposta rápida para minimizar tempo de paragem e perdas operacionais.",
      features: ["Resposta 24h", "Diagnóstico rápido", "Reparação urgente", "Suporte contínuo"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            Nossos Serviços
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em manutenção industrial para garantir o máximo desempenho das suas máquinas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="space-y-6">
                {/* Icon */}
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary to-primary-dark text-white">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Nossa equipa técnica está pronta para desenvolver a solução ideal para as necessidades específicas da sua empresa.
            </p>
            <Button variant="secondary" size="lg">
              Contactar Especialista
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;