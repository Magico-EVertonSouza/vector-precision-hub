import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Zap, Droplets, Shield, AlertTriangle, ArrowRight, Info } from "lucide-react";
import { useState } from "react";
import ServiceModal from "./ServiceModal";

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Wrench,
      title: "Manutenção Mecânica",
      description: "Diagnóstico completo, reparos precisos e revisão total de sistemas mecânicos.",
      features: ["Diagnóstico avançado", "Reparos especializados", "Revisão completa", "Peças originais"],
      fullDescription: "Nossa equipe especializada em manutenção mecânica oferece soluções completas para todos os tipos de máquinas industriais. Utilizamos tecnologia avançada de diagnóstico para identificar problemas antes que se tornem críticos.",
      benefits: [
        "Redução de custos operacionais",
        "Maior vida útil dos equipamentos", 
        "Minimização de paradas não programadas",
        "Melhoria da eficiência produtiva"
      ],
      process: [
        "Inspeção inicial e diagnóstico completo",
        "Análise técnica e orçamento detalhado",
        "Execução dos reparos com peças originais",
        "Testes de funcionamento e certificação"
      ]
    },
    {
      icon: Zap,
      title: "Manutenção Elétrica", 
      description: "Intervenção especializada em sistemas elétricos de máquinas industriais.",
      features: ["Sistemas elétricos", "Painéis de controle", "Automação", "Segurança elétrica"],
      fullDescription: "Especialistas em sistemas elétricos industriais, oferecemos manutenção preventiva e corretiva em painéis de controle, sistemas de automação e toda a infraestrutura elétrica das suas máquinas.",
      benefits: [
        "Segurança elétrica garantida",
        "Conformidade com normas técnicas",
        "Redução de falhas elétricas",
        "Otimização do consumo energético"
      ],
      process: [
        "Análise do sistema elétrico existente",
        "Identificação de problemas e riscos",
        "Intervenção com equipamentos certificados",
        "Testes de segurança e performance"
      ]
    },
    {
      icon: Droplets,
      title: "Manutenção Hidráulica",
      description: "Especialistas em sistemas hidráulicos complexos e de alta pressão.",
      features: ["Sistemas hidráulicos", "Bombas e válvulas", "Cilindros", "Circuitos complexos"],
      fullDescription: "Domínio completo em sistemas hidráulicos industriais, desde bombas e válvulas até circuitos complexos de alta pressão. Nossa equipe garante o funcionamento perfeito dos seus sistemas hidráulicos.",
      benefits: [
        "Máxima pressão e performance",
        "Redução de vazamentos",
        "Economia de fluidos hidráulicos",
        "Maior precisão nos movimentos"
      ],
      process: [
        "Teste de pressão e vazão",
        "Diagnóstico de vazamentos e desgastes",
        "Substituição de componentes defeituosos",
        "Calibração e ajuste fino do sistema"
      ]
    },
    {
      icon: Shield,
      title: "Revisões Preventivas",
      description: "Programas personalizados que prolongam a vida útil das suas máquinas.",
      features: ["Planos preventivos", "Cronogramas flexíveis", "Relatórios detalhados", "Otimização"],
      fullDescription: "Desenvolvemos programas de manutenção preventiva personalizados para cada tipo de equipamento, garantindo máxima disponibilidade e menor custo total de operação.",
      benefits: [
        "Redução drástica de paradas não programadas",
        "Maior vida útil dos equipamentos",
        "Planejamento de custos de manutenção",
        "Relatórios de performance detalhados"
      ],
      process: [
        "Análise do histórico dos equipamentos",
        "Desenvolvimento do plano preventivo",
        "Execução das manutenções programadas",
        "Monitoramento e ajustes contínuos"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Intervenções Corretivas",
      description: "Resposta rápida para minimizar tempo de paragem e perdas operacionais.",
      features: ["Resposta 24h", "Diagnóstico rápido", "Reparação urgente", "Suporte contínuo"],
      fullDescription: "Serviço de emergência disponível 24/7 para intervenções corretivas urgentes. Nossa equipe está sempre pronta para minimizar o tempo de paragem das suas operações.",
      benefits: [
        "Resposta rápida em emergências",
        "Minimização de perdas operacionais",
        "Diagnóstico preciso e eficiente",
        "Suporte técnico contínuo"
      ],
      process: [
        "Chamada de emergência e mobilização",
        "Diagnóstico rápido no local",
        "Execução imediata dos reparos",
        "Acompanhamento pós-intervenção"
      ]
    }
  ];

  const openModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

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

                {/* CTAs */}
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300"
                    onClick={() => openModal(service)}
                  >
                    <Info className="mr-2 h-4 w-4" />
                    Saiba Mais
                  </Button>
                  <Button variant="vector" className="w-full">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
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

      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </section>
  );
};

export default Services;