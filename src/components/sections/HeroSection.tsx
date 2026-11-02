'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Sparkles, MoveRight } from 'lucide-react';
import { FloatingGarmentCanvas } from '@/components/canvas/FloatingGarmentCanvas';
import { useLenisScroll } from '@/lib/lenis';

interface HeroSectionProps {
  onOpenWhatsApp: () => void;
}

export function HeroSection({ onOpenWhatsApp }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);

  const { scrollTo } = useLenisScroll();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.9,
        delay: 0.3,
      })
        .from(
          headlineRef.current?.querySelectorAll('.hero-line') || [],
          {
            opacity: 0,
            y: 45,
            stagger: 0.18,
            duration: 1.1,
          },
          '-=0.5'
        )
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.9,
          },
          '-=0.6'
        )
        .from(
          ctaGroupRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.9,
          },
          '-=0.6'
        )
        .from(
          canvasWrapRef.current,
          {
            opacity: 0,
            scale: 0.92,
            duration: 1.4,
          },
          '-=1.0'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 sm:pt-28 pb-12 px-6 sm:px-12 md:px-16 overflow-hidden bg-noir-950"
      aria-label="Apresentação NOIR KNIT"
    >
      {/* Background Lighting Vignette */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-noir-carmine/10 blur-[130px] pointer-events-none" />

      {/* Main Grid: Left Typography + Right 3D Viewport */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
          {/* Eyebrow Tag */}
          <div ref={badgeRef} className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-noir-300">
              <Sparkles className="w-3 h-3 text-noir-carmine" />
              Série Experimental 2026 · Heavy Gauge
            </span>
            <span className="hidden sm:inline text-[11px] font-mono text-noir-500 uppercase tracking-widest">
              Lã Merino & Alpaca
            </span>
          </div>

          {/* Monumental Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-bold text-noir-100 tracking-tight-editorial leading-[0.94]"
          >
            <span className="block hero-line">BEYOND THE</span>
            <span className="block hero-line text-transparent bg-clip-text bg-gradient-to-r from-noir-100 via-noir-200 to-noir-400">
              THREAD
            </span>
            <span className="block hero-line text-2xl sm:text-3xl md:text-4xl font-sans font-light tracking-widest text-noir-carmine-hover mt-3">
              ARQUITETURA DO TRICÔ
            </span>
          </h1>

          {/* Provocative Subtitle in Portuguese */}
          <div ref={descRef} className="space-y-3 max-w-xl">
            <p className="text-base sm:text-lg text-noir-300 font-light leading-relaxed">
              Esculturas têxteis forjadas na tensão entre o peso da lã crua e a anatomia do movimento. Uma recusa
              estética à malha perecível através de galgas monumentais e drapeados monolíticos.
            </p>
            <p className="text-xs sm:text-sm font-mono text-noir-500 tracking-wider">
              [ Peças artesanais de 1.1kg a 2.1kg · Confecção sob medida em teares de 1952 ]
            </p>
          </div>

          {/* CTA Actions */}
          <div ref={ctaGroupRef} className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollTo('#catalogo')}
              className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-full bg-noir-100 hover:bg-white text-noir-950 font-mono text-xs uppercase tracking-wider font-semibold shadow-xl shadow-white/5 transition-all duration-300 active:scale-[0.98]"
            >
              <span>Ver Catálogo</span>
              <span className="w-6 h-6 rounded-full bg-noir-950 text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                <MoveRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => scrollTo('#peca-3d')}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-noir-200 hover:text-white font-mono text-xs uppercase tracking-wider transition-all duration-300"
            >
              <span>Interagir com Peça 3D</span>
            </button>
          </div>
        </div>

        {/* Right Column: 3D Garment Viewport */}
        <div
          ref={canvasWrapRef}
          className="lg:col-span-5 relative w-full h-[380px] sm:h-[460px] lg:h-[580px] flex items-center justify-center"
        >
          {/* Subtle Frame Glow behind the Garment */}
          <div className="absolute inset-4 rounded-bezel-outer bg-gradient-to-b from-noir-carmine/10 to-transparent blur-2xl pointer-events-none" />

          {/* 3D Canvas Mount */}
          <div className="relative w-full h-full z-10">
            <FloatingGarmentCanvas colorHex="#1A1A1C" />
          </div>

          {/* 3D Canvas Overlay Hint */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center gap-2 px-3 py-1 rounded-full bg-noir-950/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-noir-400">
            <span className="w-1.5 h-1.5 rounded-full bg-noir-carmine animate-ping" />
            <span>Objeto 3D real · Role a página para transformar</span>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs font-mono text-noir-500 uppercase tracking-widest">
        <div className="flex items-center gap-6">
          <span>NOIR KNIT // TEMPLATE B</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">SÃO PAULO & SERRA GAÚCHA</span>
        </div>

        <button
          onClick={() => scrollTo('#manifesto')}
          className="flex items-center gap-2 text-noir-400 hover:text-noir-100 transition-colors group cursor-pointer"
          aria-label="Rolar para o manifesto"
        >
          <span>Descer para o Manifesto</span>
          <ArrowDown className="w-3.5 h-3.5 text-noir-carmine transition-transform group-hover:translate-y-1" />
        </button>
      </div>
    </section>
  );
}
