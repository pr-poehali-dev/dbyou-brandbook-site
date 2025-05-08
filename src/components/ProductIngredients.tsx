
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const keyIngredients = [
  {
    name: "Салициловая кислота (0.5%)",
    description: "Борется с воспалениями и очищает поры.",
    type: "BHA"
  },
  {
    name: "Глюконолактон (PHA)",
    description: "Обеспечивает деликатное отшелушивание.",
    type: "PHA"
  },
  {
    name: "Ниацинамид",
    description: "Сужает поры и выравнивает тон кожи.",
    type: "Витамин"
  },
  {
    name: "Аллантоин",
    description: "Успокаивает и снимает раздражение.",
    type: "Успокаивающий"
  },
  {
    name: "Экстракт гамамелиса",
    description: "Тонизирует и обладает противовоспалительным действием.",
    type: "Растительный"
  }
];

const ProductIngredients = () => {
  return (
    <section className="py-16 md:py-24 bg-dbyou-light">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl mb-8 animate-fade-in">
          Наука, которой можно доверять
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-medium mb-6">Ключевые ингредиенты:</h3>
            <div className="space-y-4">
              {keyIngredients.map((ingredient, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                  <div className="mr-3 mt-1">
                    <Badge variant="outline" className="border-dbyou-purple text-dbyou-purple">
                      {ingredient.type}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-medium">{ingredient.name}</h4>
                    <p className="text-sm text-dbyou-purple/80">{ingredient.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-6">Безопасность:</h3>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Icon name="CheckCircle" className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Лабораторные тесты</h4>
                      <p className="text-dbyou-purple/80">
                        Продукт прошел все необходимые лабораторные тесты и сертификацию.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Icon name="CheckCircle" className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium">Безопасный состав</h4>
                      <p className="text-dbyou-purple/80">
                        Без парабенов и агрессивных компонентов, которые могут навредить коже.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <Icon name="Beaker" className="h-6 w-6 text-dbyou-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium">Научно обоснованная формула</h4>
                      <p className="text-dbyou-purple/80">
                        Каждый компонент тщательно подобран для достижения максимального результата 
                        без нанесения вреда коже.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-dbyou-lavender">
                  <div className="flex items-center">
                    <Icon name="AlertCircle" className="h-5 w-5 text-dbyou-purple mr-2" />
                    <p className="text-sm italic">
                      Перед использованием рекомендуется провести тест на небольшом участке кожи.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIngredients;
