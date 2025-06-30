import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white sticky bottom-0 z-40">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Icon name="Bus" size={32} className="mr-3 text-red-500" />
              <h3 className="text-2xl font-heading font-bold">ТрансКомфорт</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Надежная транспортная компания с многолетним опытом пассажирских
              перевозок. Современный автопарк и профессиональные водители.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Icon name="Phone" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Icon name="MapPin" size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Городские перевозки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Междугородние рейсы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Туристические поездки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Корпоративные перевозки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Свадебные перевозки
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">
              Контакты
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2 text-red-500" />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2 text-red-500" />
                info@transport.ru
              </li>
              <li className="flex items-start">
                <Icon
                  name="MapPin"
                  size={16}
                  className="mr-2 text-red-500 mt-1"
                />
                г. Москва, ул. Транспортная, 123
              </li>
              <li className="flex items-center">
                <Icon name="Clock" size={16} className="mr-2 text-red-500" />
                Круглосуточно
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ТрансКомфорт. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
