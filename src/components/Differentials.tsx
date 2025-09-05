import { Card } from "@/components/ui/card";
import { Target, Users, Clock, Building, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Differentials = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => prev.includes(index) ? prev : [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
  const differentials = [
    {
      icon: Target,
      title: "Precisão em cada intervenção",
      description: "Cada serviço é executado com máxima precisão técnica e atenção aos detalhes."
    },
    {
      icon: Users,
      title: "Equipa técnica especializada",
      description: "Profissionais altamente qualificados com vasta experiência em manutenção industrial."
    },
    {
      icon: Clock,
      title: "Atendimento rápido e confiável",
      description: "Resposta imediata e intervenções programadas para minimizar tempo de paragem."
    },
    {
      icon: Building,
      title: "Foco em grandes empresas",
      description: "Especialização em necessidades complexas de construtoras, indústrias e logística."
    },
    {
      icon: CheckCircle,
      title: "Transparência e profissionalismo",
      description: "Comunicação clara, relatórios detalhados e compromisso com resultados."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Nossos Diferenciais
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto" />
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            O que nos torna a escolha ideal para manutenção industrial de excelência
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              ref={(el) => itemRefs.current[index] = el}
              data-index={index}
              className={`transform transition-all duration-700 ${
                visibleItems.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="group p-8 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="space-y-6 text-center">
                  {/* Icon */}
                  <div className="relative mx-auto w-fit">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/25">
                      <item.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-white">
              A Vector é sua parceira estratégica
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Compromisso, precisão e confiança são os pilares que nos movem para garantir 
              o máximo desempenho das suas máquinas e o sucesso da sua operação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;