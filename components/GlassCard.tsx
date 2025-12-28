import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderGlow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  borderGlow = false 
}) => {
  return (
    <div 
      className={`
        relative
        bg-[#030303]/80
        backdrop-blur-2xl
        rounded-[32px]
        border border-white/[0.08]
        overflow-hidden
        transition-all duration-500 ease-out
        group
        ${hoverEffect ? 'hover:scale-[1.01] hover:-translate-y-1 hover:bg-[#080808]' : ''}
        ${borderGlow ? 'hover:border-white/20 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)]' : ''}
        ${className}
      `}
    >
      {/* Reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};