'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ManifestoSection } from '@/components/sections/ManifestoSection';
import { FloatingGarmentSection } from '@/components/sections/FloatingGarmentSection';
import { PillarsSection } from '@/components/sections/PillarsSection';
import { LookbookSection } from '@/components/sections/LookbookSection';
import { CatalogSection } from '@/components/sections/CatalogSection';
import { BrandStorySection } from '@/components/sections/BrandStorySection';
import { FaqSection } from '@/components/sections/FaqSection';
import { WhatsAppCtaSection } from '@/components/sections/WhatsAppCtaSection';
import { Footer } from '@/components/sections/Footer';
import { WhatsAppModal } from '@/components/ui/WhatsAppModal';
import { Product, ProductColor, PRODUCTS } from '@/data/products';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColor | undefined>(undefined);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [customTopic, setCustomTopic] = useState<string | undefined>(undefined);

  // Opens WhatsApp modal for general atelier consultation
  const handleOpenGeneralWhatsApp = () => {
    setSelectedProduct(null);
    setSelectedColor(undefined);
    setSelectedSize(undefined);
    setCustomTopic('Atendimento Geral & Alfaiataria Sob Medida');
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
      {/* Detached Floating Island Navbar */}
      <Navbar onOpenWhatsApp={handleOpenGeneralWhatsApp} />

      <main className="flex-1 w-full flex flex-col">
        {/* 1. Fullscreen Cinematic Hero with 3D Garment */}
        <HeroSection onOpenWhatsApp={handleOpenGeneralWhatsApp} />

        {/* 2. Provocative Editorial Manifesto */}
        <ManifestoSection />

        {/* 3. The Floating Garment (Interactive 3D Experience with camera presets & weave mode) */}
        <FloatingGarmentSection
          onSelectProductForWhatsApp={handleSelectProductForWhatsApp}
        />

        {/* 4. Three Construction Pillars */}
        <PillarsSection />

        {/* 5. Asymmetric Avant-Garde Lookbook with Parallax */}
        <LookbookSection />

        {/* 6. Interactive Knitwear Catalog + Color/Size selectors */}
        <CatalogSection
          onSelectProductForWhatsApp={handleSelectProductForWhatsApp}
        />

        {/* 7. Brand Story (A Forja do Fio - 1952 Looms) */}
        <BrandStorySection />

        {/* 8. Technical Questions & FAQ */}
        <FaqSection />

        {/* 9. Master WhatsApp Call-to-Action */}
        <WhatsAppCtaSection onOpenWhatsApp={handleOpenGeneralWhatsApp} />
      </main>

      {/* 10. Premium Footer with OpenPage Demo Badging */}
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
