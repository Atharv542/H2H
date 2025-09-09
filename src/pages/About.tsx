import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'We believe in the power of being genuine and true to yourself in every aspect of life.',
    },
    {
      icon: Users,
      title: 'Connection',
      description: 'Building meaningful relationships and fostering deep connections with ourselves and others.',
    },
    {
      icon: Target,
      title: 'Growth',
      description: 'Committed to continuous learning and helping others reach their highest potential.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering exceptional coaching experiences that create lasting positive change.',
    },
  ];

  const team = [
    {
      name: 'Sanchin Kaintura',
      role: 'Founder & Lead Coach',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 10 years of experience in life coaching, Sarah has helped hundreds of clients transform their lives.',
    },
    {
      name: 'Sandeep Sharma',
      role: 'Senior Life Coach',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Specializing in career transitions and personal development, Michael brings 8 years of coaching expertise.',
    },
    {
      name: 'Shaila',
      role: 'Wellness Coach',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Emma focuses on holistic wellness and work-life balance, helping clients create sustainable lifestyle changes.',
    },
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
            About Head2Heart
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about helping people bridge the gap between where they are 
            and where they want to be, connecting both heart and mind in the process.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="font-poppins text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Head2Heart, we believe that true transformation happens when logic meets emotion, 
              when strategies align with values, and when the mind and heart work together in harmony.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to provide compassionate, evidence-based coaching that empowers 
              individuals to create meaningful change in their lives while staying true to their authentic selves.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Lives Transformed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="About Us"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="font-poppins text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="font-poppins text-4xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Head2Heart was born from the belief that lasting change requires both intellectual understanding 
              and emotional intelligence. Founded in 2014, we've grown from a single coach's practice to a 
              comprehensive coaching organization that serves clients worldwide.
            </p>
            <p className="text-lg text-gray-600">
              Every day, we're honored to witness the incredible transformations that happen when people 
              align their thoughts with their feelings, their goals with their values, and their head with their heart.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;