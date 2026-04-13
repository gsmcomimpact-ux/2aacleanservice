import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '22792719148';
  const message = 'Bonjour 2AA Clean Net, je souhaiterais obtenir un devis pour vos services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group animate-bounce"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Besoin d'aide ?
      </span>
    </a>
  );
}
