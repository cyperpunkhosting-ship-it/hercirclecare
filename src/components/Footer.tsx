import { useRouter } from '../lib/router';
import { Heart, Instagram, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  const { navigate } = useRouter();

  const quickLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Membership', path: 'membership' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <footer className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 border-t border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                HerCircle Care
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              A trusted support space for actresses and creators. Safe, private, and judgment-free.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-600 hover:text-pink-500 text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              <button className="w-10 h-10 rounded-full bg-white hover:bg-pink-50 flex items-center justify-center shadow-sm transition-colors">
                <Instagram className="w-5 h-5 text-pink-500" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white hover:bg-blue-50 flex items-center justify-center shadow-sm transition-colors">
                <Twitter className="w-5 h-5 text-blue-500" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white hover:bg-pink-50 flex items-center justify-center shadow-sm transition-colors">
                <Mail className="w-5 h-5 text-pink-500" />
              </button>
            </div>
            <p className="text-sm text-gray-600">
              <Mail className="w-4 h-4 inline mr-1" />
              support@hercirclecare.com
            </p>
          </div>
        </div>

        <div className="border-t border-pink-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>Copyright © {new Date().getFullYear()} HerCircle Care. All rights reserved.</p>
            <p className="font-medium text-pink-600">
              Disclaimer: This is a support platform. Not a dating or flirting service.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
