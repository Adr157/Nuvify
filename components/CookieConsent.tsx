import React, { useEffect, useState } from 'react';
import { GlassCard } from './GlassCard';
import { Cookie, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se já foi aceito (usando localStorage para persistência)
    const consent = localStorage.getItem('nuvify-cookie-consent');
    if (!consent) {
      // Pequeno delay para animação de entrada ficar fluida
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nuvify-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] flex justify-center animate-in slide-in-from-bottom-10 fade-in duration-700">
      <GlassCard className="max-w-2xl w-full flex flex-col md:flex-row items-center gap-6 !p-6 !bg-[#0a0a0a]/90 !backdrop-blur-xl border-violet-500/20 shadow-[0_0_50px_-10px_rgba(0,0,0,0.8)]">
        <div className="bg-violet-500/10 p-3 rounded-2xl flex-shrink-0">
          <Cookie size={32} className="text-violet-400" />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-bold text-white mb-1">Usamos Cookies 🍪</h4>
          <p className="text-slate-400 text-sm leading-relaxed">
            Para garantir que a Nuvify rode <strong>liso e sem lag</strong>, usamos cookies para otimizar sua experiência e salvar suas preferências.
          </p>
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none px-6 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg"
          >
            Aceitar e Jogar
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-3 bg-white/5 text-white rounded-xl hover:bg-white/10 transition-colors border border-white/10"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>
      </GlassCard>
    </div>
  );
};