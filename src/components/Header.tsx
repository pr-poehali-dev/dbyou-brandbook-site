
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "О бренде", href: "#about" },
  { title: "Цвета", href: "#colors" },
  { title: "Типографика", href: "#typography" },
  { title: "Логотип", href: "#logo" },
  { title: "Применение", href: "#usage" },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-dbyou-lavender/90 backdrop-blur-sm z-50 border-b border-dbyou-silver/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="font-serif text-2xl text-dbyou-purple font-medium">D'BYOU</span>
          <span className="ml-2 text-xs tracking-wider text-dbyou-purple/80 uppercase">Brand Book</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Button
              key={item.title}
              variant="ghost"
              className={`text-dbyou-purple hover:text-dbyou-dark transition-colors ${
                activeSection === item.href.substring(1) ? "font-medium" : ""
              }`}
              onClick={() => handleScroll(item.href.substring(1))}
            >
              {item.title}
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-dbyou-light w-[250px]">
            <div className="py-6">
              <div className="font-serif text-xl text-dbyou-purple mb-6">D'BYOU</div>
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Button
                    key={item.title}
                    variant="ghost"
                    className="justify-start text-dbyou-purple hover:text-dbyou-dark hover:bg-dbyou-lavender/50"
                    onClick={() => {
                      handleScroll(item.href.substring(1));
                      document.body.dispatchEvent(new CustomEvent('closeMobileMenu'));
                    }}
                  >
                    {item.title}
                  </Button>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
