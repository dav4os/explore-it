import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Tag, Eye, Heart, Share2, Compass } from 'lucide-react';

function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Топ-10 мест для посещения в Дубае в 2024 году',
      excerpt: 'Откройте для себя самые захватывающие достопримечательности Дубая, от современных небоскребов до традиционных рынков.',
      image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Анна Петрова',
      date: '15 декабря 2024',
      readTime: '8 мин',
      category: 'Путешествия',
      views: 1250,
      likes: 89
    },
    {
      id: 2,
      title: 'Пустынное сафари: полное руководство для новичков',
      excerpt: 'Все, что нужно знать о пустынном сафари в ОАЭ - от выбора тура до советов по безопасности.',
      image: 'https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Михаил Соколов',
      date: '12 декабря 2024',
      readTime: '6 мин',
      category: 'Приключения',
      views: 980,
      likes: 67
    },
    {
      id: 3,
      title: 'Культурное наследие Абу-Даби: музеи и галереи',
      excerpt: 'Погрузитесь в богатую культуру столицы ОАЭ через ее впечатляющие музеи и художественные галереи.',
      image: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Елена Васильева',
      date: '10 декабря 2024',
      readTime: '10 мин',
      category: 'Культура',
      views: 756,
      likes: 45
    },
    {
      id: 4,
      title: 'Лучшие рестораны Дубая: гастрономический тур',
      excerpt: 'От уличной еды до мишленовских ресторанов - исследуйте кулинарную сцену Дубая.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Дмитрий Кузнецов',
      date: '8 декабря 2024',
      readTime: '7 мин',
      category: 'Еда',
      views: 1100,
      likes: 78
    },
    {
      id: 5,
      title: 'Шоппинг в ОАЭ: от традиционных рынков до современных моллов',
      excerpt: 'Полный гид по шоппингу в Эмиратах - где найти лучшие предложения и уникальные товары.',
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Ольга Морозова',
      date: '5 декабря 2024',
      readTime: '9 мин',
      category: 'Шоппинг',
      views: 890,
      likes: 56
    },
    {
      id: 6,
      title: 'Водные развлечения в ОАЭ: пляжи, дайвинг и водные парки',
      excerpt: 'Откройте для себя лучшие водные развлечения в Эмиратах - от кристально чистых пляжей до захватывающих водных парков.',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Александр Новиков',
      date: '3 декабря 2024',
      readTime: '11 мин',
      category: 'Развлечения',
      views: 1350,
      likes: 92
    }
  ];

  const categories = ['Все', 'Путешествия', 'Приключения', 'Культура', 'Еда', 'Шоппинг', 'Развлечения'];
  const [selectedCategory, setSelectedCategory] = React.useState('Все');

  const filteredPosts = selectedCategory === 'Все' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg">
                <Compass size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Explore IT</h1>
                <p className="text-amber-600 text-xs">Travel & Technology</p>
              </div>
            </Link>
            
            <Link 
              to="/" 
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft size={16} />
              На главную
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Блог о путешествиях
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Откройте для себя секреты ОАЭ через наши подробные гиды, советы экспертов и вдохновляющие истории путешествий
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-600 shadow-sm hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-700 flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye size={14} />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={14} />
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      Читать
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Подпишитесь на наши новости
          </h2>
          <p className="text-gray-600 mb-8">
            Получайте последние статьи о путешествиях и эксклюзивные предложения прямо на вашу почту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Подписаться
            </button>
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
            <Link to="/" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
              Главная
            </Link>
            <button className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
              Контакты
            </button>
            <button className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
              Отзывы
            </button>
            <button className="text-gray-300 hover:text-amber-400 transition-colors duration-300">
              Поддержка
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BlogPage;