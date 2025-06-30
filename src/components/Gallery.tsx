import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=800&h=600&fit=crop",
    title: "Комфортабельные автобусы",
    description: "Современный салон с кондиционером",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
    title: "Междугородние перевозки",
    description: "Надежные дальние маршруты",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    title: "Туристические автобусы",
    description: "Панорамные окна для путешествий",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
    title: "Городские маршруты",
    description: "Удобные поездки по городу",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=600&fit=crop",
    title: "Профессиональные водители",
    description: "Опытные и вежливые специалисты",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    title: "Безопасность превыше всего",
    description: "Регулярное техобслуживание",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Фотогалерея
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Наши автобусы, команда и счастливые пассажиры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Icon name="ZoomIn" size={32} className="text-white" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-heading font-semibold text-gray-900 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Bus" size={32} className="text-red-600" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-2">
              50+
            </h3>
            <p className="text-gray-600">Автобусов в парке</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={32} className="text-red-600" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-2">
              10K+
            </h3>
            <p className="text-gray-600">Довольных клиентов</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Route" size={32} className="text-red-600" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-2">
              100+
            </h3>
            <p className="text-gray-600">Маршрутов</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Calendar" size={32} className="text-red-600" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-2">
              15
            </h3>
            <p className="text-gray-600">Лет опыта</p>
          </div>
        </div>
      </div>
    </section>
  );
}
