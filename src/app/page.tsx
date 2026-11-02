'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { AtmosphericClothCanvas } from '@/components/canvas/AtmosphericClothCanvas';
import { HeroSection } from '@/components/sections/HeroSection';
import { ManifestoSection } from '@/components/sections/ManifestoSection';
import { RunwayCampaignSection } from '@/components/sections/RunwayCampaignSection';
import { LookbookSection } from '@/components/sections/LookbookSection';
import { TextileArchitectureSection } from '@/components/sections/TextileArchitectureSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { PillarsSection } from '@/components/sections/PillarsSection';
import { BrandStorySection } from '@/components/sections/BrandStorySection';
import { FaqSection } from '@/components/sections/FaqSection';
import { WhatsAppCtaSection } from '@/components/sections/WhatsAppCtaSection';
import { Footer } from '@/components/sections/Footer';
import { WhatsAppModal } from '@/components/ui/WhatsAppModal';
import { Product, ProductColor } from '@/data/products';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColor | undefined>(undefined);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [customTopic, setCustomTopic] = useState<string | undefined>(undefined);

  // Opens WhatsApp modal for concierge consultation
  const handleOpenGeneralWhatsApp = () => {
    setSelectedProduct(null);
    setSelectedColor(undefined);
    setSelectedSize(undefined);
    setCustomTopic('Atendimento Geral & Alfaiataria Privada de Tricô');
    setModalOpen(true);
  };

  // Opens WhatsApp modal for a specific product
  const handleSelectProductForWhatsApp = (
    product: Product,
    colorName?: string,
    size?: string
  ) => {
    setSelectedProduct(product);
    const foundColor = product.colors.find((c) => c.name === colorName) || product.colors[0];
    setSelectedColor(foundColor);
    setSelectedSize(size || product.sizes[0]);
    setCustomTopic(undefined);
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-noir-950 text-noir-100 flex flex-col selection:bg-noir-carmine selection:text-white">
      {/* 
        NOVA DIRETRIZ 3D:
        O Three.js atua agora como uma camada atmosférica difusa, viva e em baixa opacidade (28%),
        posicionada no plano de fundo. Não compete com a fotografia e a tipografia, conferindo profundidade
        cinematográfica e reagindo suavemente ao scroll.
      */}
      <AtmosphericClothCanvas opacity={0.28} />

      {/* Floating Island Navbar */}
      <Navbar onOpenWhatsApp={handleOpenGeneralWhatsApp} />

      <main className="relative z-10 flex-1 w-full flex flex-col">
        {/* 1. Hero Editorial de Campanha */}
        <HeroSection onOpenWhatsApp={handleOpenGeneralWhatsApp} />

        {/* 2. Manifesto do Fio e do Peso */}
        <ManifestoSection />

        {/* 3. Campanha Destaque (Sobretudo Monolítico Gauge Zero) */}
        <RunwayCampaignSection
          onSelectProductForWhatsApp={handleSelectProductForWhatsApp}
        />

        {/* 4. Lookbook Editorial com Parallax */}
        <LookbookSection />

        {/* 5. Anatomia da Matéria & Profundidade 3D Têxtil */}
        <TextileArchitectureSection />

        {/* 6. Catálogo de Malhas + Seletores e Consulta */}
        <CatalogSection
          onSelectProductForWhatsApp={handleSelectProductForWhatsApp}
        />

        {/* 7. Três Leis da Fiação */}
        <PillarsSection />

        {/* 8. História da Marca (Teares de 1952) */}
        <BrandStorySection />

        {/* 9. Perguntas Frequentes & Cuidados */}
        <FaqSection />

        {/* 10. Master WhatsApp CTA Concierge */}
        <WhatsAppCtaSection onOpenWhatsApp={handleOpenGeneralWhatsApp} />
      </main>

      {/* 11. Rodapé Premium */}
      <Footer />

      {/* Central WhatsApp Preview & Inquiry Modal */}
      <WhatsAppModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        product={selectedProduct}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
        customTopic={customTopic}
      />
    </div>
  );
}
