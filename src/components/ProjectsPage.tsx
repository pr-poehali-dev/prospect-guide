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

interface ProjectsPageProps {
  projects: Project[];
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
  return (
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
  );
};

export default ProjectsPage;
