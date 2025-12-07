import { Check, Heart, Star, Crown } from 'lucide-react';

export const Membership = () => {
  const plans = [
    {
      name: 'Basic',
      price: '199',
      icon: Heart,
      gradient: 'from-pink-400 to-pink-600',
      features: [
        'Daily positive messages',
        'Weekly check-in',
        'Basic chat window',
        'Email support',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: '399',
      icon: Star,
      gradient: 'from-blue-400 to-purple-600',
      features: [
        'Unlimited chat',
        'Personal support specialist',
        'Mood tracking',
        'Priority response',
        'Daily motivational content',
        'Schedule reminders',
      ],
      popular: true,
    },
    {
      name: 'Elite',
      price: '799',
      icon: Crown,
      gradient: 'from-purple-400 to-pink-600',
      features: [
        '1-to-1 dedicated supporter',
        'Unlimited emotional support',
        'Custom reminders',
        'Personal wellbeing plan',
        '24/7 priority access',
        'Video call sessions',
        'Exclusive wellness resources',
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Support Plan
            </span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Flexible membership options designed to support you at every stage
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 transition-all transform hover:-translate-y-2 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-pink-50 to-blue-50 shadow-2xl scale-105 md:scale-110 border-2 border-pink-200'
                    : 'bg-gradient-to-br from-gray-50 to-white shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-800">
                      ₹{plan.price}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can cancel your membership at any time with no
                questions asked. Your support continues until the end of your
                billing period.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">
                Is my information private?
              </h3>
              <p className="text-gray-600">
                Absolutely. All conversations are completely confidential and we
                never share your personal information with anyone.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">
                Can I upgrade my plan?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade to a higher tier at any time. The
                difference will be prorated for the remainder of your billing
                cycle.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, debit cards, UPI, and net
                banking for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still have questions?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Our support team is here to help you choose the right plan
          </p>
          <button className="px-10 py-4 rounded-full bg-white text-pink-500 font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
};
