import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ChatWidget } from './components/ChatWidget';
import { CookieConsent } from './components/CookieConsent';
import { GlassCard } from './components/GlassCard';
import { ViewState, Game } from './types';
import { Zap, ChevronRight, Star, Cpu, Gamepad2, Play, Server, Shield, Globe, MousePointer2, Loader2 } from 'lucide-react';

// Vídeos de Stock gratuitos para simular gameplays de alta qualidade
const FEATURED_GAMES: Game[] = [
  { 
    id: 1, 
    title: 'CYBER CITY', 
    genre: 'Open World', 
    image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1061930/header.jpg?t=1576616446', 
    videoUrl: 'https://videos.pexels.com/video-files/3121459/3121459-uhd_2560_1440_24fps.mp4', 
    rating: 4.9 
  },
  { 
    id: 2, 
    title: 'ELDEN SOULS', 
    genre: 'RPG', 
    image: 'https://www.hardware.com.br/wp-content/uploads/static/wp/2022/03/16/2-4.jpg', 
    videoUrl: 'https://videos.pexels.com/video-files/4239649/4239649-uhd_2560_1440_25fps.mp4',
    rating: 4.9 
  },
  { 
    id: 3, 
    title: 'GTA V', 
    genre: 'Open World', 
    image: 'https://imgproxy.eneba.games/NPTcOweCXlSks45Mi9CxL3zxKAw6GwRaH7J_niMLheE/rs:fit:350/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9O/S3FOdDNGczlvbkNo/YlBoZlRaR1lCbVB1/ZGNhMjlGV0ZuNHlZ/NmJ3UkNZLmpwZWc', 
    videoUrl: 'https://videos.pexels.com/video-files/3205799/3205799-uhd_2560_1440_25fps.mp4',
    rating: 4.9 
  },
  { 
    id: 4, 
    title: 'WAR ZONE', 
    genre: 'Battle Royale', 
    image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962663/54bd6a40eb3759aca46966aadd4c4d0d84b2713e/header.jpg?t=1766022778', 
    videoUrl: 'https://videos.pexels.com/video-files/4462993/4462993-uhd_2560_1440_25fps.mp4',
    rating: 4.5 
  }
];

const PLANS = [
  {
    name: "CORE",
    price: "89",
    specs: ["1080p 60fps", "GTX 1080 Eqv", "4h Session", "Standard Queue"],
    highlight: false
  },
  {
    name: "PRO",
    price: "149",
    specs: ["1440p 120fps", "RTX 3080 Eqv", "8h Session", "Priority Queue"],
    highlight: true
  },
  {
    name: "ULTRA",
    price: "199",
    specs: ["4K 144fps", "RTX 4090 Eqv", "Unlimited", "Zero Queue"],
    highlight: false
  }
];

