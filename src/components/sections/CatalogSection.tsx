'use client';

import React, { useState } from 'react';
import { MessageCircle, Check, Info, Sparkles, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS, Product, ProductColor } from '@/data/products';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { formatCurrency } from '@/lib/utils';

interface CatalogSectionProps {
  onSelectProductForWhatsApp: (product: Product, colorName?: string, size?: string) => void;
}

export function CatalogSection({ onSelectProductForWhatsApp }: CatalogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedProductColors, setSelectedProductColors] = useState<Record<string, ProductColor>>({});
  const [selectedProductSizes, setSelectedProductSizes] = useState<Record<string, string>>({});
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const categories = [
    { id: 'todos', label: 'Toda a Coleção' },
    { id: 'sueteres', label: 'Suéteres Pesados' },
    { id: 'cardigans', label: 'Cardigans Estruturais' },
    { id: 'acessorios', label: 'Acessórios & Mantas' },
    { id: 'pecas-chave', label: 'Peças-Chave Brutalistas' },
  ];

  const filteredProducts =
    selectedCategory === 'todos'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleColorSelect = (productId: string, color: ProductColor) => {
    setSelectedProductColors((prev) => ({ ...prev, [productId]: color }));
  };

  const handleSizeSelect = (productId: string, size: string) => {
    setSelectedProductSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <section
      id="catalogo"
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 md:px-16 bg-noir-950 overflow-hidden border-t border-white/5"
      aria-label="Catálogo demonstrativo de tricô NOIR KNIT"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-noir-carmine-hover">
              Catálogo Demonstrativo // Série I a III
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-noir-100 tracking-tight-editorial">
              O Acervo de Malhas Experimentais
            </h2>
            <p className="text-sm sm:text-base text-noir-300 font-light leading-relaxed">
              Cada peça é produzida sob demanda com numeração gravada no linho interno. Selecione cor e tamanho para
              iniciar a consulta direta com o alfaiate pelo WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono text-noir-400">
            <Info className="w-4 h-4 text-noir-carmine shrink-0" />
            <span>Preços e estoque demonstrativos</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider shrink-0 transition-all duration-300 ${
                selectedCategory === c.id
                  ? 'bg-noir-100 text-noir-950 font-semibold shadow-lg shadow-white/5'
                  : 'bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-noir-400 hover:text-noir-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const currentColor = selectedProductColors[product.id] || product.colors[0];
            const currentSize = selectedProductSizes[product.id] || product.sizes[0];
            const isExpanded = expandedProduct === product.id;

            return (
              <DoubleBezelCard
                key={product.id}
                variant="default"
                className="group"
                innerClassName="p-0 sm:p-0 flex flex-col justify-between"
              >
                {/* Product Image Stage */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-noir-900">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-60" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-noir-950/80 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-noir-carmine-hover">
                      {product.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-noir-950/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-noir-300">
                      {product.gauge}
                    </span>
                  </div>

                  {/* Weight tag bottom right */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-noir-950/90 border border-white/10 text-[10px] font-mono text-noir-400">
                      {product.weight}
                    </span>
                  </div>
                </div>

                {/* Product Meta & Configuration */}
                <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-display font-semibold text-noir-100 group-hover:text-white transition-colors">
                        {product.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="text-lg font-mono font-medium text-noir-100">
                          {formatCurrency(product.price)}
                        </span>
                        <span className="block text-[9px] font-mono text-noir-500 uppercase tracking-widest">
                          (Ref. Demo)
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-noir-400 font-light line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Swatches & Selectors */}
                  <div className="space-y-4 pt-2 border-t border-white/10">
                    {/* Color Swatches */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] font-mono text-noir-400">
                        <span>Tonalidade:</span>
                        <span className="text-noir-200">{currentColor.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {product.colors.map((c) => (
                          <button
                            key={c.id}
                            onClick={() => handleColorSelect(product.id, c)}
                            className={`w-7 h-7 rounded-full border transition-transform flex items-center justify-center ${
                              currentColor.id === c.id
                                ? 'scale-110 border-white ring-2 ring-noir-carmine/60'
                                : 'border-white/20 hover:scale-105'
                            }`}
                            style={{ backgroundColor: c.hex }}
                            aria-label={`Selecionar cor ${c.name}`}
                          >
                            {currentColor.id === c.id && (
                              <Check className="w-3.5 h-3.5 text-white drop-shadow" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Size Selector */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] font-mono text-noir-400">
                        <span>Tamanho:</span>
                        <span className="text-noir-200">{currentSize}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {product.sizes.map((s) => (
                          <button
                            key={s}
                            onClick={() => handleSizeSelect(product.id, s)}
                            className={`px-3 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider border transition-colors ${
                              currentSize === s
                                ? 'bg-white/15 border-white/40 text-noir-100 font-semibold'
                                : 'bg-transparent border-white/10 text-noir-400 hover:text-noir-200'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Technical details toggle */}
                    <button
                      onClick={() => setExpandedProduct(isExpanded ? null : product.id)}
                      className="text-[11px] font-mono text-noir-carmine-hover hover:underline flex items-center gap-1 pt-1"
                    >
                      <SlidersHorizontal className="w-3 h-3" />
                      <span>{isExpanded ? 'Ocultar Detalhes de Fiação' : 'Ver Detalhes de Fiação'}</span>
                    </button>

                    {isExpanded && (
                      <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-2 text-[11px] font-mono text-noir-300 animate-fade-in">
                        <div className="text-noir-400 font-semibold">Composição & Tear:</div>
                        <p>{product.composition}</p>
                        <ul className="list-disc pl-4 space-y-1 text-noir-400">
                          {product.technicalDetails.map((td, i) => (
                            <li key={i}>{td}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* WhatsApp Action Button */}
                  <button
                    onClick={() => onSelectProductForWhatsApp(product, currentColor.name, currentSize)}
                    className="w-full group flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-noir-carmine hover:bg-noir-carmine-hover text-white font-mono text-xs uppercase tracking-wider shadow-md shadow-noir-carmine/20 transition-all duration-300 active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Consultar no WhatsApp</span>
                  </button>
                </div>
              </DoubleBezelCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
