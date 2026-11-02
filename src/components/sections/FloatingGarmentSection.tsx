'use client';

import React, { useState } from 'react';
import { Eye, Layers, Sparkles, MessageCircle, Maximize2, Compass } from 'lucide-react';
import { FloatingGarmentCanvas } from '@/components/canvas/FloatingGarmentCanvas';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { PRODUCTS } from '@/data/products';

interface FloatingGarmentSectionProps {
  onSelectProductForWhatsApp: (product: typeof PRODUCTS[0], colorName?: string) => void;
}

export function FloatingGarmentSection({ onSelectProductForWhatsApp }: FloatingGarmentSectionProps) {
  const [activeColor, setActiveColor] = useState<{ name: string; hex: string }>({
    name: 'Grafite Mineral',
    hex: '#1A1A1C',
  });
  const [wireframe, setWireframe] = useState(false);
  const [activePreset, setActivePreset] = useState<'front' | 'collar' | 'side' | 'macro'>('front');

  const mainProduct = PRODUCTS[0]; // Suéter Escultural Gola Alta

  const colorOptions = [
    { name: 'Grafite Mineral', hex: '#1A1A1C', border: '#333' },
    { name: 'Sangue Oxidado', hex: '#631417', border: '#9B2428' },
    { name: 'Osso Cru', hex: '#D8D4CC', border: '#FFF' },
  ];

  const presets = [
    { id: 'front' as const, label: 'Silhueta Total' },
    { id: 'collar' as const, label: 'Gola Alta 16cm' },
    { id: 'side' as const, label: 'Perfil Lateral' },
    { id: 'macro' as const, label: 'Macro da Trama' },
  ];

  return (
    <section
      id="peca-3d"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 md:px-16 bg-noir-950 overflow-hidden border-t border-white/5"
      aria-label="Experiência tridimensional da peça de roupa"
    >
      {/* Background Lighting Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-noir-carmine/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-noir-carmine/15 border border-noir-carmine/30 text-[10px] font-mono uppercase tracking-[0.2em] text-noir-carmine-hover">
              <Sparkles className="w-3 h-3" />
              The Floating Garment // Experiência 3D Real
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-noir-100 tracking-tight-editorial">
              O Suéter Escultural em Três Dimensões
            </h2>
            <p className="text-sm sm:text-base text-noir-300 font-light leading-relaxed">
              Examine a volumetria da malha pesada, a espessura da gola canelada e o drapeado dos ombros caídos em tempo
              real. Alterne pontos de vista, cores do fio e inspecione a geometria do tricô.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline font-mono text-xs text-noir-500 uppercase tracking-widest">
              Renderizado via WebGL PBR
            </span>
          </div>
        </div>

        {/* 3D Interactive Viewport with Double-Bezel Framing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main 3D Canvas Box (8 Cols) */}
          <div className="lg:col-span-8 relative">
            <DoubleBezelCard
              variant="glass"
              className="p-2 sm:p-3"
              innerClassName="p-0 sm:p-0 min-h-[500px] sm:min-h-[600px] lg:min-h-[680px] relative bg-noir-950"
            >
              {/* Actual Three.js WebGL Canvas */}
              <div className="w-full h-full absolute inset-0">
                <FloatingGarmentCanvas
                  colorHex={activeColor.hex}
                  wireframe={wireframe}
                  activePreset={activePreset}
                />
              </div>

              {/* Top Viewport Floating Controls */}
              <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
                {/* Angle Presets */}
                <div className="flex items-center gap-1.5 p-1 rounded-full bg-noir-900/80 backdrop-blur-md border border-white/10 pointer-events-auto">
                  {presets.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setActivePreset(p.id)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider transition-all duration-300 ${
                        activePreset === p.id
                          ? 'bg-noir-carmine text-white shadow-md shadow-noir-carmine/30'
                          : 'text-noir-400 hover:text-noir-100 hover:bg-white/5'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                {/* Wireframe toggle */}
                <button
                  onClick={() => setWireframe(!wireframe)}
                  className={`pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-mono uppercase tracking-wider transition-all duration-300 ${
                    wireframe
                      ? 'bg-white text-noir-950 border-white'
                      : 'bg-noir-900/80 backdrop-blur-md border-white/10 text-noir-300 hover:text-white'
                  }`}
                  aria-pressed={wireframe}
                  title="Alternar modo de malha estrutural"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{wireframe ? 'Modo Sólido' : 'Modo Poligonal'}</span>
                </button>
              </div>

              {/* Bottom Instructions Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none text-[11px] font-mono text-noir-400">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-noir-900/80 backdrop-blur-md border border-white/10">
                  <Compass className="w-3.5 h-3.5 text-noir-carmine animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Arraste com o cursor para orbitar e inclinar</span>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-noir-900/80 backdrop-blur-md border border-white/10">
                  <span>FOV: 42° · PBR Sheen Velvet</span>
                </div>
              </div>
            </DoubleBezelCard>
          </div>

          {/* Right Column: Customization & Technical Specs (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Color Selection Card */}
            <div className="p-6 rounded-bezel-sm-outer bg-white/[0.02] border border-white/10 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-noir-400">
                Tonalidade do Fio 3D
              </span>
              <div className="space-y-2">
                {colorOptions.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setActiveColor(c)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-300 ${
                      activeColor.name === c.name
                        ? 'bg-white/[0.08] border-noir-carmine text-noir-100 shadow-md'
                        : 'bg-transparent border-white/5 text-noir-400 hover:border-white/15 hover:text-noir-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-5 h-5 rounded-full border border-white/20 shadow-inner"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span className="text-xs font-mono uppercase tracking-wider">{c.name}</span>
                    </div>
                    {activeColor.name === c.name && (
                      <span className="text-[10px] font-mono text-noir-carmine-hover uppercase tracking-widest">
                        Ativo
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="p-6 rounded-bezel-sm-outer bg-white/[0.02] border border-white/10 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-noir-400">
                Ficha Técnica da Escultura
              </span>
              <ul className="space-y-3 text-xs font-mono text-noir-300 divide-y divide-white/5">
                <li className="pt-2 flex justify-between">
                  <span className="text-noir-500">Galga da Malha:</span>
                  <span className="text-noir-100 font-semibold">Gauge 01 (Heavy Knit)</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span className="text-noir-500">Massa Líquida:</span>
                  <span className="text-noir-100 font-semibold">1.45 kg</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span className="text-noir-500">Construção:</span>
                  <span className="text-noir-100">Tubular sem costura</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span className="text-noir-500">Gola:</span>
                  <span className="text-noir-100">Canelada alta de 16 cm</span>
                </li>
              </ul>
            </div>

            {/* WhatsApp CTA for this exact 3D piece */}
            <button
              onClick={() => onSelectProductForWhatsApp(mainProduct, activeColor.name)}
              className="w-full group flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-noir-carmine hover:bg-noir-carmine-hover text-white font-mono text-xs uppercase tracking-wider shadow-lg shadow-noir-carmine/25 transition-all duration-300 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Consultar Esta Peça via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
