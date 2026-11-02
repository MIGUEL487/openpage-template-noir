'use client';

import React from 'react';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';

export function BrandStorySection() {
  return (
    <section
      id="atelie"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 md:px-16 bg-noir-950 overflow-hidden border-t border-white/5"
      aria-label="A história e ateliê da NOIR KNIT"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Mosaic */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-bezel-outer overflow-hidden border border-white/10 bg-noir-900 shadow-2xl">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=1200&q=80)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-noir-200 font-mono text-xs">
                <span className="text-noir-carmine-hover font-semibold">Tear Manual Mecânico Nº 4</span>
                <p className="text-noir-400 text-[11px] mt-0.5">Adaptado para fiação de galga pesada de 1.45kg</p>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 p-4 rounded-bezel-sm-outer bg-noir-900 border border-white/15 shadow-2xl max-w-[220px]">
              <span className="text-2xl font-display font-bold text-noir-100">1952</span>
              <p className="text-[11px] font-mono text-noir-400 mt-1 leading-tight">
                Ano de fabricação dos teares readaptados para nossas laçadas monumentais.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Copy in Portuguese */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-noir-carmine-hover">
                A Forja do Fio // Ateliê & Origem
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-noir-100 tracking-tight-editorial leading-tight">
                Onde o Peso Encontra a Arquitetura da Roupa
              </h2>
            </div>

            <div className="space-y-6 text-noir-300 font-light text-base sm:text-lg leading-relaxed">
              <p>
                A NOIR KNIT não nasceu em escritórios corporativos ou pranchetas de tendências sazonais. Nasceu do
                encontro fortuito com um ateliê de teares industriais desativados nos vales da Serra Gaúcha, onde antigas
                máquinas de madeira e ferro fundido repousavam em silêncio.
              </p>

              <p>
                Reconfiguramos essas engrenagens para trabalhar com fios de espessura proibitiva para a indústria moderna:
                lã merino crua de 19.5 micra proveniente de pastagens regenerativas no extremo sul e alpaca selvagem
                escovada à mão.
              </p>

              <p>
                O resultado é uma silhueta que não se desfaz, não perde o prumo e não pede desculpas pelo seu peso. Cada
                peça requer mais de trinta horas de atenção contínua entre a urdidura, o entrelaçamento e a lavagem pós-tear
                com água mineral pura para fixação da lanolina protetora.
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 font-mono">
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-display font-bold text-noir-100">0%</span>
                <span className="block text-[11px] text-noir-400 uppercase tracking-wider">
                  Fibras Sintéticas ou Poliéster
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-display font-bold text-noir-100">18 Dias</span>
                <span className="block text-[11px] text-noir-400 uppercase tracking-wider">
                  Tempo Médio de Fiação por Encomenda
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-display font-bold text-noir-100">100%</span>
                <span className="block text-[11px] text-noir-400 uppercase tracking-wider">
                  Biodegradável em Solo Orgânico
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
