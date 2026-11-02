'use client';

import React, { useState } from 'react';
import { X, MessageCircle, Copy, Check, ExternalLink, ShieldCheck } from 'lucide-react';
import { BRAND_CONTACT, Product, ProductColor } from '@/data/products';
import { formatCurrency } from '@/lib/utils';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product | null;
  selectedColor?: ProductColor;
  selectedSize?: string;
  customTopic?: string;
}

export function WhatsAppModal({
  isOpen,
  onClose,
  product,
  selectedColor,
  selectedSize,
  customTopic,
}: WhatsAppModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Format message text
  const messageText = product
    ? `Olá! Tenho interesse na peça *${product.name}* (${product.gauge}) do catálogo NOIR KNIT.\n\n• Cor selecionada: ${selectedColor?.name || product.colors[0]?.name}\n• Tamanho: ${selectedSize || product.sizes[0]}\n• Valor demonstrativo de referência: ${formatCurrency(product.price)}\n\nGostaria de consultar disponibilidade sob encomenda, medidas detalhadas e prazo de confecção artesanal.`
    : customTopic
    ? `Olá! Gostaria de consultar o alfaiate da NOIR KNIT a respeito de: *${customTopic}*. Como funciona o processo sob medida?`
    : `Olá! Acessei o catálogo experimental NOIR KNIT e gostaria de tirar dúvidas sobre as peças e confecções sob encomenda.`;

  const encodedUrl = `https://wa.me/${BRAND_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    messageText
  )}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(messageText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div
        className="relative w-full max-w-xl bg-noir-900 border border-white/10 rounded-bezel-outer p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-noir-carmine/20 blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between relative z-10 border-b border-white/10 pb-5 mb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-noir-400">
                Canal Oficial de Atendimento
              </span>
            </div>
            <h2 id="modal-headline" className="text-xl sm:text-2xl font-display font-semibold text-noir-100">
              Consulta via WhatsApp
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-noir-400 hover:text-noir-100 hover:bg-white/5 transition-colors"
            aria-label="Fechar janela de consulta"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-5 relative z-10">
          {product && (
            <div className="flex items-center gap-4 p-3 bg-white/[0.03] border border-white/5 rounded-xl">
              <div
                className="w-14 h-16 rounded-lg bg-cover bg-center shrink-0 border border-white/10"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-[10px] font-mono uppercase tracking-wider text-noir-carmine-hover">
                  {product.badge}
                </span>
                <h3 className="text-sm font-semibold text-noir-100 truncate">{product.name}</h3>
                <p className="text-xs text-noir-400">
                  {selectedColor?.name || product.colors[0]?.name} · {selectedSize || product.sizes[0]}
                </p>
              </div>
            </div>
          )}

          {/* Message Preview Box */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-noir-400">
              <span className="font-mono text-[11px] uppercase tracking-wider">
                Mensagem que será enviada:
              </span>
              <span className="text-noir-500 font-mono text-[10px]">Número: {BRAND_CONTACT.whatsappDisplay}</span>
            </div>
            <div className="p-4 rounded-xl bg-noir-950 border border-white/10 font-mono text-xs text-noir-200 whitespace-pre-line leading-relaxed max-h-44 overflow-y-auto">
              {messageText}
            </div>
          </div>

          {/* OpenPage Demonstration Notice */}
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-[11px] text-noir-400 leading-normal">
            <ShieldCheck className="w-4 h-4 text-noir-carmine shrink-0 mt-0.5" />
            <p>
              <strong className="text-noir-200">Ambiente Demonstrativo OpenPage:</strong> Este projeto é um template
              conceitual de catálogo para ateliês de moda e tricô. O botão abaixo abre o aplicativo do WhatsApp com a
              mensagem já pré-formatada.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-noir-200 text-xs font-mono uppercase tracking-wider transition-all duration-300"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Mensagem</span>
                </>
              )}
            </button>

            <a
              href={encodedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-noir-carmine hover:bg-noir-carmine-hover text-white text-xs font-mono uppercase tracking-wider shadow-lg shadow-noir-carmine/20 transition-all duration-300 active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Abrir WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
