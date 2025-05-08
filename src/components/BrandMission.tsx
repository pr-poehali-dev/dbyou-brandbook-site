import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const BrandMission = () => {
  return (
    <section className="py-16 md:py-24 bg-dbyou-lavender/30">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl mb-8 animate-fade-in">
          SMART BEAUTY — уход без компромиссов
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-10">
              <h3 className="font-serif text-2xl mb-4">Миссия:</h3>
              <blockquote className="border-l-4 border-dbyou-purple pl-4 py-2 italic text-xl">
                «Упрощаем бьюти-рутину через умные решения».
              </blockquote>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-4">Позиционирование:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-dbyou-purple text-white rounded-full p-1 mr-3 mt-1">
                    <Icon name="CheckCheck" className="h-4 w-4" />
                  </span>
                  <div>
                    <h4 className="font-medium">Премиальный масс-маркет</h4>
                    <p className="text-dbyou-purple/80">
                      Доступная цена без ущерба качеству.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="bg-dbyou-purple text-white rounded-full p-1 mr-3 mt-1">
                    <Icon name="CheckCheck" className="h-4 w-4" />
                  </span>
                  <div>
                    <h4 className="font-medium">Многофункциональность</h4>
                    <p className="text-dbyou-purple/80">
                      1 продукт = эксфолиация + тонизирование + увлажнение +
                      выравнивание тона + защита от воспалений.
                    </p>
                    <p className="text-dbyou-purple/80 mt-1">
                      Идеально для тех, кто ценит время и эффективность.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-serif text-2xl">Smart Beauty</h3>
                  <Badge className="bg-dbyou-purple text-white">D'BYOU</Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-dbyou-purple/70">Эффективность</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-dbyou-purple/70">
                      Многофункциональность
                    </span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-dbyou-purple/70">Научный подход</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple/40"></span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-dbyou-purple/70">Доступность</span>
                    <div className="flex space-x-1">
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple"></span>
                      <span className="w-3 h-3 rounded-full bg-dbyou-purple/40"></span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-4 bg-dbyou-light rounded-lg">
                  <p className="text-center text-sm italic">
                    "Мы не просто создаем косметику, мы предлагаем умные решения
                    для современного ритма жизни"
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

export default BrandMission;