export default function App() {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      
      {/* Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] animate-grid-flow"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <Navbar currentView={view} onChangeView={setView} />

      <main className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* HERO SECTION - GOD TIER */}
        {view === ViewState.HOME && (
          <section className="flex flex-col items-center justify-center min-h-[60vh] text-center relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 blur-[150px] rounded-full"></div>
            
            <div className="relative z-10 animate-in fade-in zoom-in-95 duration-1000 flex flex-col items-center">
               <div className="mb-8 relative group">
                 {/* Logo Glow Effect */}
                 <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                 {/* Main Logo Image */}
                 <img 
                   src="https://cdn.discordapp.com/attachments/1423657846360506398/1454587217187045669/Principal.png?ex=6951a169&is=69504fe9&hm=2971b8d665e2533971b4f32144cf09a507d5119ce1ff4c9401cd9b7e3f6522aa&" 
                   alt="Nuvify Logo" 
                   className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl shadow-2xl shadow-black border border-white/10 object-cover"
                   onError={(e) => {
                     e.currentTarget.style.display = 'none'; // Fallback se a imagem não carregar
                   }}
                 />
                 {/* Fallback Icon se a imagem falhar (invisível por padrão se a imagem carregar) */}
                 <div className="hidden w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-black border border-white/10 items-center justify-center">
                    <Gamepad2 size={64} className="text-white" />
                 </div>
               </div>

               <div className="mb-6 flex justify-center">
                 <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono font-bold tracking-[0.3em] text-slate-400 uppercase">
                   Next Gen Cloud Protocol
                 </span>
               </div>
               
               <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.85] mix-blend-difference">
                 NUVIFY<br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-800">JUST PLAY.</span>
               </h1>

               <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
                 Acesse um <span className="text-white font-bold">PC Gamer de R$ 20.000</span> diretamente pelo seu navegador. 
                 Latência invisível. Gráficos máximos.
               </p>

               <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                 <button 
                   onClick={() => setView(ViewState.PRICING)}
                   className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-lg tracking-tight overflow-hidden hover:scale-105 transition-transform"
                 >
                   <span className="relative z-10 flex items-center gap-2">
                     INICIAR SISTEMA <ChevronRight size={18} />
                   </span>
                   <div className="absolute inset-0 bg-slate-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                 </button>

                 <button 
                   onClick={() => setView(ViewState.GAMES)}
                   className="group px-10 py-5 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-colors"
                 >
                   EXPLORAR
                 </button>
               </div>
            </div>
          </section>
        )}

        {/* STATS HUD */}
        {view === ViewState.HOME && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-white/5 py-10 bg-black/50 backdrop-blur-sm">
             {[
               { label: "LATENCY", val: "< 15ms" },
               { label: "UPTIME", val: "99.9%" },
               { label: "FPS", val: "Up to 240" },
               { label: "RESOLUTION", val: "Up to 4K" }
             ].map((stat, i) => (
               <div key={i} className="text-center">
                 <div className="text-[10px] font-mono text-slate-500 tracking-widest mb-1">{stat.label}</div>
                 <div className="text-2xl md:text-3xl font-black text-white">{stat.val}</div>
               </div>
             ))}
          </div>
        )}

        {/* FEATURES - DARK CARDS */}
        {view === ViewState.HOME && (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard borderGlow className="p-8 flex flex-col justify-between h-[300px]">
               <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-6">
                 <Zap className="text-white" />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-white mb-2">Instância Dedicada</h3>
                 <p className="text-slate-400 leading-relaxed">Hardware isolado para cada usuário. Sem compartilhamento de recursos. Potência bruta garantida.</p>
               </div>
            </GlassCard>
            <GlassCard borderGlow className="p-8 flex flex-col justify-between h-[300px] bg-gradient-to-b from-[#0a0a0a] to-black">
               <div className="w-12 h-12 bg-violet-600/20 rounded-2xl flex items-center justify-center border border-violet-500/20 mb-6">
                 <Cpu className="text-violet-400" />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-white mb-2">RTX On Demand</h3>
                 <p className="text-slate-400 leading-relaxed">Ative Ray Tracing e DLSS 3.5 com um clique. Visual de cinema renderizado em tempo real.</p>
               </div>
            </GlassCard>
            <GlassCard borderGlow className="p-8 flex flex-col justify-between h-[300px]">
               <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-6">
                 <Shield className="text-white" />
               </div>
               <div>
                 <h3 className="text-2xl font-bold text-white mb-2">Criptografia Total</h3>
                 <p className="text-slate-400 leading-relaxed">Seus dados e inputs são encriptados de ponta a ponta. Jogue com total privacidade.</p>
               </div>
            </GlassCard>
          </section>
        )}

        {/* GAMES GRID COM VÍDEOS DE BACKGROUND */}
        {(view === ViewState.GAMES || view === ViewState.HOME) && (
          <section className="min-h-[600px]">
             <div className="flex items-center justify-between mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
               <div>
                 <h2 className="text-5xl font-black tracking-tighter text-white mb-2">LIBRARY</h2>
                 <p className="text-slate-500 font-mono text-sm">/// ACCESSING DATABASE...</p>
               </div>
               {view === ViewState.HOME && (
                 <button onClick={() => setView(ViewState.GAMES)} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white text-white hover:text-black transition-all">
                    <ChevronRight />
                 </button>
               )}
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {FEATURED_GAMES.map((game, i) => (
                 <div 
                    key={game.id} 
                    className="group relative h-[400px] rounded-[30px] overflow-hidden bg-[#050505] border border-white/5 cursor-pointer animate-in fade-in slide-in-from-bottom-10 fill-mode-both"
                    style={{ animationDelay: `${i * 150}ms`, animationDuration: '800ms' }}
                 >
                    {/* VIDEO BACKGROUND LAYER */}
                    <div className="absolute inset-0 z-0">
                      {game.videoUrl ? (
                         <video 
                           autoPlay 
                           muted 
                           loop 
                           playsInline 
                           className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                           poster={game.image}
                         >
                           <source src={game.videoUrl} type="video/mp4" />
                         </video>
                      ) : (
                        <div className={`absolute inset-0 bg-gradient-to-br from-violet-900/20 to-black`}></div>
                      )}
                    </div>
                    
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 transition-opacity duration-500"></div>
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                       <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                         <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            <span className="px-2 py-1 bg-white/10 rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/10">{game.genre}</span>
                            <div className="flex items-center gap-1 text-yellow-400">
                              <Star size={12} fill="currentColor" />
                              <span className="text-xs font-bold">{game.rating}</span>
                            </div>
                         </div>
                         <h3 className="text-4xl font-black text-white leading-none mb-1 uppercase italic drop-shadow-lg">{game.title}</h3>
                         <div className="h-1 w-12 bg-violet-500 rounded-full mt-4 group-hover:w-full transition-all duration-700 box-shadow-glow"></div>
                       </div>
                    </div>

                    {/* Play Icon - Centered */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                       <Play fill="white" className="ml-1 text-white" />
                    </div>
                 </div>
               ))}
             </div>
          </section>
        )}

        {/* PRICING - HARDWARE STYLE */}
        {(view === ViewState.PRICING || view === ViewState.HOME) && (
          <section className="animate-in slide-in-from-bottom-10 fade-in duration-700">
             <div className="text-center mb-20">
               <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6">HARDWARE</h2>
               <p className="text-slate-500">Selecione sua especificação de máquina.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
               {PLANS.map((plan, i) => (
                 <GlassCard 
                    key={i} 
                    borderGlow 
                    className={`
                      relative p-8 flex flex-col
                      ${plan.highlight ? 'h-[500px] border-violet-500/30 bg-[#080808]' : 'h-[420px] bg-black/40'}
                    `}
                 >
                    {plan.highlight && (
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
                    )}
                    
                    <div className="mb-auto">
                      <h3 className="text-2xl font-black tracking-widest text-white mb-2">{plan.name}</h3>
                      <div className="text-5xl font-black text-white mb-1">
                        <span className="text-lg align-top text-slate-500">R$</span>{plan.price}
                      </div>
                      <div className="text-xs font-mono text-slate-500 uppercase">Mensal</div>
                    </div>

                    <div className="space-y-6 my-10">
                      {plan.specs.map((spec, s) => (
                        <div key={s} className="flex items-center gap-4 group">
                          <div className={`w-2 h-2 rounded-sm ${plan.highlight ? 'bg-violet-500' : 'bg-slate-700'} group-hover:scale-150 transition-transform`}></div>
                          <span className="text-sm font-medium text-slate-300">{spec}</span>
                        </div>
                      ))}
                    </div>

                    <button className={`
                      w-full py-4 rounded-xl font-bold tracking-widest text-xs uppercase transition-all
                      ${plan.highlight 
                        ? 'bg-white text-black hover:bg-slate-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}
                    `}>
                      Deploy Machine
                    </button>
                 </GlassCard>
               ))}
             </div>
          </section>
        )}

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h4 className="font-black text-2xl tracking-tighter text-white mb-2">NUVIFY.IO</h4>
            <p className="text-slate-600 text-sm">The future of gaming is headless.</p>
          </div>
          <div className="flex gap-8">
            {['Terms', 'Privacy', 'Status', 'Contact'].map(link => (
              <a key={link} href="#" className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <ChatWidget />
      <CookieConsent />
    </div>
  );
}