'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        scrollTrigger: {
          trigger: headlineRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 1.0,
        ease: 'power3.out',
      });

      gsap.from(contentRef.current?.children || [], {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 45,
        stagger: 0.18,
        duration: 1.0,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 md:px-16 bg-noir-950 overflow-hidden border-t border-white/5"
      aria-label="Manifesto editorial NOIR KNIT"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Eyebrow & Main Statement */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-noir-carmine-hover">
            Manifesto // Antimanual do Fio
          </div>

          <h2
            ref={headlineRef}
            className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-noir-100 tracking-tight-editorial leading-[1.08]"
          >
            O tricô não é refúgio passivo.
            <br />
            <span className="text-noir-400">É arquitetura viva de tensão, gravidade e recusa.</span>
          </h2>
        </div>

        {/* Asymmetrical Bento Grid with Double-Bezel Cards */}
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: Heavy Emphasis on Craft & Tension */}
          <div className="md:col-span-7">
            <DoubleBezelCard variant="carmine" className="h-full">
              <div className="space-y-6">
                <span className="text-[11px] font-mono uppercase tracking-widest text-noir-carmine-hover">
                  Princípio Fundamental 01
                </span>
                <p className="text-lg sm:text-xl font-light text-noir-200 leading-relaxed">
                  Cada laçada é uma decisão de volume; cada fibra crua, uma recusa deliberada ao descartável. A NOIR
                  nasce do atrito entre a rusticidade brutal do tear mecânico e a precisão escultórica da alfaiataria.
                </p>
                <div className="pt-4 border-t border-white/10 text-xs font-mono text-noir-400 flex items-center justify-between">
                  <span>Densidade de malha 3x superior</span>
                  <span>Fiação gaúcha autoral</span>
                </div>
              </div>
            </DoubleBezelCard>
          </div>

          {/* Card 2: Brutalist Metric */}
          <div className="md:col-span-5">
            <DoubleBezelCard variant="default" className="h-full">
              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-noir-500">
                  Parâmetro Estrutural
                </span>
                <div className="text-5xl sm:text-6xl font-display font-bold text-noir-100">1.45<span className="text-2xl text-noir-carmine">kg</span></div>
                <p className="text-sm text-noir-300 font-light leading-normal">
                  Peso médio por peça da Série I. A sensação ao vestir é de um escudo têxtil que ancora a postura e redefine
                  o ritmo do corpo no espaço.
                </p>
              </div>
            </DoubleBezelCard>
          </div>

          {/* Card 3: Color Philosophy */}
          <div className="md:col-span-4">
            <DoubleBezelCard variant="glass" className="h-full">
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-noir-500">
                  Cartela de Pigmentação
                </span>
                <h3 className="text-xl font-display text-noir-100">Oxidação & Geologia</h3>
                <p className="text-xs sm:text-sm text-noir-400 font-light leading-relaxed">
                  Basalto triturado, carvão mineral e vermelho oxidado de cochonilha. Nenhuma cor resulta de tingimento
                  sintético fluorescente.
                </p>
              </div>
            </DoubleBezelCard>
          </div>

          {/* Card 4: Body and Silence */}
          <div className="md:col-span-8">
            <DoubleBezelCard variant="default" className="h-full">
              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-noir-500">
                  Princípio Fundamental 02
                </span>
                <p className="text-base sm:text-lg font-light text-noir-300 leading-relaxed">
                  Não criamos roupas para a aprovação instantânea da massa digital. Construímos silhuetas para quem
                  compreende o silêncio de um bom tecido e prefere a presença monumental de um tricô que sobrevive a
                  décadas de uso contínuo.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-noir-carmine-hover">
                  <span>/// PEÇAS NUMERADAS</span>
                  <span>/// SEM COLEÇÕES SAZONAIS DESCARTÁVEIS</span>
                </div>
              </div>
            </DoubleBezelCard>
          </div>
        </div>
      </div>
    </section>
  );
}
