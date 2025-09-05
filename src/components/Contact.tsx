import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    bestTime: "",
    message: ""
  });

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send to contacto@vector.pt
    toast({
      title: "Pedido enviado com sucesso!",
      description: "Entraremos em contacto brevemente.",
    });
    
    setFormData({
      name: "",
      company: "",
      phone: "",
      bestTime: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">
            Entre em Contacto
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para garantir o máximo desempenho das suas máquinas? Contacte-nos hoje mesmo.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            {/* WhatsApp - Destaque */}
            <Card className="p-6 bg-gradient-to-r from-green-600 to-green-500 text-white border-0">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">WhatsApp Direto</h3>
                  <p className="text-white/90 mb-4">Fale connosco agora mesmo</p>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => window.open('https://wa.me/351910000000', '_blank')}
                  >
                    Abrir WhatsApp
                  </Button>
                </div>
              </div>
            </Card>

            {/* Contact Info Cards */}
            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Telefone</h3>
                  <p className="text-muted-foreground">+351 910 000 000</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Email</h3>
                  <p className="text-muted-foreground">contacto@vector.pt</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Horário</h3>
                  <p className="text-muted-foreground">Segunda a Sexta: 8h - 18h</p>
                  <p className="text-muted-foreground">Emergências: 24h</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-0 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Agendar Ligação
                  </h3>
                  <p className="text-muted-foreground">
                    Preencha o formulário e entraremos em contacto no melhor horário para si.
                  </p>
                </div>

                <form onSubmit={handleSubmitForm} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+351 000 000 000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bestTime">Melhor Horário</Label>
                      <Input
                        id="bestTime"
                        name="bestTime"
                        value={formData.bestTime}
                        onChange={handleInputChange}
                        placeholder="Ex: Manhã, tarde, 14h-16h"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Descreva brevemente suas necessidades de manutenção..."
                    />
                  </div>

                  <Button type="submit" variant="vector" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Agendar Ligação
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-gradient-to-r from-primary to-primary-dark text-white">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de uma intervenção urgente?
            </h3>
            <p className="text-white/90 mb-6">
              Nossa equipa está disponível 24h para emergências
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open('https://wa.me/351910000000', '_blank')}
            >
              Contacto de Emergência
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;