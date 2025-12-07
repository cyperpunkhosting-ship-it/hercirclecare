import { Shield, Heart, Users, Sparkles, UserCircle } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building genuine connections based on reliability and honesty',
    },
    {
      icon: Heart,
      title: 'Privacy',
      description: 'Your conversations stay confidential and secure',
    },
    {
      icon: Users,
      title: 'No Judgement',
      description: 'A safe space where you can be yourself',
    },
    {
      icon: Sparkles,
      title: 'Positivity',
      description: 'Focusing on uplifting and encouraging support',
    },
    {
      icon: UserCircle,
      title: 'Professionalism',
      description: 'Maintaining boundaries while providing warmth',
    },
  ];

  const team = [
    { role: 'Support Specialist', icon: Heart },
    { role: 'Wellbeing Guide', icon: Sparkles },
    { role: 'Community Manager', icon: Users },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              HerCircle Care
            </span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            A private, safe emotional support platform built for actresses and
            creators who need a comforting space to talk freely.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                We are a dedicated team passionate about creating a supportive
                environment for actresses and content creators who face unique
                emotional challenges in their professional lives.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Understanding the pressures of the entertainment industry, we
                provide a judgment-free zone where you can express yourself
                freely and receive genuine emotional support.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-80 rounded-3xl bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center shadow-xl">
                <div className="text-center p-8">
                  <Users className="w-20 h-20 text-white mx-auto mb-4" />
                  <p className="text-gray-700 font-medium text-lg">
                    Supporting creators worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              Actress-களுக்கும் creators-க்கும் ஒரு safe, warm, supportive
              emotional space உருவாக்குவது.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mt-4">
              Creating a safe, warm, and supportive emotional space for actresses
              and creators.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Our Values
          </h2>
          <p className="text-gray-600 text-center mb-12">
            The principles that guide everything we do
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center mb-4 mx-auto">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Our Team
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Dedicated professionals committed to your wellbeing
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-8 text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-200 to-blue-200 flex items-center justify-center mb-4 mx-auto">
                  <member.icon className="w-12 h-12 text-pink-500" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg">{member.role}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
