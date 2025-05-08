
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div 
        className={`flex flex-col items-center justify-center max-w-4xl mx-auto text-center transition-opacity duration-1000 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="animate-logo-appear mb-10">
          <img 
            src="https://cdn.poehali.dev/files/20e6bed5-135d-4e58-9fd5-b45a5229b9e3.jpeg" 
            alt="D'BYOU Cosmetics" 
            className="w-full max-w-md mx-auto"
          />
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dbyou-purple mb-6">
          Brand Guide
        </h1>
        
        <p className="text-dbyou-purple/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          Полное руководство по использованию бренда D'BYOU — 
          инновационные продукты для красоты и ухода.
        </p>
        
        <Button 
          className="bg-dbyou-silver hover:bg-dbyou-purple hover:text-white text-dbyou-purple transition-colors"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Начать знакомство
          <Icon name="ChevronDown" className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Icon 
          name="ChevronDown" 
          className="h-6 w-6 text-dbyou-purple/50"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>
    </section>
  );
};

export default HeroSection;
