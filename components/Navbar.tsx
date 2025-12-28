import React, { useState } from 'react';
import { Gamepad2, Menu, X, Disc, XCircle, ArrowRight } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const navItems = [
    { label: 'HQ', value: ViewState.HOME },
    { label: 'GAMES', value: ViewState.GAMES },
    { label: 'SERVER', value: ViewState.PRICING },
  ];

  const handleDiscordLogin = () => {
    setIsConnecting(true);
    // Simula uma conexão
    setTimeout(() => {
      setIsConnecting(false);
      // Aqui entraria a lógica real do OAuth2
      alert("Conexão com Discord em manutenção. Tente novamente em breve.");
    }, 2000);
  };

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="w-full max-w-5xl bg-[#050505]/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl px-6 py-3 shadow-2xl shadow-black/50 flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onChangeView(ViewState.HOME)}
          >
            <div className="bg-white/5 p-1 rounded-xl group-hover:scale-105 transition-transform border border-white/5">
               <img src="https://cdn.discordapp.com/attachments/1423657846360506398/1454587217187045669/Principal.png?ex=6951a169&is=69504fe9&hm=2971b8d665e2533971b4f32144cf09a507d5119ce1ff4c9401cd9b7e3f6522aa&" alt="Nuvify" className="w-6 h-6 object-contain rounded-lg" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white font-mono">NVFY<span className="text-violet-500">.</span>IO</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-black/20 p-1 rounded-xl border border-white/5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => onChangeView(item.value)}
                className={`px-5 py-2 rounded-lg text-[11px] font-bold font-mono tracking-wider transition-all duration-300 ${
                  (item.label === 'HQ' && currentView === ViewState.HOME) || 
                  (item.label === 'GAMES' && currentView === ViewState.GAMES) ||
                  (item.label === 'SERVER' && currentView === ViewState.PRICING)
                    ? 'bg-white/10 text-white shadow-inner border border-white/5' 
                    : 'text-slate-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/20 text-[#5865F2] hover:bg-[#5865F2] hover:text-white transition-all duration-300 font-bold text-xs"
            >
              LOGIN
            </button>
            
            <button 
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* LOGIN MODAL (Discord Style) */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setIsLoginOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-md bg-[#101010] border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_-10px_rgba(88,101,242,0.3)] animate-in zoom-in-95 duration-300 overflow-hidden">
             
             {/* Glow Effect */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#5865F2] blur-[100px] opacity-20 pointer-events-none"></div>

             <div className="relative z-10 flex flex-col items-center text-center">
                <button 
                  onClick={() => setIsLoginOpen(false)}
                  className="absolute top-0 right-0 p-2 text-slate-500 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="w-16 h-16 bg-[#5865F2] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#5865F2]/20">
                  <Gamepad2 size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">BEM-VINDO</h3>
                <p className="text-slate-400 text-sm mb-8">Conecte-se para acessar sua instância.</p>

                <button 
                  onClick={handleDiscordLogin}
                  disabled={isConnecting}
                  className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                   {isConnecting ? (
                     <>
                       <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                       <span>CONECTANDO...</span>
                     </>
                   ) : (
                     <>
                       {/* Discord Icon SVG path */}
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="transition-transform group-hover:rotate-12">
                          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
                       </svg>
                       <span>Entrar com Discord</span>
                     </>
                   )}
                </button>
                
                <p className="mt-6 text-xs text-slate-600 font-mono">
                  SERVIDOR SEGURO v2.0
                </p>
             </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black md:hidden pt-32 px-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  onChangeView(item.value);
                  setIsOpen(false);
                }}
                className="text-left p-6 rounded-2xl bg-[#080808] border border-white/5 text-white font-black text-2xl hover:border-violet-500/50 transition-colors uppercase tracking-tighter"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                setIsLoginOpen(true);
              }}
              className="mt-4 p-6 rounded-2xl bg-[#5865F2] text-white font-black text-xl text-center uppercase tracking-tighter"
            >
              Login Discord
            </button>
          </div>
        </div>
      )}
    </>
  );
};