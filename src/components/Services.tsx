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
  title: "Manutenção Mecânica de Equipamentos de Elevação",
  description: "Manutenção mecânica especializada para plataformas elevatórias e empilhadores, garantindo desempenho, segurança e continuidade operacional.",
  features: [
    "Diagnóstico técnico completo e preciso",
    "Reparações mecânicas especializadas",
    "Revisão total dos sistemas mecânicos",
    "Utilização de peças originais ou certificadas"
  ],
  fullDescription: "Nossa equipe utiliza tecnologia avançada de diagnóstico para identificar falhas de forma precisa e atuar antes que se tornem críticas, garantindo máxima performance e segurança dos equipamentos de elevação.",
  benefits: [
    "Redução dos custos operacionais",
    "Aumento da vida útil dos equipamentos",
    "Minimização de paradas não programadas",
    "Maior eficiência e segurança operacional"
  ],
  process: [
    "Inspeção inicial e diagnóstico completo",
    "Análise técnica com orçamento detalhado",
    "Execução dos reparos com peças originais",
    "Testes de funcionamento, validação e certificação"
  ]
},


{
  icon: Zap,
  title: "Manutenção Elétrica de Equipamentos de Elevação",
  description: "Manutenção elétrica especializada para plataformas elevatórias e empilhadores, garantindo segurança, desempenho e operação contínua.",
  features: [
    "Diagnóstico elétrico completo e preciso",
    "Intervenções preventivas e corretivas especializadas",
    "Revisão de painéis de controle e sistemas elétricos",
    "Utilização de componentes certificados e originais"
  ],
  fullDescription: "Nossa equipe realiza manutenção elétrica com equipamentos certificados, identificando e corrigindo falhas antes que comprometam a operação. Garantimos máxima segurança e desempenho dos sistemas elétricos dos seus equipamentos de elevação.",
  benefits: [
    "Segurança elétrica garantida",
    "Conformidade com normas técnicas",
    "Redução de falhas elétricas",
    "Otimização do consumo energético"
  ],
  process: [
    "Análise detalhada do sistema elétrico do equipamento",
    "Identificação de problemas e riscos potenciais",
    "Intervenção com equipamentos e componentes certificados",
    "Testes de segurança e performance elétrica"
  ]
},
    {
  icon: Droplets,
  title: "Manutenção Hidráulica de Equipamentos de Elevação",
  description: "Manutenção hidráulica especializada em plataformas elevatórias e empilhadores, garantindo desempenho, segurança e movimentos precisos.",
  features: [
    "Diagnóstico completo de sistemas hidráulicos",
    "Reparação de bombas, válvulas e cilindros",
    "Manutenção de circuitos hidráulicos de alta pressão",
    "Utilização de componentes certificados e originais"
  ],
  fullDescription: "Nossa equipe realiza manutenção hidráulica detalhada em equipamentos de elevação, garantindo funcionamento perfeito dos sistemas, precisão nos movimentos e segurança operacional.",
  benefits: [
    "Máxima pressão e performance",
    "Redução de vazamentos",
    "Economia de fluido hidráulico",
    "Maior precisão e controle nos movimentos"
  ],
  process: [
    "Teste de pressão e vazão dos sistemas",
    "Diagnóstico de vazamentos e desgastes",
    "Substituição de componentes defeituosos com peças certificadas",
    "Calibração e ajuste fino do sistema hidráulico"
  ]
},

   {
  icon: Shield,
  title: "Revisões Preventivas de Equipamentos de Elevação",
  description: "Programas de manutenção preventiva especializados para plataformas elevatórias e empilhadores, garantindo operação segura e prolongando a vida útil dos equipamentos.",
  features: [
    "Planos preventivos personalizados",
    "Cronogramas de manutenção flexíveis",
    "Relatórios detalhados de performance",
    "Otimização da operação e segurança"
  ],
  fullDescription: "Desenvolvemos programas de manutenção preventiva específicos para cada equipamento de elevação, assegurando máxima disponibilidade, segurança operacional e menor custo total de manutenção.",
  benefits: [
    "Redução de paradas não programadas",
    "Maior vida útil dos equipamentos",
    "Planejamento eficiente dos custos de manutenção",
    "Relatórios detalhados de desempenho e operação"
  ],
  process: [
    "Análise do histórico e condição dos equipamentos",
    "Desenvolvimento do plano preventivo personalizado",
    "Execução das manutenções programadas",
    "Monitoramento contínuo e ajustes conforme necessidade"
  ]
},

    {
  icon: AlertTriangle,
  title: "Intervenções Corretivas em Equipamentos de Elevação",
  description: "Resposta rápida para minimizar o tempo de paragem e garantir operação segura de plataformas elevatórias e empilhadores.",
  features: [
    "Resposta emergencial 24/7",
    "Diagnóstico rápido e preciso",
    "Reparação urgente de sistemas críticos",
    "Suporte técnico contínuo"
  ],
  fullDescription: "Serviço de emergência disponível 24/7 para intervenções corretivas em equipamentos de elevação. Nossa equipe altamente qualificada atua rapidamente para minimizar paradas e garantir a segurança operacional.",
  benefits: [
    "Resposta imediata em situações críticas",
    "Minimização de perdas operacionais",
    "Diagnóstico preciso e eficiente",
    "Suporte técnico contínuo durante e após a intervenção"
  ],
  process: [
    "Chamada de emergência e mobilização da equipe",
    "Diagnóstico rápido no local do equipamento",
    "Execução imediata dos reparos com componentes certificados",
    "Acompanhamento pós-intervenção e validação da operação"
  ]
},

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