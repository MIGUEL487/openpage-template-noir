'use client';

import React from 'react';
import { MessageCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BRAND_CONTACT } from '@/data/products';

interface WhatsAppCtaSectionProps {
  onOpenWhatsApp: () => void;
}

export function WhatsAppCtaSection({ onOpenWhatsApp }: WhatsAppCtaSectionProps) {
  return (
    <section
      id="contato"
      className="relative w-full py-32 sm:py-44 px-6 sm:px-12 md:px-16 bg-noir-950 overflow-hidden border-t border-white/5"
      aria-label="Atendimento consultivo e encomendas privadas via WhatsApp"
    >
      {/* Subtle Ambient Vignette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-noir-carmine/10 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono uppercase tracking-[0.25em] text-noir-300">
          <span className="w-1.5 h-1.5 rounded-full bg-noir-carmine" />
          Concierge Privado // Atendimento Consultivo
        </div>

        {/* Heading */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium text-noir-100 tracking-tight-editorial leading-[1.08]">
            Inicie Sua Consulta com Nosso Alfaiate de Tricô
          </h2>
          <p className="text-base sm:text-lg text-noir-300 font-light leading-relaxed">
            Consulte proporções anatômicas sob medida, prazos de fiação dedicada ou tire dúvidas sobre o caimento de
            qualquer peça do acervo diretamente no WhatsApp.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenWhatsApp}
            className="group inline-flex items-center justify-center gap-3 px-9 py-5 rounded-full bg-noir-100 hover:bg-white text-noir-950 font-mono text-xs uppercase tracking-widest font-semibold shadow-2xl shadow-white/5 transition-all duration-300 active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 fill-noir-950 text-noir-950" />
            <span>Agendar Atendimento no WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Transparent Disclaimer */}
        <div className="pt-8 border-t border-white/10 max-w-md mx-auto flex items-center justify-center gap-2 text-[11px] font-mono text-noir-500">
          <ShieldCheck className="w-4 h-4 text-noir-carmine shrink-0" />
          <span>Canal Oficial: {BRAND_CONTACT.whatsappDisplay} (Ambiente Demonstrativo)</span>
        </div>
      </div>
    </section>
  );
}
