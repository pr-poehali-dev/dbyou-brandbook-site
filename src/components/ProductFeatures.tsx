import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Layers",
    title: "Тройная сила кислот (AHA + BHA + PHA)",
    description:
      "Мягко отшелушивает, не травмируя кожу. Борется с черными точками и тусклостью.",
  },
  {
    icon: "Leaf",
    title: "Успокаивающий дуэт",
    description:
      "Аллантоин + экстракт гамамелиса снимают покраснения и раздражение.",
  },
  {
    icon: "Sun",
    title: "Эффект сияния",
    description: "Улучшает цвет лица уже после первого применения.",
  },
  {
    icon: "Users",
    title: "Универсальность",
    description: "Подходит для всех типов кожи (кроме поврежденной).",
  },
  {
    icon: "Wallet",
    title: "Экономия",
    description: "Заменяет несколько этапов ухода.",
  },
];

const ProductFeatures = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
          <div className="flex-shrink-0">
            <div className="inline-block relative">
              <img
                src="https://cdn.poehali.dev/files/6f2b311e-48a8-4fe9-bc5f-afb6ad429a46.jpeg"
                alt="Multi 5 Exfoliating BHA Toner"
                className="w-32 md:w-40 h-auto object-contain rounded-lg shadow-lg bg-gradient-to-br from-white to-dbyou-lavender/30 p-2"
              />
              <div className="absolute -top-2 -right-2 bg-dbyou-purple text-white text-xs font-medium px-2 py-1 rounded-full">
                NEW
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-3 animate-fade-in">
              Multi 5 Exfoliating BHA Toner
            </h2>
            <p className="text-xl text-dbyou-purple/80">
              5 причин выбрать этот тонер
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover-scale">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center rounded-lg bg-dbyou-lavender/60 p-2">
                      <Icon
                        name={feature.icon}
                        className="h-6 w-6 text-dbyou-purple"
                      />
                    </div>
                  </div>
                  <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                  <p className="text-dbyou-purple/80 flex-grow">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
