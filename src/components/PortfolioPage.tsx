import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Achievement {
  title: string;
  project: string;
  date: string;
  icon: string;
  points: number;
}

interface UserStats {
  name: string;
  level: number;
  points: number;
  nextLevel: number;
  projects: number;
  achievements: number;
  rank: string;
}

interface PortfolioPageProps {
  achievements: Achievement[];
  userStats: UserStats;
}

const PortfolioPage = ({ achievements, userStats }: PortfolioPageProps) => {
  return (
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

        <Card className="border-2 border-green-200 animate-scale-in">
          <CardHeader>
            <CardTitle className="text-lg text-gray-600">Проектов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-green-600">{userStats.projects}</div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-200 animate-scale-in">
          <CardHeader>
            <CardTitle className="text-lg text-gray-600">Баллов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-purple-600">{userStats.points}</div>
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
                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-green-50 hover:shadow-lg transition-all hover:scale-[1.02]"
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
  );
};

export default PortfolioPage;