
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const BrandWelcome = () => {
  return (
    <section className="py-16 md:py-24 bg-dbyou-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 animate-fade-in">
            Здравствуйте! D'BYOU — умная косметика для вашей кожи
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed mb-6 animate-slide-in">
                Мы рады познакомить вас с D'BYOU — новым брендом, который переосмысливает 
                уход за кожей. Наша цель — предложить вам Multi 5 Exfoliating BHA Toner для 
                тестирования и честного обзора. Это не просто тонер, а многофункциональное 
                решение для сияющей и здоровой кожи. Давайте начнем!
              </p>
              
              <Card className="bg-dbyou-lavender/30 border-dbyou-lavender">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Icon name="Sparkles" className="h-5 w-5 text-dbyou-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium text-dbyou-purple mb-2">
                        Smart Beauty — наша философия
                      </h3>
                      <p className="text-dbyou-purple/80">
                        Мы верим, что уход за кожей должен быть эффективным, научно 
                        обоснованным и одновременно простым. Наши продукты воплощают 
                        этот подход, предлагая многофункциональные решения.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="rounded-full overflow-hidden border-4 border-dbyou-lavender p-2 bg-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1608248597279-f99d160beba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2tpbmNhcmUlMjBwcm9kdWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                  alt="D'BYOU Toner" 
                  className="rounded-full h-48 w-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandWelcome;
