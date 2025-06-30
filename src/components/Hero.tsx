import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-800 text-white relative overflow-hidden pt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-red-900/20 bg-gradient-to-br from-transparent via-red-700/10 to-red-900/20"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Icon name="Bus" size={80} className="mx-auto mb-6 text-white" />
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              Надежные
              <br />
              <span className="text-red-200">Перевозки</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-2xl mx-auto">
              Комфортные пассажирские перевозки по городу и междугородние
              маршруты. Современный автопарк и профессиональные водители.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-red-50 font-semibold px-8 py-3 text-lg"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg"
            >
              <Icon name="Car" size={20} className="mr-2" />
              Наш автопарк
            </Button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Icon
                name="MapPin"
                size={40}
                className="mx-auto mb-4 text-red-200"
              />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Городские перевозки
              </h3>
              <p className="text-red-100">Комфортные поездки по городу</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Icon
                name="Route"
                size={40}
                className="mx-auto mb-4 text-red-200"
              />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Междугородние рейсы
              </h3>
              <p className="text-red-100">Надежные дальние маршруты</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Icon
                name="Users"
                size={40}
                className="mx-auto mb-4 text-red-200"
              />
              <h3 className="text-xl font-heading font-semibold mb-2">
                Групповые поездки
              </h3>
              <p className="text-red-100">Корпоративные и туристические</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
