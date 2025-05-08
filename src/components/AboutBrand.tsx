
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const values = [
  {
    icon: "Sparkles",
    title: "Инновации",
    description: "Мы постоянно исследуем новейшие технологии и ингредиенты"
  },
  {
    icon: "Shield",
    title: "Качество",
    description: "Безопасность и эффективность — наши главные приоритеты"
  },
  {
    icon: "HeartHandshake",
    title: "Забота",
    description: "Мы заботимся о красоте и здоровье наших клиентов"
  }
];

const AboutBrand = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl mb-8 animate-fade-in">О бренде</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-lg leading-relaxed mb-6 animate-slide-in">
              <span className="font-serif text-2xl text-dbyou-purple">D'BYOU</span> — 
              инновационный косметический бренд, создающий и совершенствующий 
              продукты для красоты. Наша миссия — помогать людям раскрывать 
              естественную красоту и заботиться о себе с помощью эффективных 
              и безопасных средств.
            </p>
            
            <p className="text-lg leading-relaxed mb-12 animate-slide-in" style={{ animationDelay: "100ms" }}>
              Бренд основан в 2022 году группой энтузиастов, объединенных 
              идеей создания косметики, которая сочетает научный подход и 
              натуральные компоненты. Мы развиваем три основных направления: 
              уход за лицом, средства для кожи и парфюмерия.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              {values.map((value, index) => (
                <Card key={index} className="bg-dbyou-light border-dbyou-lavender">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-dbyou-lavender flex items-center justify-center">
                      <Icon name={value.icon} className="h-6 w-6 text-dbyou-purple" />
                    </div>
                    <h3 className="font-serif text-xl mb-2">{value.title}</h3>
                    <p className="text-sm text-dbyou-purple/80">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Card className="h-full bg-dbyou-light border-dbyou-lavender">
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl mb-4">Наши продукты</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-dbyou-lavender text-dbyou-purple font-serif px-2 py-1 rounded mr-3 text-xs uppercase">FACE</span>
                    <div>
                      <h4 className="font-medium">Уход за лицом</h4>
                      <p className="text-sm text-dbyou-purple/80">Очищение, увлажнение, защита</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="bg-dbyou-lavender text-dbyou-purple font-serif px-2 py-1 rounded mr-3 text-xs uppercase">SKIN</span>
                    <div>
                      <h4 className="font-medium">Средства для кожи</h4>
                      <p className="text-sm text-dbyou-purple/80">Уходовые комплексы, сыворотки</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="bg-dbyou-lavender text-dbyou-purple font-serif px-2 py-1 rounded mr-3 text-xs uppercase">SENCE</span>
                    <div>
                      <h4 className="font-medium">Парфюмерия</h4>
                      <p className="text-sm text-dbyou-purple/80">Изысканные ароматы для особого настроения</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-dbyou-lavender">
                  <h4 className="font-medium mb-2">Наша философия</h4>
                  <p className="text-sm italic text-dbyou-purple/80">
                    "Мы создаем красоту, вдохновленную вами и созданную для вас"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
