import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface UserStats {
  name: string;
  level: number;
  points: number;
  nextLevel: number;
  projects: number;
  achievements: number;
  rank: string;
}

interface ProfilePageProps {
  userStats: UserStats;
}

const ProfilePage = ({ userStats }: ProfilePageProps) => {
  return (
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
  );
};

export default ProfilePage;
