import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2, Sparkles } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ChatMessage } from '../types';
import { generateAssistantResponse } from '../services/geminiService';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'E aí, gamer! Sou o Nuvify AI. Precisa de recomendação de jogo ou ajuda com o lag zero?',
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateAssistantResponse(input);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <GlassCard className="w-[350px] h-[500px] flex flex-col p-0 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 border-violet-500/30">
          {/* Header */}
          <div className="bg-white/5 p-4 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="bg-violet-500/20 p-2 rounded-lg">
                <Sparkles size={18} className="text-violet-300" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">Nuvify AI</h3>
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                    msg.role === 'user'
                      ? 'bg-violet-600 text-white rounded-br-sm'
                      : 'bg-slate-700/50 text-slate-200 rounded-bl-sm border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-700/50 rounded-2xl p-3 rounded-bl-sm flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin text-violet-400" />
                  <span className="text-xs text-slate-400">Digitando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 bg-black/20">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Pergunte sobre jogos..."
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl py-3 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-violet-500/50 transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-2 top-2 p-1.5 bg-violet-600 rounded-lg text-white hover:bg-violet-500 disabled:opacity-50 transition-colors"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30 hover:scale-110 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-75 group-hover:opacity-100 duration-1000"></span>
        {isOpen ? <X size={24} /> : <Bot size={28} />}
      </button>
    </div>
  );
};