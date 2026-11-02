'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LOOKBOOK_ITEMS } from '@/data/products';
import { ArrowUpRight } from 'lucide-react';

export function LookbookSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax effect on lookbook images
      const images = sectionRef.current?.querySelectorAll('.lookbook-img');
      images?.forEach((img) => {
        gsap.to(img, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="lookbook"
      ref={sectionRef}
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 md:px-16 bg-noir-950 overflow-hidden border-t border-white/5"
      aria-label="Lookbook editorial e ensaio fotográfico"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-noir-carmine-hover">
              Ensaio Editorial // Lookbook 2026
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-noir-100 tracking-tight-editorial">
              Cinemática da Matéria
            </h2>
            <p className="text-sm sm:text-base text-noir-300 font-light leading-relaxed">
              Fotografia de campanha registrada sob luz teatral contínua de tungstênio e névoa noturna, evidenciando o
              relevo tátil de cada laçada de lã crua.
            </p>
          </div>

          <div className="font-mono text-xs text-noir-500 uppercase tracking-widest">
            Direção de Arte: NOIR Fashion Studio
          </div>
        </div>

        {/* Asymmetrical Editorial Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Item 1: Large Vertical Editorial */}
          <div className="md:col-span-7 space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-bezel-outer border border-white/10 bg-noir-900 group">
              <div
                className="lookbook-img w-full h-[120%] -top-[10%] absolute inset-x-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${LOOKBOOK_ITEMS[0].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-noir-100 z-10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-noir-carmine-hover">
                    {LOOKBOOK_ITEMS[0].subtitle}
                  </span>
                  <h3 className="text-2xl font-display font-semibold">{LOOKBOOK_ITEMS[0].title}</h3>
                </div>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </div>
            </div>
            <p className="text-xs font-mono text-noir-400 pl-2 border-l border-noir-carmine">
              {LOOKBOOK_ITEMS[0].caption}
            </p>
          </div>

          {/* Item 2: Square Macro Detail */}
          <div className="md:col-span-5 space-y-4 md:pt-16">
            <div className="relative aspect-square overflow-hidden rounded-bezel-outer border border-white/10 bg-noir-900 group">
              <div
                className="lookbook-img w-full h-[120%] -top-[10%] absolute inset-x-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${LOOKBOOK_ITEMS[1].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-noir-100 z-10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-noir-carmine-hover">
                    {LOOKBOOK_ITEMS[1].subtitle}
                  </span>
                  <h3 className="text-xl font-display font-semibold">{LOOKBOOK_ITEMS[1].title}</h3>
                </div>
              </div>
            </div>
            <p className="text-xs font-mono text-noir-400 pl-2 border-l border-white/20">
              {LOOKBOOK_ITEMS[1].caption}
            </p>
          </div>

          {/* Item 3: Tall Vertical Silhouette */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-bezel-outer border border-white/10 bg-noir-900 group">
              <div
                className="lookbook-img w-full h-[120%] -top-[10%] absolute inset-x-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${LOOKBOOK_ITEMS[2].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-noir-100 z-10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-noir-carmine-hover">
                    {LOOKBOOK_ITEMS[2].subtitle}
                  </span>
                  <h3 className="text-xl font-display font-semibold">{LOOKBOOK_ITEMS[2].title}</h3>
                </div>
              </div>
            </div>
            <p className="text-xs font-mono text-noir-400 pl-2 border-l border-white/20">
              {LOOKBOOK_ITEMS[2].caption}
            </p>
          </div>

          {/* Item 4: Monolithic Wide Coat */}
          <div className="md:col-span-7 space-y-4 md:-mt-8">
            <div className="relative aspect-[16/11] overflow-hidden rounded-bezel-outer border border-white/10 bg-noir-900 group">
              <div
                className="lookbook-img w-full h-[120%] -top-[10%] absolute inset-x-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${LOOKBOOK_ITEMS[3].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-noir-100 z-10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-noir-carmine-hover">
                    {LOOKBOOK_ITEMS[3].subtitle}
                  </span>
                  <h3 className="text-2xl font-display font-semibold">{LOOKBOOK_ITEMS[3].title}</h3>
                </div>
              </div>
            </div>
            <p className="text-xs font-mono text-noir-400 pl-2 border-l border-noir-carmine">
              {LOOKBOOK_ITEMS[3].caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
