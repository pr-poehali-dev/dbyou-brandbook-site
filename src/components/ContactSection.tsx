
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-16 md:py-24 bg-dbyou-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 animate-fade-in">
            Готовы отправить продукт на тестирование!
          </h2>
          <p className="text-lg text-dbyou-purple/80">
            Мы заинтересованы в сотрудничестве с вами и готовы предоставить 
            все необходимое для создания качественного контента.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-medium text-xl mb-6">Условия сотрудничества</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-dbyou-lavender flex items-center justify-center">
                      <Icon name="Gift" className="h-5 w-5 text-dbyou-purple" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Бесплатная отправка образца</h4>
                    <p className="text-dbyou-purple/80">
                      Мы отправим вам полноразмерный продукт Multi 5 Exfoliating BHA Toner 
                      вместе с подробным бренд-пакетом.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-dbyou-lavender flex items-center justify-center">
                      <Icon name="Calendar" className="h-5 w-5 text-dbyou-purple" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Сроки</h4>
                    <p className="text-dbyou-purple/80">
                      Отправка в течение 3 рабочих дней после подтверждения сотрудничества.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-dbyou-lavender flex items-center justify-center">
                      <Icon name="FileText" className="h-5 w-5 text-dbyou-purple" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Дополнительные материалы</h4>
                    <p className="text-dbyou-purple/80">
                      Бренд-пакет включает детальную информацию о продукте, 
                      высококачественные фото, ключевые сообщения и подробную презентацию.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-dbyou-purple text-white">
            <CardContent className="p-6">
              <h3 className="font-medium text-xl mb-6">Связь</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Icon name="Mail" className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:info@dbyou.com" className="text-white hover:text-dbyou-lavender transition-colors">
                      info@dbyou.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Icon name="Instagram" className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Instagram</h4>
                    <a href="https://instagram.com/dbyou_official" className="text-white hover:text-dbyou-lavender transition-colors">
                      @dbyou_official
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Icon name="Send" className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Telegram</h4>
                    <a href="https://t.me/dbyou_support" className="text-white hover:text-dbyou-lavender transition-colors">
                      @dbyou_support
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <Button className="w-full bg-white text-dbyou-purple hover:bg-dbyou-lavender">
                  Отправить заявку на сотрудничество
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
