
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ColorSwatch {
  name: string;
  hex: string;
  rgb: string;
  description: string;
}

const primaryColors: ColorSwatch[] = [
  {
    name: "Lavender",
    hex: "#E0D6EA",
    rgb: "rgb(224, 214, 234)",
    description: "Основной цвет бренда, используется для фонов и создания атмосферы."
  },
  {
    name: "Silver",
    hex: "#C4C4D0",
    rgb: "rgb(196, 196, 208)",
    description: "Акцентный цвет, хорошо сочетается с основной палитрой."
  },
  {
    name: "Purple",
    hex: "#6E6A8F",
    rgb: "rgb(110, 106, 143)",
    description: "Используется для текста и элементов, требующих внимания."
  }
];

const secondaryColors: ColorSwatch[] = [
  {
    name: "Dark Purple",
    hex: "#2E2A47",
    rgb: "rgb(46, 42, 71)",
    description: "Для заголовков и создания контраста."
  },
  {
    name: "Light Lavender",
    hex: "#F8F5FA",
    rgb: "rgb(248, 245, 250)",
    description: "Для светлых фонов и карточек."
  }
];

const ColorSwatch = ({ color }: { color: ColorSwatch }) => (
  <Card className="overflow-hidden">
    <div 
      className="h-32" 
      style={{ backgroundColor: color.hex }}
    />
    <CardContent className="p-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
        <div>
          <h3 className="font-medium text-lg">{color.name}</h3>
          <p className="text-sm text-muted-foreground">{color.description}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-mono">{color.hex}</p>
          <p className="text-sm font-mono text-muted-foreground">{color.rgb}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ColorPalette = () => {
  return (
    <section id="colors" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl mb-8 animate-fade-in">Цветовая палитра</h2>
        
        <p className="max-w-3xl mb-12 text-lg leading-relaxed">
          Палитра D'BYOU отражает нежность и премиальность бренда. 
          Лавандовый цвет является основным и используется в большинстве 
          материалов. Серебристый и пурпурный дополняют основной цвет, создавая 
          гармоничное сочетание.
        </p>
        
        <Tabs defaultValue="primary" className="w-full">
          <TabsList className="mb-8 bg-dbyou-light">
            <TabsTrigger value="primary">Основные цвета</TabsTrigger>
            <TabsTrigger value="secondary">Дополнительные цвета</TabsTrigger>
          </TabsList>
          
          <TabsContent value="primary" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {primaryColors.map((color) => (
                <ColorSwatch key={color.name} color={color} />
              ))}
            </div>
            <div className="p-4 bg-dbyou-light rounded-lg mt-8">
              <p className="text-sm">
                Основные цвета должны составлять ~80% всех визуальных материалов бренда.
                Лавандовый является доминирующим, в то время как серебристый и пурпурный 
                используются для акцентов.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="secondary" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryColors.map((color) => (
                <ColorSwatch key={color.name} color={color} />
              ))}
            </div>
            <div className="p-4 bg-dbyou-light rounded-lg mt-8">
              <p className="text-sm">
                Дополнительные цвета используются для создания контраста и 
                расширения палитры в специальных случаях.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ColorPalette;
