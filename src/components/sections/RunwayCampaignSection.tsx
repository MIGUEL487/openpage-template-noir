'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { formatCurrency } from '@/lib/utils';

interface RunwayCampaignSectionProps {
  onSelectProductForWhatsApp: (product: Product, colorName?: string) => void;
}

export function RunwayCampaignSection({ onSelectProductForWhatsApp }: RunwayCampaignSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const coatProduct = PRODUCTS[3]; // Sobretudo Brutalista Gauge Zero

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from('.campaign-parallax', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="campanha"
      ref={sectionRef}
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 md:px-16 bg-noir-950 overflow-hidden border-t border-white/5"
      aria-label="Campanha destaque da coleção NOIR KNIT"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-noir-carmine-hover">
              Campanha Destaque // Série Especial
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-noir-100 tracking-tight-editorial">
              O Sobretudo Monolítico em Lã Crioula
            </h2>
            <p className="text-sm sm:text-base text-noir-300 font-light leading-relaxed">
              Uma investigação radical da gravidade. Com 2.10 kg de lã bruta entrelaçada manualmente, a peça foi
              projetada para atuar como abrigo térmico e presença escultórica incontestável.
            </p>
          </div>

          <div className="font-mono text-xs text-noir-500 uppercase tracking-widest">
            Edição Limitada a 12 Unidades
          </div>
        </div>

        {/* Cinematic Split Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Large Image (7 cols) */}
          <div className="lg:col-span-7 relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] rounded-bezel-outer overflow-hidden border border-white/10 bg-noir-900 group">
            <div
              className="campaign-parallax w-full h-[120%] -top-[10%] absolute inset-x-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 filter grayscale contrast-115 brightness-95"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-75" />

            {/* Float Badge */}
            <div className="absolute top-6 left-6 z-10 px-3.5 py-1.5 rounded-full bg-noir-950/80 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-noir-100">
              Gauge Zero · 2.10 kg
            </div>
          </div>

          {/* Editorial Content (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-mono text-noir-carmine-hover uppercase tracking-widest">
                Ato Principal // Coleção Inverno
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-medium text-noir-100 leading-tight">
                Brutalismo Têxtil em Movimento Contínuo
              </h3>
              <p className="text-sm sm:text-base text-noir-300 font-light leading-relaxed">
                Cada exemplar leva 42 horas ininterruptas de tear manual mecânico. A barra bruta recebe corte direto com
                selagem por calor, dispensando bainhas convencionais e conferindo caimento rígido que flutua a cada
                passo.
              </p>
            </div>

            {/* Spec List */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-noir-500 uppercase tracking-wider text-[10px]">Fiação:</span>
                <span className="block text-noir-100 font-medium">90% Lã Crioula, 10% Cânhamo</span>
              </div>
              <div className="space-y-1">
                <span className="text-noir-500 uppercase tracking-wider text-[10px]">Massa:</span>
                <span className="block text-noir-100 font-medium">2.10 kg (Monolítica)</span>
              </div>
              <div className="space-y-1">
                <span className="text-noir-500 uppercase tracking-wider text-[10px]">Referência:</span>
                <span className="block text-noir-100 font-medium">{formatCurrency(coatProduct.price)} (Demo)</span>
              </div>
              <div className="space-y-1">
                <span className="text-noir-500 uppercase tracking-wider text-[10px]">Produção:</span>
                <span className="block text-noir-100 font-medium">Sob Medida</span>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onSelectProductForWhatsApp(coatProduct, 'Preto Profundo')}
              className="group flex items-center justify-between w-full py-4 px-6 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 text-noir-100 font-mono text-xs uppercase tracking-wider transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-noir-carmine" />
                <span>Consultar Esta Peça no WhatsApp</span>
              </div>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
