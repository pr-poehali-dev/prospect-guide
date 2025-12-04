import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
