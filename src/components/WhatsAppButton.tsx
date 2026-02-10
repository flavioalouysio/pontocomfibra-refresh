import { MessageCircle } from "lucide-react";
import { WHATSAPP_BASE_URL } from "@/data/siteData";

export function WhatsAppButton() {
  return (
    <a
      href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os planos da .COM Fibra.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
