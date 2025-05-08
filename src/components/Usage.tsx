
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const steps = [
  {
    number: 1,
    title: "Нанесите на чистую кожу",
    description: "Используйте утром или вечером после очищения лица."
  },
  {
    number: 2,
    title: "Используйте ватный диск или ладонь",
    description: "Нанесите небольшое количество тонера на ватный диск или непосредственно на ладонь."
  },
  {
    number: 3,
    title: "Не смывайте",
    description: "Тонер не нужно смывать — переходите к следующему этапу ухода."
  }
];

const Usage = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl mb-8 animate-fade-in">
          Простота — наше преимущество
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-medium mb-6">Инструкция по применению:</h3>
            <div className="relative">
              {steps.map((step, index) => (
                <div key={index} className="mb-12 relative">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-dbyou-purple text-white flex items-center justify-center font-medium">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">{step.title}</h4>
                      <p className="text-dbyou-purple/80">{step.description}</p>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="absolute left-5 top-10 w-0.5 h-8 bg-dbyou-purple/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <Card className="bg-dbyou-lavender/30 border-dbyou-lavender mb-8">
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-4 flex items-center">
                  <Icon name="Info" className="h-5 w-5 mr-2" />
                  Важная информация
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <Icon name="Package" className="h-5 w-5 text-dbyou-purple" />
                    </div>
                    <div>
                      <p className="text-dbyou-purple/80">
                        <span className="font-medium">Объем:</span> 120 мл (хватит на 2-3 месяца).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <Icon name="Shield" className="h-5 w-5 text-dbyou-purple" />
                    </div>
                    <div>
                      <p className="text-dbyou-purple/80">
                        <span className="font-medium">Хранение:</span> Храните в темном месте при комнатной температуре.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-dbyou-silver/30">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dbyou-purple text-white">
                    <Icon name="Clock" className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Рекомендуемая частота использования</h4>
                  <p className="text-sm text-dbyou-purple/80">
                    Новичкам: 1-2 раза в неделю, постепенно увеличивая до ежедневного использования.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-dbyou-purple text-white">
                    <Icon name="ShieldAlert" className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Противопоказания</h4>
                  <p className="text-sm text-dbyou-purple/80">
                    Не рекомендуется использовать на поврежденной коже, а также в сочетании с другими 
                    отшелушивающими средствами в одном уходе.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Usage;
