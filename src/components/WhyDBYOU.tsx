
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const WhyDBYOU = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl mb-10 animate-fade-in text-center">
          Это выгодно вам и вашей аудитории
        </h2>
        
        <Tabs defaultValue="for-you" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="for-you">Для вас</TabsTrigger>
            <TabsTrigger value="for-audience">Для аудитории</TabsTrigger>
          </TabsList>
          
          <TabsContent value="for-you" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-dbyou-lavender flex items-center justify-center">
                      <Icon name="Sparkles" className="h-6 w-6 text-dbyou-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Новинка с уникальной формулой</h3>
                    <p className="text-dbyou-purple/80">
                      Получите возможность первыми протестировать и представить своей аудитории 
                      инновационный продукт с многофункциональной формулой — это 
                      актуальный и интересный контент.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-dbyou-lavender flex items-center justify-center">
                      <Icon name="MessageSquare" className="h-6 w-6 text-dbyou-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Поддержка от бренда</h3>
                    <p className="text-dbyou-purple/80">
                      Мы предоставим все необходимые материалы для создания качественного контента: 
                      детальную информацию о продукте, высококачественные фото, видео и 
                      дополнительные материалы.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-dbyou-light rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <Icon name="Plus" className="h-5 w-5 text-dbyou-purple" />
                    </div>
                    <p className="text-sm italic">
                      Возможность долгосрочного сотрудничества с растущим брендом 
                      и участие в разработке будущих продуктов.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="for-audience" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-dbyou-lavender flex items-center justify-center">
                      <Icon name="Clock" className="h-6 w-6 text-dbyou-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Лайфхак для упрощения бьюти-рутины</h3>
                    <p className="text-dbyou-purple/80">
                      Многофункциональный продукт — это экономия времени на уход за кожей 
                      без потери качества. Идеальное решение для современного ритма жизни.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 rounded-full bg-dbyou-lavender flex items-center justify-center">
                      <Icon name="PiggyBank" className="h-6 w-6 text-dbyou-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">Эффект «два в одном»</h3>
                    <p className="text-dbyou-purple/80">
                      Один продукт заменяет несколько средств в уходе — это не только 
                      экономия времени, но и бюджета. Ваша аудитория оценит практичный 
                      подход к красоте.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-dbyou-light rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <Icon name="Plus" className="h-5 w-5 text-dbyou-purple" />
                    </div>
                    <p className="text-sm italic">
                      Возможность узнать о новом перспективном бренде на раннем этапе 
                      и попробовать инновационный продукт одними из первых.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default WhyDBYOU;
