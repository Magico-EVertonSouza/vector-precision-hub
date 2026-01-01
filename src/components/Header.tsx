import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import vectorLogo from "@/assets/vector-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Clientes", href: "#clientes" },
    { label: "Contato", href: "#contato" },
  ];

  // Substitua pelo seu número do WhatsApp (com código do país)
  const whatsappLink = "https://wa.me/351936660681";

  return (
    <header className="bg-background border-b shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={vectorLogo} 
              alt="Vector Logo" 
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Vector</h1>
              <p className="text-xs text-muted-foreground -mt-1">Precisão em cada intervenção</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Button variant="vector" size="lg" className="group animate-bounce-subtle" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                Solicitar Proposta
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <Button variant="vector" size="lg" className="w-full group" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    Solicitar Proposta
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
