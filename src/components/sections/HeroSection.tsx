'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, MoveRight } from 'lucide-react';
import { useLenisScroll } from '@/lib/lenis';

interface HeroSectionProps {
  onOpenWhatsApp: () => void;
}

export function HeroSection({ onOpenWhatsApp }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);

  const { scrollTo } = useLenisScroll();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Image frame expansion & scale reveal
      tl.from(imageFrameRef.current, {
        opacity: 0,
        scale: 1.08,
        duration: 1.6,
        ease: 'power2.out',
      })
        // 2. Metadata eyebrow tag
        .from(
          metaRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.9,
          },
          '-=1.0'
        )
        // 3. Masked title reveal
        .from(
          headlineRef.current?.querySelectorAll('.hero-char') || [],
          {
            opacity: 0,
            y: 50,
            stagger: 0.08,
            duration: 1.1,
          },
          '-=0.7'
        )
        // 4. Subtitle & CTAs
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 24,
            duration: 0.9,
          },
          '-=0.6'
        )
        .from(
          ctaGroupRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          '-=0.6'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-6 sm:px-12 md:px-16 overflow-hidden bg-noir-950"
      aria-label="Campanha NOIR KNIT — Beyond the Thread"
    >
      {/* Ambient Radial Vignette for Lighting Depth */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-noir-carmine/10 blur-[140px] pointer-events-none z-0" />

      {/* Main Campaign Editorial Composition */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center flex-1 my-auto max-w-7xl mx-auto w-full">
        {/* Left Column: Typography & Narrative (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
          {/* Eyebrow / Campaign Meta */}
          <div ref={metaRef} className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-noir-carmine" />
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-noir-300">
              NOIR KNIT · CAMPANHA DE INVERNO 2026/2027
            </span>
            <span className="hidden sm:inline text-noir-600 font-mono text-xs">/</span>
            <span className="hidden sm:inline text-[11px] font-mono text-noir-400 uppercase tracking-widest">
              Série I: Armaduras Macias
            </span>
          </div>

          {/* Monumental Editorial Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-medium text-noir-100 tracking-tight-editorial leading-[0.92]"
          >
            <span className="block hero-char">BEYOND</span>
            <span className="block hero-char text-transparent bg-clip-text bg-gradient-to-r from-noir-100 via-noir-200 to-noir-400">
              THE THREAD
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl font-sans font-light tracking-[0.18em] text-noir-carmine-hover mt-3 uppercase">
              Esculturas Têxteis
            </span>
          </h1>

          {/* Subtitle in Portuguese */}
          <div ref={descRef} className="space-y-3 max-w-xl">
            <p className="text-base sm:text-lg text-noir-300 font-light leading-relaxed">
              A desconstrução da malha tradicional em silhuetas esculturais de peso e silêncio. Fios nobres de galga
              pesada que esculpem o corpo através da gravidade natural da lã merino e da alpaca.
            </p>
            <p className="text-xs font-mono text-noir-500 tracking-wider">
              [ Fiação autoral em teares de 1952 · Peças de 1.1kg a 2.1kg · Edição limitada ]
            </p>
          </div>

          {/* Luxury CTAs */}
          <div ref={ctaGroupRef} className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => scrollTo('#catalogo')}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-noir-100 hover:bg-white text-noir-950 font-mono text-xs uppercase tracking-wider font-semibold shadow-xl shadow-white/5 transition-all duration-300 active:scale-[0.98]"
            >
              <span>Ver Acervo de Malhas</span>
              <span className="w-6 h-6 rounded-full bg-noir-950 text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                <MoveRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => scrollTo('#campanha')}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-noir-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all duration-300"
            >
              <span>Explorar Campanha</span>
            </button>
          </div>
        </div>

        {/* Right Column: Monumental Fashion Photography Frame (5 cols) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div
            ref={imageFrameRef}
            className="relative w-full aspect-[3/4] max-w-md mx-auto rounded-bezel-outer overflow-hidden border border-white/10 bg-noir-900 shadow-2xl shadow-black/90 group"
          >
            {/* High-Fashion Editorial Image */}
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 filter grayscale contrast-125 brightness-95"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85)',
              }}
            />

            {/* Chiaroscuro Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-r from-noir-950/40 via-transparent to-noir-950/20" />

            {/* Editorial Caption Tag in Bottom */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-noir-200 z-10">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-noir-carmine-hover">
                  Look 01 // Ato I
                </span>
                <h3 className="text-sm font-display font-medium text-noir-100">
                  Suéter Escultural Gola Alta · 1.45kg
                </h3>
              </div>
              <span className="text-[11px] font-mono text-noir-400">São Paulo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs font-mono text-noir-500 uppercase tracking-widest max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4 sm:gap-6">
          <span>NOIR KNIT // ATELIÊ EXPERIMENTAL</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">SERRA GAÚCHA</span>
        </div>

        <button
          onClick={() => scrollTo('#manifesto')}
          className="flex items-center gap-2 text-noir-400 hover:text-noir-100 transition-colors group cursor-pointer"
          aria-label="Rolar para o manifesto"
        >
          <span>Descobrir o Manifesto</span>
          <ArrowDown className="w-3.5 h-3.5 text-noir-carmine transition-transform group-hover:translate-y-1" />
        </button>
      </div>
    </section>
  );
}
