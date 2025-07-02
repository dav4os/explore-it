import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Car, Users, BookOpen, Calendar, Shield, Route, Plane, Compass, Star, Award, Heart } from 'lucide-react';

function HomePage() {
  const [activeNav, setActiveNav] = useState('tours');

  const navItems = [
    { id: 'tours', label: 'Экскурсии', icon: MapPin },
    { id: 'rental', label: 'Аренда авто', icon: Car, link: '/rental' },
    { id: 'about', label: 'О нас', icon: Users, link: '/about' },
    { id: 'blog', label: 'Блог', icon: BookOpen, link: '/blog' },
  ];

  const offers = [
    {
      id: 1,
      title: 'Дубай Премиум',
      image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '2,500 AED',
      duration: '3 дня'
    },
    {
      id: 2,
      title: 'Пустынное сафари',
      image: 'https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '450 AED',
      duration: '1 день'
    },
    {
      id: 3,
      title: 'Абу-Даби Тур',
      image: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: '800 AED',
      duration: '2 дня'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Без предоплат',
      description: 'Оплачивайте только после получения услуги'
    },
    {
      icon: Route,
      title: 'Авторские маршруты',
      description: 'Уникальные программы от местных экспертов'
    },
    {
      icon: Plane,
      title: 'Трансфер включен',
      description: 'Комфортная доставка до места назначения'
    }
  ];

  const exploreItFeatures = [
    {
      icon: Car,
      title: 'Собственным автопарком',
      description: 'комфортабельные автомобили премиум-класса, яхты и катера для морских прогулок.'
    },
    {
      icon: Star,
      title: 'Профессиональной командой',
      description: 'опытные водители, капитаны и эрудированные русскоязычные гиды, которые расскажут о культуре, истории и традициях ОАЭ.'
    },
    {
      icon: Heart,
      title: 'Индивидуальным подходом',
      description: 'мы подберем тур, который идеально подойдет именно вам, будь то семейный отдых или экстремальное приключение.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl shadow-lg">
                <Compass size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Explore IT</h1>
                <p className="text-amber-200 text-sm">Travel & Technology</p>
              </div>
            </Link>
            
            {/* Contact Info */}
            <div className="hidden md:flex items-center gap-6 text-white/80">
              <div className="text-right">
                <p className="text-sm">Свяжитесь с нами</p>
                <p className="font-semibold text-amber-300">+971 50 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url("/src/assets/image.png")'
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Выбери свою<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
              Эмиратскую мечту
            </span>
          </h1>
          
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              if (item.link) {
                return (
                  <Link
                    key={item.id}
                    to={item.link}
                    className="flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 hover:scale-105"
                  >
                    <IconComponent size={18} />
                    {item.label}
                  </Link>
                );
              }
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveNav(item.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    activeNav === item.id
                      ? 'bg-amber-500 text-white shadow-lg transform scale-105'
                      : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 hover:scale-105'
                  }`}
                >
                  <IconComponent size={18} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
            <span className="flex items-center gap-2">
              <Calendar size={20} />
              Забронировать тур
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </button>
        </div>
      </div>

      {/* Best Offers Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Лучшие предложения недели
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-amber-600">
                  {offer.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">{offer.price}</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore IT Description Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Незабываемые экскурсии в Дубае с Explore IT
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Каждый мечтает о роскошном отдыхе на берегу Персидского залива, где белоснежные пляжи и кристально чистая вода создают идеальные условия для релакса. Арабские Эмираты – это место, где традиции гармонично сочетаются с современностью.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Учтите, что местные жители строго соблюдают обычаи, поэтому рекомендуем выбирать скромную одежду для прогулок по городу, чтобы уважать местную культуру.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dubai Beach"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Почему стоит посетить Дубай?
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <img
                  src="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Dubai Skyline"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Дубай – это уникальное сочетание футуристических небоскребов и природной красоты. Здесь небоскребы, такие как Бурдж-Халифа, соседствуют с пустынными пейзажами и лазурными водами.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Туристов привлекает не только архитектура, но и гостеприимство местных жителей, изысканная национальная кухня и возможность попробовать уникальные блюда в уютных кафе или ресторанах мирового класса. От восточных сладостей до традиционных арабских напитков – гастрономическое путешествие оставит незабываемые впечатления.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Explore IT – ваш проводник в мир приключений
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              Туристическое агентство Explore IT предлагает лучшие экскурсии в Дубае и других эмиратах по доступным ценам. Мы гордимся:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {exploreItFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                  >
                    <div className="text-center">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 mx-auto mb-4">
                        <IconComponent size={28} className="text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                        {feature.title}:
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-left">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-lg mb-6 group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2">
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg">
              <Compass size={20} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
              Explore IT
            </h3>
          </div>
          <p className="text-gray-300 mb-6">Откройте для себя магию Объединенных Арабских Эмиратов</p>
          <div className="flex justify-center gap-6">
            <Link to="/about" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
              О нас
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
              Блог
            </Link>
            <Link to="/rental" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
              Аренда авто
            </Link>
            <button className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
              Контакты
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;