import { useRouter } from '../lib/router';
import {
  MessageCircle,
  Shield,
  Heart,
  Sparkles,
  Calendar,
  Users,
  Smile,
  Clock,
} from 'lucide-react';

export const Home = () => {
  const { navigate } = useRouter();

  const reasons = [
    {
      icon: MessageCircle,
      title: 'Stress-Free Communication',
      description:
        'Work pressure, loneliness, social media stress → safe outlet to relax.',
    },
    {
      icon: Shield,
      title: 'Non-judgmental Conversations',
      description:
        'No flirting, no negativity. Purely supportive, friendly talk.',
    },
    {
      icon: Heart,
      title: 'Private & Trusted',
      description:
        'No personal details required. Emotion-first support space.',
    },
  ];

  const services = [
    { icon: MessageCircle, title: 'Friendly Message Support' },
    { icon: Sparkles, title: 'Daily Motivation' },
    { icon: Calendar, title: 'Shoot-Day Emotional Support' },
    { icon: Clock, title: 'Schedule Reminder Help' },
    { icon: Users, title: 'Safe-Space Conversations' },
    { icon: Smile, title: 'Work-Life Balance Guidance' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                A Trusted Support Space for{' '}
                <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                  Actresses & Creators
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Stress குறைக்க, மனசு லைடா feel பண்ண ஒரு நம்பிக்கையான friendly
                support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => navigate('contact')}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-400 to-blue-400 text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  Start Chat Support
                </button>
                <button
                  onClick={() => navigate('membership')}
                  className="px-8 py-4 rounded-full bg-white text-pink-500 font-semibold hover:shadow-lg transform hover:scale-105 transition-all border-2 border-pink-200"
                >
                  Become a Member
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-80 md:h-96 rounded-3xl bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                    <Heart className="w-16 h-16 text-pink-400" fill="currentColor" />
                  </div>
                  <p className="text-gray-700 font-medium text-lg px-8">
                    Your safe space to feel supported
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why We Exist
            </h2>
            <p className="text-gray-600 text-lg">Problem → Solution</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-3xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center mb-6">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Services We Offer
            </h2>
            <p className="text-gray-600 text-lg">Supporting you every step of the way</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-100 to-blue-100 flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-7 h-7 text-pink-500" />
                </div>
                <h3 className="text-center font-semibold text-gray-800 text-sm md:text-base">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join thousands of creators feeling mentally lighter!
          </h2>
          <button
            onClick={() => navigate('membership')}
            className="px-10 py-4 rounded-full bg-white text-pink-500 font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Join Our Safe Circle
          </button>
        </div>
      </section>
    </div>
  );
};
