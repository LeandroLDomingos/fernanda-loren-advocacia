import { MessageCircle } from 'lucide-react';
import { CONTACT } from '../constants';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${encodeURIComponent(CONTACT.WHATSAPP_MESSAGE)}`;
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-50 size-16 bg-primary text-accent flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 active:scale-95 border border-accent/20 rounded-full group"
    >
      <MessageCircle className="size-8 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
    </a>
  );
}
