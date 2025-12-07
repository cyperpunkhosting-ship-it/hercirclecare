import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get In{' '}
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            We're here to listen and support you. Reach out anytime.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send us a message
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions or need support? Fill out the form and we'll get
                back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-400 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {status === 'success' && (
                  <div className="bg-green-50 text-green-700 px-4 py-3 rounded-xl">
                    Thank you for reaching out! We'll get back to you soon.
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl">
                    {errorMessage || 'Something went wrong. Please try again.'}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Feel free to reach out through any of these channels. We're
                  always here for you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">support@hercirclecare.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">Available 24/7 for members</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Location
                    </h3>
                    <p className="text-gray-600">Serving creators across India</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-100 to-blue-100 rounded-2xl p-8">
                <h3 className="font-bold text-gray-800 mb-3 text-lg">
                  Need Immediate Support?
                </h3>
                <p className="text-gray-700 mb-4">
                  If you're already a member, you can reach out directly through
                  your support channel for priority assistance.
                </p>
                <button className="px-6 py-3 rounded-full bg-white text-pink-500 font-semibold hover:shadow-lg transition-all">
                  Member Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Response Time
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-pink-500 mb-2">
                &lt; 2 hours
              </div>
              <p className="text-gray-600">Basic Members</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-blue-500 mb-2">
                &lt; 30 mins
              </div>
              <p className="text-gray-600">Premium Members</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-purple-500 mb-2">
                Instant
              </div>
              <p className="text-gray-600">Elite Members</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
