import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Project {
  id: number;
  title: string;
  category: string;
  participants: string;
  description: string;
  icon: string;
  color: string;
  deadline: string;
}

interface HomePageProps {
  projects: Project[];
}

const HomePage = ({ projects }: HomePageProps) => {
  return (
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
          <Card className="border-2 border-red-100 hover:border-red-300 transition-all hover:scale-105 hover:shadow-xl animate-fade-in">
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4">
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

          <Card className="border-2 border-green-100 hover:border-green-300 transition-all hover:scale-105 hover:shadow-xl animate-fade-in">
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
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

          <Card className="border-2 border-purple-100 hover:border-purple-300 transition-all hover:scale-105 hover:shadow-xl animate-fade-in">
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-purple-600 flex items-center justify-center mb-4">
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
                  <div className="flex items-center gap-2 text-red-600">
                    <Icon name="Users" size={16} />
                    <span className="font-semibold">{project.participants}</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
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
  );
};

export default HomePage;