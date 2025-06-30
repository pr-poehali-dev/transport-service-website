import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Map() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Наше местоположение
          </h2>
          <p className="text-xl text-gray-600">
            Мы находимся в Ростове-на-Дону
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <Card className="shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="MapPin"
                      size={24}
                      className="mr-2 text-red-600"
                    />
                    Контактная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <Icon
                      name="MapPin"
                      size={20}
                      className="mr-3 text-red-600 mt-1"
                    />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-gray-600">
                        г. Ростов-на-Дону,
                        <br />
                        переулок Быстрый 2В
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Phone"
                      size={20}
                      className="mr-3 text-red-600"
                    />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-gray-600">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" size={20} className="mr-3 text-red-600" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@proftranstur.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Clock"
                      size={20}
                      className="mr-3 text-red-600"
                    />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-gray-600">Круглосуточно</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg overflow-hidden">
                <div className="relative h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.7844437937143!2d39.72055531570434!3d47.22874317916394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3c777c1b26c01%3A0x8b0b0b0b0b0b0b0b!2z0L_QtdGA0LXRg9C70L7QuiDQkdGL0YHRgtGA0YvQuSAy0JIsINCg0L7RgdGC0L7Qsi3QvdCwLdCU0L7QvdGDLCDQoNC-0YHRgtC-0LLRgdC60LDRjyDQvtCx0LsuLCDQoNC-0YHRgdC40Y8sIDM0NDAwMA!5e0!3m2!1sru!2sru!4v1672765432103!5m2!1sru!2sru"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Карта местоположения ПрофТРАНСТУР"
                  ></iframe>

                  {/* Overlay with company info */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center">
                      <Icon
                        name="Bus"
                        size={24}
                        className="mr-2 text-red-600"
                      />
                      <div>
                        <h3 className="font-heading font-bold text-gray-900">
                          ПрофТРАНСТУР
                        </h3>
                        <p className="text-sm text-gray-600">
                          Транспортная компания
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
