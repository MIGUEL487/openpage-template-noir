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
      // Gentle parallax for fashion photography
      const images = sectionRef.current?.querySelectorAll('.lookbook-parallax');
      images?.forEach((img) => {
        gsap.to(img, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
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
      aria-label="Ensaio editorial e lookbook da coleção"
    >
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-noir-carmine-hover">
              Lookbook // Ensaio Editorial 2026
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-noir-100 tracking-tight-editorial">
              Cinemática da Matéria Escura
            </h2>
            <p className="text-sm sm:text-base text-noir-300 font-light leading-relaxed">
              Ensaio fotográfico capturado sob luz contínua de tungstênio teatral e névoa noturna, evidenciando o relevo
              orgânico de cada laçada de lã crua e a sobriedade das silhuetas.
            </p>
          </div>

          <div className="font-mono text-xs text-noir-500 uppercase tracking-widest">
            Direção de Arte: NOIR Fashion Studio
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Item 1: Large Vertical Editorial Shot (7 cols) */}
          <div className="md:col-span-7 space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-bezel-outer border border-white/10 bg-noir-900 group">
              <div
                className="lookbook-parallax w-full h-[115%] -top-[7%] absolute inset-x-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${LOOKBOOK_ITEMS[0].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-80" />

              {/* Floating Bottom Metadata */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-noir-100 z-10">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-noir-carmine-hover">
                    {LOOKBOOK_ITEMS[0].act} · {LOOKBOOK_ITEMS[0].subtitle}
                  </span>
                  <h3 className="text-2xl font-display font-medium">{LOOKBOOK_ITEMS[0].title}</h3>
                </div>
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-noir-400 px-2">
              <span className="border-l border-noir-carmine pl-2">{LOOKBOOK_ITEMS[0].caption}</span>
              <span className="text-noir-500">{LOOKBOOK_ITEMS[0].look}</span>
            </div>
          </div>

          {/* Item 2: Square Macro Detail (5 cols, offset) */}
          <div className="md:col-span-5 space-y-4 md:pt-16">
            <div className="relative aspect-square overflow-hidden rounded-bezel-outer border border-white/10 bg-noir-900 group">
              <div
                className="lookbook-parallax w-full h-[115%] -top-[7%] absolute inset-x-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${LOOKBOOK_ITEMS[1].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-75" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-noir-100 z-10">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-noir-carmine-hover">
                    {LOOKBOOK_ITEMS[1].act} · {LOOKBOOK_ITEMS[1].subtitle}
                  </span>
                  <h3 className="text-xl font-display font-medium">{LOOKBOOK_ITEMS[1].title}</h3>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-noir-400 px-2">
              <span className="border-l border-white/20 pl-2">{LOOKBOOK_ITEMS[1].caption}</span>
              <span className="text-noir-500">{LOOKBOOK_ITEMS[1].look}</span>
            </div>
          </div>

          {/* Item 3: Tall Vertical Cardigan Silhouette (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-bezel-outer border border-white/10 bg-noir-900 group">
              <div
                className="lookbook-parallax w-full h-[115%] -top-[7%] absolute inset-x-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${LOOKBOOK_ITEMS[2].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-75" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-noir-100 z-10">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-noir-carmine-hover">
                    {LOOKBOOK_ITEMS[2].act} · {LOOKBOOK_ITEMS[2].subtitle}
                  </span>
                  <h3 className="text-xl font-display font-medium">{LOOKBOOK_ITEMS[2].title}</h3>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-noir-400 px-2">
              <span className="border-l border-white/20 pl-2">{LOOKBOOK_ITEMS[2].caption}</span>
              <span className="text-noir-500">{LOOKBOOK_ITEMS[2].look}</span>
            </div>
          </div>

          {/* Item 4: Monolithic Wide Coat (7 cols, staggered) */}
          <div className="md:col-span-7 space-y-4 md:-mt-10">
            <div className="relative aspect-[16/11] overflow-hidden rounded-bezel-outer border border-white/10 bg-noir-900 group">
              <div
                className="lookbook-parallax w-full h-[115%] -top-[7%] absolute inset-x-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${LOOKBOOK_ITEMS[3].image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-noir-100 z-10">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-noir-carmine-hover">
                    {LOOKBOOK_ITEMS[3].act} · {LOOKBOOK_ITEMS[3].subtitle}
                  </span>
                  <h3 className="text-2xl font-display font-medium">{LOOKBOOK_ITEMS[3].title}</h3>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-noir-400 px-2">
              <span className="border-l border-noir-carmine pl-2">{LOOKBOOK_ITEMS[3].caption}</span>
              <span className="text-noir-500">{LOOKBOOK_ITEMS[3].look}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
