import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    dates: '',
    guests: '',
    message: ''
  });

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', dates: '', guests: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Зеркальный Дом</h1>
            <div className="hidden md:flex gap-6">
              {['home', 'gallery', 'about', 'pricing', 'booking', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'about' && 'Описание'}
                  {section === 'pricing' && 'Тарифы'}
                  {section === 'booking' && 'Бронирование'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/files/ebfbf80b-263b-4505-bd4f-b6b6579e31f4.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="h-px w-24 bg-primary mx-auto mb-6"></div>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold mb-6 text-foreground">
              Уединение<br />в Зеркальном Доме
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Эксклюзивная аренда премиального дома с панорамным видом на природу
            </p>
            <Button
              size="lg"
              onClick={() => scrollToSection('booking')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-none"
            >
              Забронировать
            </Button>
            <div className="h-px w-24 bg-primary mx-auto mt-12"></div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="h-px w-24 bg-primary mx-auto mb-6"></div>
          <h3 className="text-5xl font-bold mb-4">Галерея</h3>
          <p className="text-muted-foreground text-lg">Погрузитесь в атмосферу роскоши</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: 'https://cdn.poehali.dev/files/ebfbf80b-263b-4505-bd4f-b6b6579e31f4.jpg', title: 'Зеркальный дом в лесу' },
            { img: 'https://cdn.poehali.dev/files/79936053-65a5-4f9a-bf3c-78ea8c36ab7e.jpg', title: 'Купольная беседка' },
            { img: 'https://cdn.poehali.dev/files/f3d76846-73e0-4fd0-8697-b2ae720012af.jpg', title: 'Вечерняя иллюминация' },
          ].map((item, idx) => (
            <Card key={idx} className="group overflow-hidden border-border hover:border-primary transition-all duration-300 animate-scale-in">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-xl font-semibold p-6 text-foreground">{item.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="h-px w-24 bg-primary mx-auto mb-6"></div>
              <h3 className="text-5xl font-bold mb-4">Описание</h3>
              <p className="text-muted-foreground text-lg">Премиум отдых в гармонии с природой</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: 'Droplets', title: 'Банный чан', desc: 'Ароматные травы и панорамный вид' },
                { icon: 'Home', title: 'Купольная беседка', desc: 'Идеальное место для ужина под звездами' },
                { icon: 'Flame', title: 'Зона барбекю', desc: 'Профессиональное оборудование для гриля' },
              ].map((item, idx) => (
                <Card key={idx} className="text-center p-8 border-border hover:border-primary transition-all animate-fade-in">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={item.icon} size={32} className="text-primary" />
                    </div>
                    <h4 className="text-2xl font-semibold mb-3">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-16 p-8 border border-primary/30 rounded-sm">
              <p className="text-lg leading-relaxed text-muted-foreground text-center">
                Зеркальный дом — это уникальное архитектурное решение, полностью интегрированное в природный ландшафт. 
                Стены из зеркального стекла создают эффект невидимости, позволяя вам наслаждаться уединением в окружении 
                соснового леса. Современный дизайн сочетается с премиальным комфортом и эксклюзивными удобствами.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="h-px w-24 bg-primary mx-auto mb-6"></div>
            <h3 className="text-5xl font-bold mb-4">Тарифы</h3>
            <p className="text-muted-foreground text-lg">Выберите идеальный вариант аренды</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Выходные', price: '25 000', period: 'сутки', features: ['2 гостя', 'Банный чан', 'Базовые удобства'] },
              { name: 'Неделя', price: '20 000', period: 'сутки', features: ['До 4 гостей', 'Все удобства', 'Скидка 20%'], popular: true },
              { name: 'Месяц', price: '15 000', period: 'сутки', features: ['До 6 гостей', 'VIP сервис', 'Скидка 40%'] },
            ].map((plan, idx) => (
              <Card key={idx} className={`relative p-8 ${plan.popular ? 'border-primary border-2 shadow-2xl shadow-primary/20' : 'border-border'} animate-scale-in`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1 text-sm font-semibold">
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <CardContent className="pt-6 text-center">
                  <h4 className="text-2xl font-semibold mb-4">{plan.name}</h4>
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">₽</span>
                    </div>
                    <p className="text-muted-foreground mt-2">за {plan.period}</p>
                  </div>
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center justify-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => scrollToSection('booking')}
                    className={`w-full ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                  >
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="h-px w-24 bg-primary mx-auto mb-6"></div>
              <h3 className="text-5xl font-bold mb-4">Бронирование</h3>
              <p className="text-muted-foreground text-lg">Оставьте заявку и мы свяжемся с вами</p>
            </div>
            <Card className="border-border">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Имя</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2 bg-background border-border text-foreground"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="mt-2 bg-background border-border text-foreground"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dates" className="text-foreground">Даты аренды</Label>
                    <Input
                      id="dates"
                      value={formData.dates}
                      onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                      required
                      className="mt-2 bg-background border-border text-foreground"
                      placeholder="с 01.01 по 05.01"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests" className="text-foreground">Количество гостей</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="6"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      required
                      className="mt-2 bg-background border-border text-foreground"
                      placeholder="2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-foreground">Сообщение</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 bg-background border-border text-foreground"
                      placeholder="Дополнительные пожелания..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="h-px w-24 bg-primary mx-auto mb-6"></div>
            <h3 className="text-5xl font-bold mb-4">Контакты</h3>
            <p className="text-muted-foreground text-lg">Мы всегда на связи</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: 'Phone', title: 'Телефон', value: '+7 (999) 123-45-67' },
              { icon: 'Mail', title: 'Email', value: 'info@mirrorhouse.ru' },
              { icon: 'MapPin', title: 'Адрес', value: 'Московская обл., 50км от МКАД' },
            ].map((contact, idx) => (
              <Card key={idx} className="text-center p-8 border-border hover:border-primary transition-all animate-fade-in">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={contact.icon} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{contact.title}</h4>
                  <p className="text-muted-foreground">{contact.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="h-px w-24 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">© 2024 Зеркальный Дом. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}