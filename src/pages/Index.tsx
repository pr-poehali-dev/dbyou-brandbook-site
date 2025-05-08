
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutBrand from '@/components/AboutBrand';
import ColorPalette from '@/components/ColorPalette';
import BrandIdentity from '@/components/BrandIdentity';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <AboutBrand />
        <ColorPalette />
        <BrandIdentity />
        
        {/* Пустой блок для будущего раздела "Применение" */}
        <section id="usage" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 animate-fade-in">Применение</h2>
            <p className="text-lg leading-relaxed mb-8">
              В этом разделе будут представлены примеры применения бренда на различных 
              носителях: упаковка, рекламные материалы, сайт и другие цифровые платформы.
            </p>
            <div className="h-64 flex items-center justify-center border border-dashed border-dbyou-silver rounded-lg">
              <p className="text-dbyou-purple/60">В разработке</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
