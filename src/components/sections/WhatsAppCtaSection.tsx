'use client';

import React from 'react';
import { MessageCircle, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { BRAND_CONTACT } from '@/data/products';

interface WhatsAppCtaSectionProps {
  onOpenWhatsApp: () => void;
}

export function WhatsAppCtaSection({ onOpenWhatsApp }: WhatsAppCtaSectionProps) {
  return (
    <section
      id="contato"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 md:px-16 bg-noir-950 overflow-hidden border-t border-white/5"
      aria-label="Chamada para consulta direta via WhatsApp"
    >
      {/* Background Carmine Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-noir-carmine/15 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <DoubleBezelCard
          variant="carmine"
          className="p-3 sm:p-4"
          innerClassName="p-8 sm:p-14 lg:p-16 text-center space-y-8 bg-noir-950/90 relative overflow-hidden"
        >
          {/* Subtle Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-[0.2em] text-noir-carmine-hover mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
            Canal Direto // Atendimento Consultivo
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-noir-100 tracking-tight-editorial leading-[1.08]">
              Inicie Uma Conversa com Nosso Alfaiate de Tricô
            </h2>
            <p className="text-base sm:text-lg text-noir-300 font-light leading-relaxed">
              Tire dúvidas sobre caimento, medidas anatômicas específicas ou encomende uma peça com galga personalizada
              para sua estatura. Sem intermediários ou robôs.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenWhatsApp}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-noir-carmine hover:bg-noir-carmine-hover text-white font-mono text-xs uppercase tracking-widest font-semibold shadow-2xl shadow-noir-carmine/40 transition-all duration-300 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Abrir Consulta no WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Disclaimer & Transparency */}
          <div className="pt-6 border-t border-white/10 max-w-md mx-auto flex items-center justify-center gap-2 text-[11px] font-mono text-noir-500">
            <ShieldCheck className="w-4 h-4 text-noir-carmine shrink-0" />
            <span>Número configurado: {BRAND_CONTACT.whatsappDisplay} (Canal Demonstrativo)</span>
          </div>
        </DoubleBezelCard>
      </div>
    </section>
  );
}
