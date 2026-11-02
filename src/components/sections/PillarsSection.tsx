'use client';

import React from 'react';
import { PILLARS } from '@/data/products';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';

export function PillarsSection() {
  return (
    <section
      id="pilares"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 md:px-16 bg-noir-950 overflow-hidden border-t border-white/5"
      aria-label="Pilares de construção do tricô NOIR"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-noir-carmine-hover">
            Técnica & Construtivismo Têxtil
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-noir-100 tracking-tight-editorial">
            Três Leis da Nossa Fiação
          </h2>
          <p className="text-sm sm:text-base text-noir-300 font-light">
            Como transformamos fibras selvagens em peças de impacto estrutural imutável.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PILLARS.map((p, idx) => (
            <DoubleBezelCard
              key={p.num}
              variant={idx === 0 ? 'carmine' : 'default'}
              className="h-full"
            >
              <div className="space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-4xl font-display font-light text-noir-400">
                      {p.num}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-noir-500">
                      Pilar Construtivo
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-noir-100 leading-snug">
                    {p.title}
                  </h3>
                  <h4 className="text-xs font-mono text-noir-carmine-hover uppercase tracking-wider">
                    {p.subtitle}
                  </h4>
                  <p className="text-sm text-noir-300 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-noir-500">
                  Validação de Tear 1952
                </div>
              </div>
            </DoubleBezelCard>
          ))}
        </div>
      </div>
    </section>
  );
}
