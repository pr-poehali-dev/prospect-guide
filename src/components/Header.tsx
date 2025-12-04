import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-green-100">
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
  );
};

export default Header;