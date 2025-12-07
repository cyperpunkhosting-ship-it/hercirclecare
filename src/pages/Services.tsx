import {
  MessageCircle,
  Heart,
  Sparkles,
  Calendar,
  Bell,
  Battery,
} from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Daily Emotional Support',
      description: 'Calm messages, mood uplifting. Start your day with positivity and end it with peace.',
      gradient: 'from-pink-400 to-pink-600',
    },
    {
      icon: MessageCircle,
      title: 'Friendly Conversation Partner',
      description: 'No romance, no flirting. Just genuine human connection when you need someone to talk to.',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      icon: Sparkles,
      title: 'Motivational Messages',
      description: 'Daily positivity and encouragement. Reminders that you are valued and doing great.',
      gradient: 'from-purple-400 to-purple-600',
    },
    {
      icon: Calendar,
      title: 'Shoot-Time Support',
      description: 'Reduce overthinking during hectic schedules. Stay focused and calm during busy days.',
      gradient: 'from-pink-400 to-purple-600',
    },
    {
      icon: Bell,
      title: 'Reminder & Planner Help',
      description: 'Shoot timings, self-care reminders, tasks. Never miss what matters to you.',
      gradient: 'from-blue-400 to-purple-600',
    },
    {
      icon: Battery,
      title: 'Creator Burnout Support',
      description: 'Rest, reset, regaining mental balance. We help you recharge and find your spark again.',
      gradient: 'from-pink-400 to-blue-600',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              We Offer
            </span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Comprehensive emotional support services designed specifically for
            actresses and creators
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-3xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 rounded-full bg-pink-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Choose Your Plan</h3>
              <p className="text-gray-600 text-sm">
                Select a membership that fits your needs
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Start Connecting</h3>
              <p className="text-gray-600 text-sm">
                Begin conversations with your support specialist
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Feel Supported</h3>
              <p className="text-gray-600 text-sm">
                Experience genuine care and emotional relief
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to feel supported?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join our community and start your journey to emotional wellness
          </p>
          <button className="px-10 py-4 rounded-full bg-white text-pink-500 font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};
