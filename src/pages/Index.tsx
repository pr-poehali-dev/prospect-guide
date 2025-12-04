import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/components/HomePage';
import ProjectsPage from '@/components/ProjectsPage';
import PortfolioPage from '@/components/PortfolioPage';
import ProfilePage from '@/components/ProfilePage';

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
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      deadline: '15 мая 2025'
    },
    {
      id: 2,
      title: 'Движение Первых',
      category: 'Сообщество',
      participants: '5М+',
      description: 'Российское движение детей и молодёжи',
      icon: 'Users',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      deadline: 'Постоянно'
    },
    {
      id: 3,
      title: 'Твой Ход',
      category: 'Карьера',
      participants: '800К+',
      description: 'Профориентация и возможности для молодёжи',
      icon: 'Briefcase',
      color: 'bg-gradient-to-br from-purple-600 to-green-600',
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
      color: 'bg-gradient-to-br from-green-600 to-emerald-600',
      deadline: '30 марта 2025'
    },
    {
      id: 6,
      title: 'Volunteer',
      category: 'Волонтёрство',
      participants: '1.2М+',
      description: 'Добровольческие проекты по всей России',
      icon: 'Heart',
      color: 'bg-gradient-to-br from-purple-500 to-purple-700',
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-green-50 to-emerald-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === 'home' && <HomePage projects={projects} />}
      {activeTab === 'projects' && <ProjectsPage projects={projects} />}
      {activeTab === 'portfolio' && <PortfolioPage achievements={achievements} userStats={userStats} />}
      {activeTab === 'profile' && <ProfilePage userStats={userStats} />}

      <Footer />
    </div>
  );
};

export default Index;