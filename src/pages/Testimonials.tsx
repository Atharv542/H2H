import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Marketing Executive',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Working with Head2Heart completely transformed my perspective on life and career. Sarah helped me find clarity and confidence I never knew I had. The sessions were incredibly insightful and practical.',
      achievement: 'Landed dream job and improved work-life balance',
    },
    {
      name: 'David Thompson',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The coaching program at Head2Heart gave me the tools and mindset shift I needed to overcome my limiting beliefs. Michael\'s approach is both challenging and supportive.',
      achievement: 'Started successful business and overcame imposter syndrome',
    },
    {
      name: 'Lisa Chen',
      role: 'Teacher',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Emma\'s wellness coaching approach helped me create sustainable habits that improved both my physical and mental health. I feel more balanced and energized than ever.',
      achievement: 'Lost 30 pounds and reduced stress significantly',
    },
    {
      name: 'Robert Johnson',
      role: 'Software Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The group workshops were eye-opening. Being able to share experiences with others while learning from Sarah created a powerful environment for growth and self-discovery.',
      achievement: 'Improved relationships and communication skills',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Healthcare Worker',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'The 12-week transformation program exceeded my expectations. The combination of individual coaching and group support was exactly what I needed to make lasting changes.',
      achievement: 'Career transition and increased self-confidence',
    },
    {
      name: 'James Wilson',
      role: 'Financial Advisor',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Head2Heart helped me navigate a difficult career transition with grace and confidence. The support and guidance I received were invaluable during a challenging time.',
      achievement: 'Successful career pivot and improved family relationships',
    },
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '500+', label: 'Success Stories' },
    { number: '95%', label: 'Goal Achievement Rate' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-poppins text-5xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read what our clients have to say about their transformational journeys 
            with Head2Heart coaching services.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-600 mb-4 pl-6 italic">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-3 mt-4">
                <p className="text-sm font-medium text-blue-800">
                  Achievement: {testimonial.achievement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12"
        >
          <h2 className="font-poppins text-4xl font-bold text-center text-gray-900 mb-8">
            Video Testimonials
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Watch real clients share their transformation stories
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((video) => (
              <div key={video} className="relative">
                <div className="bg-gray-300 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-600">Video Testimonial #{video}</p>
                    <p className="text-sm text-gray-500">Coming Soon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="font-poppins text-4xl font-bold text-gray-900 mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their lives through our coaching programs.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
              Read More Reviews
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;