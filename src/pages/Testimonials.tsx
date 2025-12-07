import { Quote, Star, UserCircle } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "I feel mentally lighter after using this service.",
      author: "Content Creator",
      role: "Mumbai",
      rating: 5,
    },
    {
      quote: "Safe space, no judgement at all.",
      author: "Actress",
      role: "Chennai",
      rating: 5,
    },
    {
      quote: "Very comforting emotional support.",
      author: "Digital Creator",
      role: "Bangalore",
      rating: 5,
    },
    {
      quote: "Finally found a place where I can express myself freely without any fear.",
      author: "Television Artist",
      role: "Hyderabad",
      rating: 5,
    },
    {
      quote: "The daily motivation keeps me going. This has been a game changer for my mental health.",
      author: "Film Artist",
      role: "Mumbai",
      rating: 5,
    },
    {
      quote: "Professional yet warm support. Exactly what I needed during tough times.",
      author: "Model & Influencer",
      role: "Delhi",
      rating: 5,
    },
    {
      quote: "No flirting, no judgement, just pure support. Thank you for creating this.",
      author: "Theatre Artist",
      role: "Pune",
      rating: 5,
    },
    {
      quote: "I can talk about my work stress without worrying about my privacy. Truly grateful.",
      author: "Social Media Creator",
      role: "Kolkata",
      rating: 5,
    },
    {
      quote: "The shoot-day support has been incredibly helpful. I feel less overwhelmed now.",
      author: "Film Actress",
      role: "Chennai",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Community Says
            </span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Real experiences from actresses and creators who found their safe space
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-3xl p-8 hover:shadow-xl transition-shadow relative"
              >
                <Quote className="w-10 h-10 text-pink-300 mb-4" />

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-blue-300 flex items-center justify-center flex-shrink-0">
                    <UserCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-pink-500"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Thousands of actresses and creators have found their safe space with
              us. Experience the support and understanding you deserve.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  5000+
                </div>
                <p className="text-gray-600">Happy Members</p>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  50k+
                </div>
                <p className="text-gray-600">Support Messages</p>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  4.9/5
                </div>
                <p className="text-gray-600">Average Rating</p>
              </div>
            </div>
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Trusted By Creators Across India
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Mumbai', 'Chennai', 'Bangalore', 'Hyderabad', 'Delhi', 'Pune', 'Kolkata', 'Kochi'].map(
              (city) => (
                <div
                  key={city}
                  className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl py-4 px-6 font-semibold text-gray-700"
                >
                  {city}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
