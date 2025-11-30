import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511951778099"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-3 bg-white text-slate-800 px-3 py-1 rounded shadow-md text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Orçamento Rápido
      </span>
    </a>
  );
};

export default WhatsAppButton;