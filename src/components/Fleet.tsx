import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const vehicles = [
  {
    id: 1,
    name: "Mercedes Sprinter",
    type: "Микроавтобус",
    capacity: "19 мест",
    features: ["Кондиционер", "Wi-Fi", "USB-зарядка", "Комфортные сидения"],
    image:
      "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=600&h=400&fit=crop",
    description: "Идеален для небольших групп и корпоративных поездок",
  },
  {
    id: 2,
    name: "Iveco Daily",
    type: "Автобус",
    capacity: "33 места",
    features: [
      "Климат-контроль",
      "Аудиосистема",
      "Багажное отделение",
      "Откидные сидения",
    ],
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
    description: "Комфортный автобус для средних групп и экскурсий",
  },
  {
    id: 3,
    name: "MAN Lion's Coach",
    type: "Туристический автобус",
    capacity: "49 мест",
    features: [
      "Панорамные окна",
      "Биотуалет",
      "Кухня",
      "Спальные места",
      "Wi-Fi",
    ],
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    description: "Премиальный автобус для дальних поездок и туров",
  },
  {
    id: 4,
    name: "Ford Transit",
    type: "Микроавтобус",
    capacity: "14 мест",
    features: ["Кондиционер", "Аудиосистема", "Удобная посадка"],
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
    description: "Компактный и маневренный для городских поездок",
  },
  {
    id: 5,
    name: "Scania Touring",
    type: "Междугородний автобус",
    capacity: "55 мест",
    features: [
      "Ремни безопасности",
      "Регулируемые сидения",
      "Багажные полки",
      "Освещение",
    ],
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
    description: "Надежный автобус для междугородних перевозок",
  },
  {
    id: 6,
    name: "Volkswagen Crafter",
    type: "Микроавтобус VIP",
    capacity: "8 мест",
    features: [
      "Кожаные сидения",
      "Индивидуальное освещение",
      "Столики",
      "Мини-бар",
    ],
    image:
      "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=600&h=400&fit=crop",
    description: "VIP-класс для особых случаев и деловых поездок",
  },
];

export default function Fleet() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % vehicles.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + vehicles.length) % vehicles.length,
    );
  };

  const currentVehicle = vehicles[currentIndex];

  return (
    <section id="fleet" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Наш автопарк
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Современные и комфортабельные автобусы для любых потребностей
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src={currentVehicle.image}
                alt={currentVehicle.name}
                className="w-full h-80 object-cover"
              />

              {/* Navigation buttons */}
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                onClick={prevSlide}
              >
                <Icon name="ChevronLeft" size={24} />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                onClick={nextSlide}
              >
                <Icon name="ChevronRight" size={24} />
              </Button>

              {/* Vehicle type badge */}
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {currentVehicle.type}
              </div>

              {/* Capacity badge */}
              <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                {currentVehicle.capacity}
              </div>
            </div>

            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                  {currentVehicle.name}
                </h3>
                <p className="text-gray-600">{currentVehicle.description}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {currentVehicle.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <Icon
                      name="Check"
                      size={16}
                      className="text-red-600 mr-2"
                    />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Заказать этот автобус
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {vehicles.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-red-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
