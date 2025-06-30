import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white sticky bottom-0 z-40">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Icon name="Bus" size={32} className="mr-3 text-red-500" />
            <h3 className="text-2xl font-heading font-bold">ПрофТРАНСТУР</h3>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300">
            <div className="flex items-center">
              <Icon name="Phone" size={16} className="mr-2 text-red-500" />
              +7 (999) 123-45-67
            </div>
            <div className="flex items-center">
              <Icon name="Mail" size={16} className="mr-2 text-red-500" />
              info@transport.ru
            </div>
            <div className="flex items-center">
              <Icon name="MapPin" size={16} className="mr-2 text-red-500" />
              г. Москва, ул. Транспортная, 123
            </div>
            <div className="flex items-center">
              <Icon name="Clock" size={16} className="mr-2 text-red-500" />
              Круглосуточно
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ПрофТРАНСТУР. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
