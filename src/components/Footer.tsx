import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import vectorLogo from "@/assets/vector-logo.png";

const Footer = () => {
  const whatsappLink = "https://wa.me/351936660681";

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={vectorLogo} 
                alt="Vector Logo" 
                className="h-8 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Vector</h3>
                <p className="text-sm text-white/70">Precisão em cada intervenção</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Especialistas em manutenção mecânica, elétrica e hidráulica. 
              Mantenha a sua empresa em movimento com quem entende de grandes máquinas.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Serviços</h4>
            <ul className="space-y-3 text-white/80">
              <li>Manutenção Mecânica</li>
              <li>Manutenção Elétrica</li>
              <li>Manutenção Hidráulica</li>
              <li>Revisões Preventivas</li>
              <li>Intervenções Corretivas</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Links Rápidos</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#inicio" className="hover:text-accent transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="#diferenciais" className="hover:text-accent transition-colors">Diferenciais</a></li>
              <li><a href="#contato" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-white/80">+351 936 660 681</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-white/80">contatovector.pt@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <span className="text-white/80">Portugal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-primary border-t border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">
              Vector – Precisão em cada intervenção?
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Mantenha a sua empresa em movimento com quem entende de grandes máquinas.
            </p>

            {/* Botão atualizado */}
            <Button variant="vector" size="xl" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Solicitar Proposta Agora
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary-dark border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2025 Vector. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-accent transition-colors">Termos de Serviço</a>
              <div className="flex space-x-4 ml-6">
                <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-accent transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
