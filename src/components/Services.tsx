import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    title: "Городские перевозки",
    description:
      "Комфортные поездки по городу с опытными водителями. Современные автобусы и микроавтобусы для городских маршрутов.",
    icon: "MapPin",
    features: ["Регулярные рейсы", "Комфортные сидения", "Кондиционер"],
  },
  {
    title: "Междугородние рейсы",
    description:
      "Надежные дальние перевозки между городами. Безопасность и пунктуальность - наши главные приоритеты.",
    icon: "Route",
    features: ["Дальние маршруты", "Wi-Fi в автобусах", "Остановки для отдыха"],
  },
  {
    title: "Туристические поездки",
    description:
      "Организуем комфортные туристические поездки и экскурсии. Индивидуальный подход к каждой группе.",
    icon: "Camera",
    features: ["Экскурсионные туры", "Гид-сопровождение", "Гибкие маршруты"],
  },
  {
    title: "Корпоративные перевозки",
    description:
      "Деловые поездки для компаний и организаций. Обеспечиваем пунктуальность и комфорт для бизнес-клиентов.",
    icon: "Briefcase",
    features: [
      "Трансфер сотрудников",
      "Деловые поездки",
      "Корпоративные тарифы",
    ],
  },
  {
    title: "Свадебные перевозки",
    description:
      "Торжественные перевозки для особых случаев. Украшение автобусов и индивидуальное обслуживание.",
    icon: "Heart",
    features: [
      "Украшение автобусов",
      "Музыкальное сопровождение",
      "Фото и видеосьемка",
    ],
  },
  {
    title: "Праздничные мероприятия",
    description:
      "Организация транспорта для корпоративных и частных праздников. Создаем атмосферу веселья в дороге.",
    icon: "PartyPopper",
    features: [
      "Праздничное оформление",
      "Развлекательная программа",
      "Кейтеринг",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр пассажирских перевозок для любых потребностей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-red-600"
                  />
                </div>
                <CardTitle className="text-xl font-heading font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-red-600 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
