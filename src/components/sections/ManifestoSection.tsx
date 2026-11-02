'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Split text reveal
      const words = quoteRef.current?.querySelectorAll('.manifesto-word') || [];
      gsap.from(words, {
        scrollTrigger: {
          trigger: quoteRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 35,
        stagger: 0.04,
        duration: 0.9,
        ease: 'power3.out',
      });

      gsap.from(narrativeRef.current, {
        scrollTrigger: {
          trigger: narrativeRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
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
      className="relative w-full py-32 sm:py-44 px-6 sm:px-12 md:px-16 bg-noir-950 overflow-hidden border-t border-white/5"
      aria-label="Manifesto editorial NOIR KNIT"
    >
      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-28">
        {/* Subtle Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-noir-carmine" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-noir-400">
            Manifesto // O Peso e o Silêncio
          </span>
        </div>

        {/* Large Editorial Quote */}
        <div className="max-w-5xl">
          <h2
            ref={quoteRef}
            className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-light text-noir-100 tracking-tight-editorial leading-[1.08]"
          >
            <span className="inline-block manifesto-word">O</span>{' '}
            <span className="inline-block manifesto-word">tricô</span>{' '}
            <span className="inline-block manifesto-word">não</span>{' '}
            <span className="inline-block manifesto-word">é</span>{' '}
            <span className="inline-block manifesto-word">refúgio</span>{' '}
            <span className="inline-block manifesto-word">passivo.</span>
            <br />
            <span className="text-noir-400 font-normal">
              <span className="inline-block manifesto-word">É</span>{' '}
              <span className="inline-block manifesto-word">arquitetura</span>{' '}
              <span className="inline-block manifesto-word">viva</span>{' '}
              <span className="inline-block manifesto-word">de</span>{' '}
              <span className="inline-block manifesto-word">tensão,</span>{' '}
              <span className="inline-block manifesto-word">gravidade</span>{' '}
              <span className="inline-block manifesto-word">e</span>{' '}
              <span className="inline-block manifesto-word">recusa.</span>
            </span>
          </h2>
        </div>

        {/* Editorial Split Columns */}
        <div
          ref={narrativeRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 pt-8 border-t border-white/10"
        >
          {/* Column 1: Core thesis */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-noir-carmine-hover">
              A Decisão da Fibra
            </h3>
            <p className="text-base sm:text-lg text-noir-200 font-light leading-relaxed">
              Cada laçada é uma decisão de volume; cada fibra crua, uma recusa deliberada ao descartável. A NOIR
              nasce do atrito entre a rusticidade brutal do tear mecânico de 1952 e o rigor escultórico da alfaiataria
              contemporânea.
            </p>
          </div>

          {/* Column 2: Silence & Mass */}
          <div className="md:col-span-6 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-noir-400">
              Presença Monolítica
            </h3>
            <p className="text-base sm:text-lg text-noir-300 font-light leading-relaxed">
              Não vestimos corpos para o conforto da conformidade. Nossas peças pesam entre 1.1kg e 2.1kg para ancorar a
              postura e criar silhuetas com presença monumental. Um guarda-roupa para quem entende o valor do silêncio de
              um bom tecido.
            </p>
          </div>
        </div>

        {/* Quiet Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/5 text-xs font-mono text-noir-400">
          <div>
            <span className="text-noir-600 block text-[10px] uppercase">Padrão de Galga:</span>
            <span className="text-noir-100 font-medium text-sm">Heavy Gauge 01 & Zero</span>
          </div>
          <div>
            <span className="text-noir-600 block text-[10px] uppercase">Origem da Fiação:</span>
            <span className="text-noir-100 font-medium text-sm">Serra Gaúcha, Brasil</span>
          </div>
          <div>
            <span className="text-noir-600 block text-[10px] uppercase">Tempo Médio de Tear:</span>
            <span className="text-noir-100 font-medium text-sm">30 a 42 Horas / Peça</span>
          </div>
          <div>
            <span className="text-noir-600 block text-[10px] uppercase">Disponibilidade:</span>
            <span className="text-noir-100 font-medium text-sm">Exclusivamente sob Medida</span>
          </div>
        </div>
      </div>
    </section>
  );
}
