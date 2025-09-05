import { CheckCircle } from "lucide-react";

const Timeline = () => {
  const timelineEvents = [
    {
      year: "2010",
      title: "Fundação",
      description: "União de dois profissionais experientes - Dori Edson Junior e Everton Souza"
    },
    {
      year: "2015",
      title: "Crescimento",
      description: "Expansão para atendimento de grandes empresas industriais"
    },
    {
      year: "2020",
      title: "Especialização",
      description: "Foco total em manutenção de máquinas pesadas e equipamentos industriais"
    },
    {
      year: "2024",
      title: "Presente",
      description: "Mais de 500 máquinas atendidas com 99% de satisfação dos clientes"
    }
  ];

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent to-accent-light" />
      
      <div className="space-y-8">
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative flex items-start space-x-6">
            {/* Timeline dot */}
            <div className="relative z-10">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0 pb-8">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl font-bold text-accent">{event.year}</span>
                <h4 className="text-lg font-semibold text-primary">{event.title}</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;