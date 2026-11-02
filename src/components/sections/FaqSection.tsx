'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '@/data/products';

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 md:px-16 bg-noir-950 overflow-hidden border-t border-white/5"
      aria-label="Perguntas frequentes e diretrizes técnicas"
    >
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-noir-carmine-hover">
            <HelpCircle className="w-3 h-3" />
            Diretrizes & Respostas Técnicas
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-noir-100 tracking-tight-editorial">
            Esclarecimentos do Ateliê
          </h2>
          <p className="text-sm sm:text-base text-noir-300 font-light">
            Informações sobre o funcionamento de encomendas, cuidados com as fibras e a proposta da NOIR KNIT.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-6 sm:py-8 transition-colors">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-6 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl font-display font-medium text-noir-100 group-hover:text-white transition-colors">
                    {item.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full border border-white/15 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-white/10 text-white' : 'text-noir-400 group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 text-sm sm:text-base text-noir-300 font-light leading-relaxed animate-fade-in pr-12">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
