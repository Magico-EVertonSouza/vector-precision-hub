import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/351910000000?text=Olá! Gostaria de solicitar informações sobre os serviços da Vector.', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppFloat;