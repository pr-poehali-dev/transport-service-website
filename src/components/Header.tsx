import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <Icon name="Bus" size={32} className="text-red-600" />
            <h1 className="text-2xl font-heading font-bold text-gray-900">
              ПрофТРАНСТУР
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection("fleet")}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Автопарк
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              Контакты
            </button>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={() => scrollToSection("contact")}
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon
              name={isMenuOpen ? "X" : "Menu"}
              size={24}
              className="text-gray-700"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("fleet")}
                className="text-left text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Автопарк
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Контакты
              </button>
              <Button
                className="bg-red-600 hover:bg-red-700 w-fit"
                onClick={() => scrollToSection("contact")}
              >
                <Icon name="Phone" size={16} className="mr-2" />
                Заказать
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
