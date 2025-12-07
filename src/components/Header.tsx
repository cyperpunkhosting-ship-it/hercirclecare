import { useRouter } from '../lib/router';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const { currentPage, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Membership', path: 'membership' },
    { name: 'Testimonials', path: 'testimonials' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => navigate('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              HerCircle Care
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`text-sm font-medium transition-colors hover:text-pink-500 ${
                  currentPage === item.path
                    ? 'text-pink-500'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => navigate('membership')}
            className="hidden md:block px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 text-white font-medium hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Join Now
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigate(item.path)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPage === item.path
                    ? 'bg-pink-50 text-pink-500 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavigate('membership')}
              className="w-full px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 text-white font-medium"
            >
              Join Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
