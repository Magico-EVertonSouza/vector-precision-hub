import { Card } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";
import teamImage from "@/assets/team-work.jpg";

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
                A Vector nasceu da união de dois profissionais experientes – 
                <span className="font-semibold text-primary"> Dori Edson Junior</span> e 
                <span className="font-semibold text-primary"> Everton Souza</span> – 
                com a missão de oferecer serviços técnicos de alta qualidade para grandes empresas.
              </p>
              
              <p>
                Com experiência em mecânica, elétrica e hidráulica, a Vector é hoje uma 
                parceira estratégica para construtoras, indústrias e empresas de logística, 
                garantindo que cada máquina opere sempre no seu máximo desempenho.
              </p>
              
              <p className="font-semibold text-primary text-xl">
                Compromisso, precisão e confiança são os pilares que nos movem.
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

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={teamImage}
                alt="Equipa técnica Vector em ação"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-8 -left-8 p-6 bg-white shadow-2xl max-w-xs">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">Vector</div>
                <p className="text-accent font-semibold">Precisão em cada intervenção</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;