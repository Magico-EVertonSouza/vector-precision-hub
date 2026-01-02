import { Card } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";
import teamImage from "@/assets/team-work.jpg";
import Timeline from "./Timeline";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary">
                Sobre a Vector
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
   <p>
  A Vector nasceu da parceria de dois amigos com visão em <span className="font-semibold text-primary">manutenção de equipamentos de elevação</span>, unindo <span className="font-semibold text-primary">planejamento estratégico</span> e <span className="font-semibold text-primary">execução prática</span>. 
  Desde então, a empresa se dedica a oferecer serviços que garantem <span className="font-semibold text-primary">segurança, desempenho e confiabilidade</span> para plataformas elevatórias, empilhadores e outros equipamentos críticos.
</p>

<p>
  Combinando <span className="font-semibold text-primary">gestão eficiente</span> e <span className="font-semibold text-primary">intervenções precisas</span>, a Vector entrega soluções rápidas e estratégicas, minimizando paragens e assegurando que sua operação funcione sempre sem interrupções.
</p>

<p className="font-semibold text-primary text-xl">
  Nosso compromisso é com <span className="font-semibold text-primary">qualidade, eficiência e confiança</span> em cada serviço prestado.
</p>


            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="p-6 text-center border-0 shadow-lg">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Experiência</h3>
                <p className="text-sm text-muted-foreground">Profissionais especializados</p>
              </Card>
              
              <Card className="p-6 text-center border-0 shadow-lg">
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Precisão</h3>
                <p className="text-sm text-muted-foreground">Cada intervenção é única</p>
              </Card>
              
              <Card className="p-6 text-center border-0 shadow-lg">
                <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-primary mb-2">Confiança</h3>
                <p className="text-sm text-muted-foreground">Parceria duradoura</p>
              </Card>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={teamImage}
                alt="Fundadores da Vector - Dori Edson Junior e Everton Souza"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold text-primary">Fundadores</h4>
                  <p className="text-sm text-muted-foreground">Dori Edson Junior & Everton Souza</p>
                </div>
              </div>
            </div>
            
 
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-20 bg-background rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center space-y-4 mb-12">
            <h3 className="text-3xl font-bold text-primary">Nossa Jornada</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça os marcos importantes da Vector ao longo dos anos
            </p>
          </div>
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default About;