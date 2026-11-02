'use client';

import React, { useState } from 'react';
import { Sparkles, Sliders, Layers, Info } from 'lucide-react';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';

export function TextileArchitectureSection() {
  const [activeMode, setActiveMode] = useState<'luz-carmim' | 'penumbra' | 'mineral'>('luz-carmim');

  return (
    <section
      id="materia"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 md:px-16 bg-noir-950 overflow-hidden border-t border-white/5"
      aria-label="Anatomia da matéria têxtil e escultura em tricô"
    >
      {/* Editorial Watermark Background */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 text-[12vw] font-display font-bold text-white/[0.015] select-none pointer-events-none tracking-tighter">
        19.5μm
      </div>

      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-noir-carmine-hover">
              Anatomia da Matéria // Escultura Têxtil
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-noir-100 tracking-tight-editorial">
              O Peso da Lã como Forma no Espaço
            </h2>
            <p className="text-sm sm:text-base text-noir-300 font-light leading-relaxed">
              Diferente de tecidos planos cortados e costurados, o tricô de galga pesada é construído laçada a laçada. A
              peça ganha tridimensionalidade a partir da sua própria tensão mecânica.
            </p>
          </div>

          {/* Mode Selector */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono">
            <button
              onClick={() => setActiveMode('luz-carmim')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                activeMode === 'luz-carmim'
                  ? 'bg-noir-carmine text-white'
                  : 'text-noir-400 hover:text-white'
              }`}
            >
              Luz Rasante Carmim
            </button>
            <button
              onClick={() => setActiveMode('penumbra')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                activeMode === 'penumbra'
                  ? 'bg-white/15 text-white'
                  : 'text-noir-400 hover:text-white'
              }`}
            >
              Penumbra Mineral
            </button>
          </div>
        </div>

        {/* Asymmetrical Bento Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Card 1: Micron & Fiber Density */}
          <div className="md:col-span-4">
            <DoubleBezelCard variant="default" className="h-full">
              <div className="space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-noir-500">
                    Micragem da Fibra
                  </span>
                  <div className="text-4xl sm:text-5xl font-display font-bold text-noir-100">
                    19.5<span className="text-xl text-noir-carmine">μm</span>
                  </div>
                  <h3 className="text-base font-display text-noir-200">
                    Lã Merino Virgem Não-Alvejada
                  </h3>
                  <p className="text-xs sm:text-sm text-noir-400 font-light leading-relaxed">
                    A espessura de 19.5 micra proporciona o ponto de equilíbrio ideal: maciez no toque direto com a pele
                    e rigidez elástica suficiente para sustentar golas altas esculturais sem cair.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-noir-500">
                  Origem: Pastagens do Extremo Sul
                </div>
              </div>
            </DoubleBezelCard>
          </div>

          {/* Card 2: 3D Atmospheric Depth Demonstration Note */}
          <div className="md:col-span-8">
            <DoubleBezelCard variant="glass" className="h-full">
              <div className="space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-noir-carmine-hover">
                      Camada de Profundidade 3D
                    </span>
                    <span className="text-[11px] font-mono text-noir-500">
                      Three.js Ambient Cloth
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-noir-100 leading-snug">
                    Drapeado Orgânico em Baixa Opacidade
                  </h3>

                  <p className="text-sm sm:text-base text-noir-300 font-light leading-relaxed">
                    No NOIR, a terceira dimensão não é um mostruário isolado de produto: ela atua como um horizonte
                    escuro e vivo que reage silenciosamente ao scroll do visitante, evocando as ondulações do tecido na
                    escuridão do ateliê.
                  </p>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs font-mono text-noir-400">
                    <Info className="w-4 h-4 text-noir-carmine shrink-0 mt-0.5" />
                    <span>
                      <strong>Ponto de Extensão Técnica:</strong> O componente de fundo suporta a substituição direta
                      por um arquivo <code className="text-noir-200">.GLB/.GLTF</code> de modelo de peça customizada
                      fornecida pelo cliente.
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5 text-[11px] font-mono text-noir-400">
                  <div>
                    <span className="text-noir-500 block">Opacidade 3D:</span>
                    <span className="text-noir-200">28% Difusa</span>
                  </div>
                  <div>
                    <span className="text-noir-500 block">Shader:</span>
                    <span className="text-noir-200">PBR Sheen Velvet</span>
                  </div>
                  <div>
                    <span className="text-noir-500 block">Controle:</span>
                    <span className="text-noir-200">ScrollTrigger Scrub</span>
                  </div>
                </div>
              </div>
            </DoubleBezelCard>
          </div>
        </div>
      </div>
    </section>
  );
}
