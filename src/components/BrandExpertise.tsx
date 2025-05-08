
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const BrandExpertise = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl mb-8 animate-fade-in">
          Экспертиза, которой можно доверять
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="hover-scale">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-dbyou-lavender/50 p-4">
                  <Icon name="Clock" className="h-8 w-8 text-dbyou-purple" />
                </div>
                <h3 className="font-serif text-xl mb-2">10 лет в индустрии красоты</h3>
                <p className="text-dbyou-purple/80">
                  Основатель бренда управляет мультибрендовым магазином <em>beautybrand</em>, 
                  предлагая оригинальную косметику из Европы, США и Кореи.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-scale">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-dbyou-lavender/50 p-4">
                  <Icon name="Store" className="h-8 w-8 text-dbyou-purple" />
                </div>
                <h3 className="font-serif text-xl mb-2">2 офлайн-магазина</h3>
                <p className="text-dbyou-purple/80">
                  Наши офлайн-магазины в Узбекистане предлагают огромный ассортимент 
                  и имеют проверенную временем репутацию среди клиентов.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover-scale">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-dbyou-lavender/50 p-4">
                  <Icon name="Star" className="h-8 w-8 text-dbyou-purple" />
                </div>
                <h3 className="font-serif text-xl mb-2">D'BYOU: Новый шаг</h3>
                <p className="text-dbyou-purple/80">
                  Создание собственной линейки, объединяющей международный опыт и 
                  инновации в области ухода за кожей.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BrandExpertise;
