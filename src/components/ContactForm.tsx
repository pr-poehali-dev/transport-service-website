import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    passengers: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Симуляция отправки формы
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        passengers: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Оставить заявку
            </h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для бронирования поездки
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="MessageSquare"
                    size={24}
                    className="mr-2 text-red-600"
                  />
                  Форма заявки
                </CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами для уточнения деталей
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        placeholder="+7 (999) 999-99-99"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service">Услуга *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleChange("service", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите услугу" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="city">
                            Городские перевозки
                          </SelectItem>
                          <SelectItem value="intercity">
                            Междугородние рейсы
                          </SelectItem>
                          <SelectItem value="tourism">
                            Туристические поездки
                          </SelectItem>
                          <SelectItem value="corporate">
                            Корпоративные перевозки
                          </SelectItem>
                          <SelectItem value="wedding">
                            Свадебные перевозки
                          </SelectItem>
                          <SelectItem value="events">
                            Праздничные мероприятия
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="passengers">Количество пассажиров</Label>
                      <Input
                        id="passengers"
                        type="number"
                        value={formData.passengers}
                        onChange={(e) =>
                          handleChange("passengers", e.target.value)
                        }
                        placeholder="10"
                        min="1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="date">Дата поездки</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Укажите маршрут, время отправления и другие пожелания..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Icon
                          name="Loader2"
                          size={16}
                          className="mr-2 animate-spin"
                        />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={16} className="mr-2" />
                        Отправить заявку
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Phone"
                      size={24}
                      className="mr-2 text-red-600"
                    />
                    Контактная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                      <p className="text-gray-600">info@transport.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="MapPin"
                      size={20}
                      className="mr-3 text-red-600 mt-1"
                    />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-gray-600">
                        г. Москва, ул. Транспортная, д. 123
                      </p>
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

              <Card className="shadow-lg bg-red-50">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Icon
                      name="Headphones"
                      size={48}
                      className="mx-auto mb-4 text-red-600"
                    />
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      Экстренная связь
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Диспетчерская служба работает 24/7
                    </p>
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      <Icon name="Phone" size={20} className="mr-2" />
                      +7 (999) 911-00-00
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
