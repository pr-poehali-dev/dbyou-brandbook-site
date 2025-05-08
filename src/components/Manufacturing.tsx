
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Manufacturing = () => {
  return (
    <section className="py-16 md:py-24 bg-dbyou-lavender/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl mb-12 animate-fade-in text-center">
          Корейское качество — мировой стандарт
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 bg-dbyou-light p-3 rounded-full">
                  <Icon name="Factory" className="h-8 w-8 text-dbyou-purple" />
                </div>
                <h3 className="font-medium mb-2">Фабрика</h3>
                <p className="text-dbyou-purple/80">
                  nexxen cosmetics (Южная Корея) — один из ведущих производителей косметической продукции.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 bg-dbyou-light p-3 rounded-full">
                  <Icon name="Award" className="h-8 w-8 text-dbyou-purple" />
                </div>
                <h3 className="font-medium mb-2">Опыт производителя</h3>
                <p className="text-dbyou-purple/80">
                  Работает с такими брендами, как Cosrx, Some By Mi, Isntree — лидерами корейского рынка ухода за кожей.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 bg-dbyou-light p-3 rounded-full">
                  <Icon name="Check" className="h-8 w-8 text-dbyou-purple" />
                </div>
                <h3 className="font-medium mb-2">Контроль качества</h3>
                <p className="text-dbyou-purple/80">
                  Соответствует международным стандартам ISO и GMP, гарантируя высокое качество и безопасность продукции.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white">
            <CardContent className="p-6">
              <h3 className="font-serif text-xl mb-4 text-center">Почему мы выбрали Южную Корею?</h3>
              <p className="text-dbyou-purple/80 mb-6">
                Южная Корея известна своими инновациями в области косметологии и строгими 
                стандартами качества. Сотрудничество с корейской фабрикой позволяет нам:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <Icon name="FlaskConical" className="h-5 w-5 text-dbyou-purple" />
                  </div>
                  <p className="text-dbyou-purple/80">
                    Использовать передовые технологии и формулы, признанные во всем мире.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <Icon name="Microscope" className="h-5 w-5 text-dbyou-purple" />
                  </div>
                  <p className="text-dbyou-purple/80">
                    Гарантировать высокое качество каждой партии продукции благодаря строгому контролю.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <Icon name="Lightbulb" className="h-5 w-5 text-dbyou-purple" />
                  </div>
                  <p className="text-dbyou-purple/80">
                    Создавать инновационные продукты, совмещающие последние научные достижения и 
                    натуральные ингредиенты.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
