import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-maintenance.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Manutenção profissional de máquinas pesadas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-video-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="space-y-6 text-white">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">Vector</span>
                <span className="block text-accent">Precisão</span>
                <span className="block">em cada intervenção</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 max-w-2xl">
                Especialistas em manutenção mecânica, elétrica e hidráulica para grandes empresas. 
                Garantimos que cada máquina opere no seu máximo desempenho.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              {/* Botão atualizado para WhatsApp */}
              <Button variant="vector" size="xl" className="group" asChild>
                <a href="https://wa.me/351936660681" target="_blank" rel="noopener noreferrer">
                  Solicitar Proposta
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <Button 
                variant="whatsapp" 
                size="xl" 
                className="group"
                onClick={() => window.open('https://wa.me/351936660681', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Fale no WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-white/80">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-white/80">Máquinas Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">99%</div>
                <div className="text-white/80">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
