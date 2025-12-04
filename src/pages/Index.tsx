import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const projects = [
    {
      id: 1,
      title: 'Большая Перемена',
      category: 'Конкурс',
      participants: '2.5М+',
      description: 'Всероссийский конкурс для школьников и студентов',
      icon: 'Trophy',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      deadline: '15 мая 2025'
    },
    {
      id: 2,
      title: 'Движение Первых',
      category: 'Сообщество',
      participants: '5М+',
      description: 'Российское движение детей и молодёжи',
      icon: 'Users',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      deadline: 'Постоянно'
    },
    {
      id: 3,
      title: 'Твой Ход',
      category: 'Карьера',
      participants: '800К+',
      description: 'Профориентация и возможности для молодёжи',
      icon: 'Briefcase',
      color: 'bg-gradient-to-br from-orange-500 to-red-500',
      deadline: '1 июня 2025'
    },
    {
      id: 4,
      title: 'Россия - страна возможностей',
      category: 'Платформа',
      participants: '3М+',
      description: 'Конкурсы, олимпиады и образовательные программы',
      icon: 'Rocket',
      color: 'bg-gradient-to-br from-green-500 to-emerald-500',
      deadline: 'Разные сроки'
    },
    {
      id: 5,
      title: 'Лидеры России',
      category: 'Конкурс',
      participants: '250К+',
      description: 'Конкурс управленцев для карьерного роста',
      icon: 'Award',
      color: 'bg-gradient-to-br from-yellow-500 to-amber-500',
      deadline: '30 марта 2025'
    },
    {
      id: 6,
      title: 'Volunteer',
      category: 'Волонтёрство',
      participants: '1.2М+',
      description: 'Добровольческие проекты по всей России',
      icon: 'Heart',
      color: 'bg-gradient-to-br from-rose-500 to-pink-500',
      deadline: 'Постоянно'
    }
  ];

  const achievements = [
    {
      title: 'Победитель конкурса',
      project: 'Большая Перемена 2024',
      date: 'Декабрь 2024',
      icon: 'Medal',
      points: 500
    },
    {
      title: 'Активный участник',
      project: 'Движение Первых',
      date: 'Ноябрь 2024',
      icon: 'Star',
      points: 300
    },
    {
      title: 'Волонтёр года',
      project: 'Добро.РФ',
      date: 'Октябрь 2024',
      icon: 'Heart',
      points: 450
    }
  ];

  const userStats = {
    name: 'Анна Смирнова',
    level: 12,
    points: 2450,
    nextLevel: 3000,
    projects: 8,
    achievements: 15,
    rank: 'Активист'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center animate-pulse-scale">
                <Icon name="Rocket" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold gradient-text">ПРОрост</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <Button
                variant={activeTab === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('home')}
                className="font-semibold"
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button
                variant={activeTab === 'projects' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('projects')}
                className="font-semibold"
              >
                <Icon name="Grid3x3" size={18} className="mr-2" />
                Проекты
              </Button>
              <Button
                variant={activeTab === 'portfolio' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('portfolio')}
                className="font-semibold"
              >
                <Icon name="Briefcase" size={18} className="mr-2" />
                Портфолио
              </Button>
              <Button
                variant={activeTab === 'profile' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('profile')}
                className="font-semibold"
              >
                <Icon name="User" size={18} className="mr-2" />
                Профиль
              </Button>
            </nav>
            <Button className="gradient-bg border-0 font-semibold animate-pulse-scale">
              <Icon name="LogIn" size={18} className="mr-2" />
              Войти через Госуслуги
            </Button>
          </div>
        </div>
      </header>

      {activeTab === 'home' && (
        <main className="container mx-auto px-4 py-12">
          <section className="mb-16 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-bold mb-6 gradient-text">
                Путеводитель в мире молодёжных возможностей
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Единая цифровая платформа для участия в проектах "Движения Первых", 
                "Большой Перемены" и других молодёжных инициатив
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="gradient-bg border-0 font-semibold text-lg px-8 animate-scale-in">
                  <Icon name="Compass" size={20} className="mr-2" />
                  Начать путь
                </Button>
                <Button size="lg" variant="outline" className="font-semibold text-lg px-8 animate-scale-in">
                  <Icon name="Play" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Возможности платформы
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-purple-100 hover:border-purple-300 transition-all hover:scale-105 hover:shadow-xl animate-fade-in">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                    <Icon name="Search" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">Поиск проектов</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Находите подходящие конкурсы, программы и инициативы по интересам
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all hover:scale-105 hover:shadow-xl animate-fade-in">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                    <Icon name="FolderOpen" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">Портфолио</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Собирайте все достижения в одном месте и делитесь успехами
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all hover:scale-105 hover:shadow-xl animate-fade-in">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-4">
                    <Icon name="TrendingUp" className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">Развитие</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Отслеживайте прогресс, получайте рекомендации и развивайтесь
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-bold mb-8 text-center">
              Популярные проекты
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.slice(0, 6).map((project) => (
                <Card
                  key={project.id}
                  className="border-2 hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer animate-scale-in"
                >
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl ${project.color} flex items-center justify-center mb-3`}>
                      <Icon name={project.icon as any} className="text-white" size={28} />
                    </div>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge variant="secondary" className="ml-2">
                        {project.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-purple-600">
                        <Icon name="Users" size={16} />
                        <span className="font-semibold">{project.participants}</span>
                      </div>
                      <div className="flex items-center gap-2 text-orange-600">
                        <Icon name="Clock" size={16} />
                        <span className="font-semibold">{project.deadline}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>
      )}

      {activeTab === 'projects' && (
        <main className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Все проекты</h2>
            <p className="text-gray-600 text-lg">
              Выбирайте из {projects.length} доступных программ и инициатив
            </p>
          </div>

          <div className="flex gap-4 mb-8 flex-wrap">
            <Button variant="default" className="font-semibold">
              Все категории
            </Button>
            <Button variant="outline" className="font-semibold">
              Конкурсы
            </Button>
            <Button variant="outline" className="font-semibold">
              Сообщества
            </Button>
            <Button variant="outline" className="font-semibold">
              Карьера
            </Button>
            <Button variant="outline" className="font-semibold">
              Волонтёрство
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="border-2 hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${project.color} flex items-center justify-center mb-3`}>
                    <Icon name={project.icon as any} className="text-white" size={28} />
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="secondary" className="ml-2">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center gap-2 text-purple-600">
                      <Icon name="Users" size={16} />
                      <span className="font-semibold">{project.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-600">
                      <Icon name="Clock" size={16} />
                      <span className="font-semibold">{project.deadline}</span>
                    </div>
                  </div>
                  <Button className="w-full gradient-bg border-0 font-semibold">
                    <Icon name="ArrowRight" size={18} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      )}

      {activeTab === 'portfolio' && (
        <main className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Мои достижения</h2>
            <p className="text-gray-600 text-lg">
              Портфолио успехов и наград
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Card className="border-2 border-purple-200 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-lg text-gray-600">Всего наград</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold gradient-text">{userStats.achievements}</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-lg text-gray-600">Проектов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-blue-600">{userStats.projects}</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-lg text-gray-600">Баллов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-orange-600">{userStats.points}</div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 border-2 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Последние достижения</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-lg transition-all hover:scale-[1.02]"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <Icon name={achievement.icon as any} className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">{achievement.title}</h4>
                      <p className="text-gray-600 mb-2">{achievement.project}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{achievement.date}</span>
                        <Badge className="gradient-bg border-0 text-white">
                          +{achievement.points} баллов
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Поделиться портфолио</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Создайте публичную ссылку на ваше портфолио для работодателей и учебных заведений
              </p>
              <div className="flex gap-4">
                <Button className="gradient-bg border-0 font-semibold">
                  <Icon name="Link" size={18} className="mr-2" />
                  Создать ссылку
                </Button>
                <Button variant="outline" className="font-semibold">
                  <Icon name="Download" size={18} className="mr-2" />
                  Скачать PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      )}

      {activeTab === 'profile' && (
        <main className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 mb-8 animate-scale-in">
              <CardHeader>
                <div className="flex items-center gap-6">
                  <Avatar className="w-24 h-24 ring-4 ring-purple-200">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-3xl font-bold gradient-bg text-white">
                      АС
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2">{userStats.name}</h2>
                    <Badge className="gradient-bg border-0 text-white text-base px-4 py-1">
                      {userStats.rank} • Уровень {userStats.level}
                    </Badge>
                  </div>
                  <Button variant="outline" className="font-semibold">
                    <Icon name="Settings" size={18} className="mr-2" />
                    Настройки
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-semibold">Прогресс до следующего уровня</span>
                  <span className="text-gray-600">
                    {userStats.points} / {userStats.nextLevel} баллов
                  </span>
                </div>
                <Progress value={(userStats.points / userStats.nextLevel) * 100} className="h-3" />
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-2 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="Trophy" size={24} className="text-purple-600" />
                    Достижения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {userStats.achievements}
                  </div>
                  <p className="text-gray-600">наград получено</p>
                </CardContent>
              </Card>

              <Card className="border-2 animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Icon name="Briefcase" size={24} className="text-blue-600" />
                    Проекты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {userStats.projects}
                  </div>
                  <p className="text-gray-600">активных участий</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Интеграции</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                        <Icon name="Shield" className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold">Госуслуги</h4>
                        <p className="text-sm text-gray-600">Подключено</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Активно
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Icon name="Share2" className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold">Социальные сети</h4>
                        <p className="text-sm text-gray-600">Не подключено</p>
                      </div>
                    </div>
                    <Button variant="outline" className="font-semibold">
                      Подключить
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                        <Icon name="GraduationCap" className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold">Система образования</h4>
                        <p className="text-sm text-gray-600">Не подключено</p>
                      </div>
                    </div>
                    <Button variant="outline" className="font-semibold">
                      Подключить
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      )}

      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Icon name="Rocket" className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold">ПРОрост</h3>
              </div>
              <p className="text-purple-200">
                Путеводитель в мире молодёжных возможностей
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Проекты</h4>
              <ul className="space-y-2 text-purple-200">
                <li className="hover:text-white cursor-pointer transition-colors">Большая Перемена</li>
                <li className="hover:text-white cursor-pointer transition-colors">Движение Первых</li>
                <li className="hover:text-white cursor-pointer transition-colors">Твой Ход</li>
                <li className="hover:text-white cursor-pointer transition-colors">Лидеры России</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Платформа</h4>
              <ul className="space-y-2 text-purple-200">
                <li className="hover:text-white cursor-pointer transition-colors">О проекте</li>
                <li className="hover:text-white cursor-pointer transition-colors">Как использовать</li>
                <li className="hover:text-white cursor-pointer transition-colors">Партнёры</li>
                <li className="hover:text-white cursor-pointer transition-colors">Поддержка</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-purple-200">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@prorost.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8 800 555-35-35
                </li>
                <li className="flex items-center gap-2 mt-4">
                  <Icon name="Instagram" size={20} className="cursor-pointer hover:scale-110 transition-transform" />
                  <Icon name="Youtube" size={20} className="cursor-pointer hover:scale-110 transition-transform" />
                  <Icon name="MessageCircle" size={20} className="cursor-pointer hover:scale-110 transition-transform" />
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-purple-700 pt-6 text-center text-purple-200">
            <p>© 2025 ПРОрост. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
