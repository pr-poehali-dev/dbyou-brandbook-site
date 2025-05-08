
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BrandIdentity = () => {
  return (
    <section className="py-16 md:py-24 bg-dbyou-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Типографика */}
          <div id="typography" className="animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Типографика</h2>
            
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-6">Основные шрифты</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm text-dbyou-purple/70 mb-2">Для заголовков</h4>
                    <p className="font-serif text-4xl">Playfair Display</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Элегантный шрифт с засечками, который подчеркивает премиальность бренда.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="text-sm text-dbyou-purple/70 mb-2">Для основного текста</h4>
                    <p className="font-sans text-lg">Inter</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Современный и читаемый шрифт без засечек для всех информационных текстов.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Начертания</h3>
                  <div className="space-y-3">
                    <p className="font-serif font-light">Light (300)</p>
                    <p className="font-serif font-normal">Regular (400)</p>
                    <p className="font-serif font-medium">Medium (500)</p>
                    <p className="font-serif font-semibold">Semibold (600)</p>
                    <p className="font-serif font-bold">Bold (700)</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Размеры</h3>
                  <div className="space-y-3">
                    <p className="text-xs">Extra Small (12px)</p>
                    <p className="text-sm">Small (14px)</p>
                    <p className="text-base">Base (16px)</p>
                    <p className="text-lg">Large (18px)</p>
                    <p className="text-xl">Extra Large (20px)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Логотип */}
          <div id="logo" className="animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">Логотип</h2>
            
            <Card className="overflow-hidden mb-8">
              <div className="h-48 bg-dbyou-lavender flex items-center justify-center">
                <img 
                  src="https://cdn.poehali.dev/files/20e6bed5-135d-4e58-9fd5-b45a5229b9e3.jpeg" 
                  alt="D'BYOU Logo" 
                  className="max-h-32 mx-auto"
                />
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  Логотип D'BYOU отражает элегантность и премиальность бренда. 
                  Серебристое исполнение создает ощущение изысканности и роскоши.
                </p>
              </CardContent>
            </Card>
            
            <Tabs defaultValue="usage" className="w-full">
              <TabsList className="mb-6 w-full bg-dbyou-lavender/30">
                <TabsTrigger value="usage">Использование</TabsTrigger>
                <TabsTrigger value="restrictions">Ограничения</TabsTrigger>
              </TabsList>
              
              <TabsContent value="usage" className="space-y-4">
                <p className="text-sm">
                  • Всегда сохраняйте пропорции логотипа при масштабировании<br />
                  • Обеспечивайте достаточную область свободного пространства вокруг логотипа<br />
                  • Логотип может использоваться на лавандовом, белом или светло-сером фоне<br />
                  • Минимальная рекомендуемая ширина логотипа — 30 мм в печатных материалах
                </p>
              </TabsContent>
              
              <TabsContent value="restrictions" className="space-y-4">
                <p className="text-sm">
                  • Не изменяйте цвета логотипа<br />
                  • Не искажайте пропорции и не применяйте эффекты<br />
                  • Не размещайте на слишком пёстром или темном фоне<br />
                  • Не добавляйте тени или обводки<br />
                  • Не вращайте и не отражайте логотип
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;
