'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useLenisScroll } from '@/lib/lenis';

interface NavbarProps {
  onOpenWhatsApp: () => void;
}

export function Navbar({ onOpenWhatsApp }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollTo } = useLenisScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Peça 3D', href: '#peca-3d' },
    { label: 'Pilares', href: '#pilares' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Ateliê', href: '#atelie' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 flex justify-center pointer-events-none px-4 pt-4 sm:pt-6">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border transition-all duration-500 ${
            scrolled
              ? 'bg-noir-950/85 backdrop-blur-2xl border-white/15 shadow-2xl shadow-black/80'
              : 'bg-noir-900/40 backdrop-blur-md border-white/10'
          }`}
          aria-label="Navegação principal"
        >
          {/* Brand Monogram */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="group flex items-center gap-2 text-noir-100 focus:outline-none"
            aria-label="Voltar ao início de NOIR KNIT"
          >
            <span className="font-display font-bold text-base sm:text-lg tracking-widest text-noir-100 group-hover:text-noir-carmine transition-colors">
              NOIR
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-noir-carmine" />
            <span className="hidden md:inline font-mono text-[9px] uppercase tracking-widest text-noir-400">
              Knitwear Lab
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-wider uppercase text-noir-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-noir-100 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-noir-carmine hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenWhatsApp}
              className="group flex items-center gap-2 pl-3 sm:pl-4 pr-1.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-mono tracking-wider text-noir-100 transition-all duration-300 active:scale-95"
            >
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="w-6 h-6 rounded-full bg-noir-carmine group-hover:bg-noir-carmine-hover flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full text-noir-300 hover:text-noir-100 hover:bg-white/5 transition-colors focus:outline-none"
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-noir-950/95 backdrop-blur-3xl flex flex-col justify-between p-8 pt-28 animate-fade-in">
          <ul className="flex flex-col gap-6 text-xl sm:text-2xl font-display text-noir-100">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between py-2 border-b border-white/10 text-noir-200 hover:text-white transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-noir-carmine" />
                </a>
              </li>
            ))}
          </ul>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-3 py-4 rounded-full bg-noir-carmine text-white font-mono text-xs uppercase tracking-widest"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consultar Alfaiate via WhatsApp</span>
            </button>
            <p className="text-[11px] font-mono text-center text-noir-500">
              NOIR KNIT · OpenPage Experimental Knitwear
            </p>
          </div>
        </div>
      )}
    </>
  );
}
