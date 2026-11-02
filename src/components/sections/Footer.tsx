'use client';

import React from 'react';
import { useLenisScroll } from '@/lib/lenis';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const { scrollTo } = useLenisScroll();

  return (
    <footer
      className="relative w-full pt-20 pb-12 px-6 sm:px-12 md:px-16 bg-noir-950 text-noir-400 border-t border-white/10"
      aria-label="Rodapé do site"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Massive Monogram & Mission */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-4 max-w-xl">
            <span className="text-4xl sm:text-6xl font-display font-bold tracking-widest text-noir-100">
              NOIR<span className="text-noir-carmine">.</span>
            </span>
            <p className="text-sm font-light text-noir-300 leading-relaxed">
              Experiência de moda experimental e catálogo escultural de tricô. Cada laçada é uma recusa à efemeridade da
              indústria têxtil em favor do peso, da gravidade e da matéria bruta.
            </p>
          </div>

          <button
            onClick={() => scrollTo(0)}
            className="self-start lg:self-end flex items-center gap-2 px-5 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.02] text-xs font-mono uppercase tracking-wider text-noir-200 hover:text-white transition-colors"
            aria-label="Voltar ao topo da página"
          >
            <span>Retornar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-noir-carmine" />
          </button>
        </div>

        {/* Links & Information Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-mono">
          <div className="space-y-3">
            <span className="text-noir-100 uppercase tracking-widest font-semibold">Navegação</span>
            <ul className="space-y-2 text-noir-400">
              <li>
                <a href="#manifesto" className="hover:text-noir-100 transition-colors">
                  Manifesto do Fio
                </a>
              </li>
              <li>
                <a href="#peca-3d" className="hover:text-noir-100 transition-colors">
                  The Floating Garment 3D
                </a>
              </li>
              <li>
                <a href="#pilares" className="hover:text-noir-100 transition-colors">
                  Pilares de Fiação
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-noir-100 transition-colors">
                  Ensaio Lookbook
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-noir-100 transition-colors">
                  Acervo Completo
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-noir-100 uppercase tracking-widest font-semibold">Galgas & Matéria</span>
            <ul className="space-y-2 text-noir-400">
              <li>Heavy Gauge 01 (1.45kg)</li>
              <li>Ribbed Kinetics Gauge 03</li>
              <li>Mineral Architecture Gauge Zero</li>
              <li>Lã Merino Crua 19.5μm</li>
              <li>Alpaca Selvagem Escovada</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-noir-100 uppercase tracking-widest font-semibold">Ateliê & Contato</span>
            <ul className="space-y-2 text-noir-400">
              <li>Ateliê Serra Gaúcha & SP</li>
              <li>Fiação sob Encomenda</li>
              <li>Atendimento via WhatsApp</li>
              <li>Sem Estoque Sintético</li>
              <li>Peças com Numeração Única</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-noir-100 uppercase tracking-widest font-semibold">Ecossistema</span>
            <ul className="space-y-2 text-noir-400">
              <li className="text-noir-200 font-semibold">OpenPage Templates</li>
              <li>Projeto B: NOIR KNIT</li>
              <li>Tecnologia WebGL & GSAP</li>
              <li>Lenis Smooth Synchronization</li>
              <li>Deploy Cloudflare Edge</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-noir-500">
          <p>© 2026 NOIR KNIT. Projeto demonstrativo desenvolvido para o ecossistema OpenPage.</p>
          <p className="text-center sm:text-right">
            Nenhuma transação financeira é realizada nesta plataforma. Vendas sob consulta consultiva.
          </p>
        </div>
      </div>
    </footer>
  );
}
