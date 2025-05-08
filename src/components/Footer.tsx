
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-dbyou-purple text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl mb-4">D'BYOU</h3>
            <p className="mb-6 text-white/80 max-w-md">
              Инновационные косметические продукты для заботы о вашей красоте.
              Откройте мир утонченного ухода вместе с D'BYOU.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-dbyou-lavender hover:bg-dbyou-purple/80">
                <Icon name="Instagram" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-dbyou-lavender hover:bg-dbyou-purple/80">
                <Icon name="Facebook" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-dbyou-lavender hover:bg-dbyou-purple/80">
                <Icon name="Twitter" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Брендбук</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-dbyou-lavender transition-colors">О бренде</a>
              </li>
              <li>
                <a href="#colors" className="hover:text-dbyou-lavender transition-colors">Цветовая палитра</a>
              </li>
              <li>
                <a href="#typography" className="hover:text-dbyou-lavender transition-colors">Типографика</a>
              </li>
              <li>
                <a href="#logo" className="hover:text-dbyou-lavender transition-colors">Логотип</a>
              </li>
              <li>
                <a href="#usage" className="hover:text-dbyou-lavender transition-colors">Применение</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Icon name="Mail" className="h-4 w-4 mr-2" />
                <span>info@dbyou.com</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                <span>+7 800 123 45 67</span>
              </li>
              <li className="flex items-center">
                <Icon name="MapPin" className="h-4 w-4 mr-2" />
                <span>Москва, ул. Красоты, 12</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/70">
            © {year} D'BYOU. Все права защищены.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-white/70 hover:text-white">Политика конфиденциальности</a>
            <a href="#" className="text-sm text-white/70 hover:text-white">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
