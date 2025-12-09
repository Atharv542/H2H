import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Heart, Handshake, ShieldCheck, Lightbulb, Eye } from 'lucide-react';

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: ShieldCheck,
      title: 'Honesty',
      description:
        'We maintain openness and honesty in every interaction, ensuring our clients feel supported with genuine feedback and authentic communication.',
    },
    {
      icon: Handshake,
      title: 'Respect',
      description:
        'We value every individual\'s perspective and journey, treating everyone with dignity, empathy, and kindness.',
    },
    {
      icon: Lightbulb,
      title: 'Bold',
      description:
        'We encourage stepping out of comfort zones, embrace change, and pursue growth with confidence',
    },
    {
      icon: Heart,
      title: 'Compassion',
      description:
        'We approach every coaching journey with empathy and understanding, helping individuals heal, grow, and find balance.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description:
        'We uphold the highest ethical standards, ensuring our coaching practices are rooted in trust, accountability, and sincerity.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description:
        'We believe in open communication, honest feedback, and clear guidance for every learner.',
    },
  ];

  const team = [
    {
      id: 'sachin-kaintura',
      name: 'Sachin Kaintura',
      email: 'sachin.kaintura@head2heart.co.nz',
      phone: '+64211368819',
      image: '/team/Sachin.png',
      role: 'Personal Development & Mindfulness Coach',
      bgColor: 'from-blue-400 to-cyan-400',
      bio:
        'Hi, I\'m Sachin Kaintura  a husband, proud father, and Personal Development & Mindfulness Certified Coach with expertise in NLP. My journey began in the bustling city of Mumbai, where I studied hospitality and started my career in the service industry. Like many in India\'s middle class, I dreamed of giving my family a better life a dream that led me to take a leap of faith in 2009 and move to New Zealand. Starting over as an immigrant meant long hours, financial sacrifices, and the emotional challenge of building a new life far from home. But through it all, I stayed true to the values of honesty, respect, empathy, and authenticity principles that continue to guide me today. Despite over two decades of experience in hospitality and leadership, I often felt a sense of incompleteness. I was doing well, but something inside me was missing. Everything changed in 2019 when I discovered a marketing company that introduced me to mindfulness. That experience became a turning point, helping me overcome stress, procrastination, limiting beliefs, and imposter syndrome. Today, I help individuals break free from self-doubt, gain clarity, and create balance in their personal and professional lives. My mission is simple: to guide you in cultivating mindfulness, unlocking your potential, and living with purpose. If you\'ve ever felt stuck, overwhelmed, or like there\'s more waiting for you, you\'re not alone. I\'ve been there too, and I\'m here to help you navigate your journey.',
      shortBio: 'Personal Development & Mindfulness Certified Coach helping individuals overcome self-doubt, gain clarity, and create balance in their personal and professional lives.',
    },
    {
      id: 'sandeep-sharma',
      name: 'Sandeep Sharma',
      email: 'sandeep.sharma@head2heart.co.nz',
      phone: '+6421903306',
      image: '/team/Sandeep.jpg',
      role: 'Mindset & Abundance Coach',
      bgColor: 'from-blue-400 to-purple-400',
      bio:
        'Hi, my name is Sandeep Sharma. I\'m truly thankful for the life I live today, and for the family and friends who surround me. I was born into a middle-class household in New Delhi, India, where my childhood was joyful despite financial limitations. Like many, I aspired to a life of success dreaming of wealth, a beautiful home, and luxuries of life but had no clear roadmap to get there. Years of chasing these ambinations left me feeling stuck, anxious, and unfulfilled. No matter what I achieved, it never felt like enough. Eventually, I had a powerful realization: I wasn\'t meant to live in fear, frustration, or emptiness. That moment became a turning point, prompting me to redefine my purpose, values, beliefs, and mindset. I came to see life as a journey made up of meaningful experiences, and that true happiness comes from embracing the present not just pursuing a distant goal. I believe that if we\'re not grateful for what we have today, we\'ll never feel truly satisfied with what we gain tomorrow. Now, I live with intention and presence, enjoying the path I\'m on. I support others who feel the way I once did helping them cultivate an abundant mindset and guiding them toward their goals with clarity and purpose.',
      shortBio: 'Supporting individuals in cultivating an abundant mindset and guiding them toward their goals with clarity and purpose through gratitude and presence.',
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Head2Heart</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about helping people bridge the gap between where they are and where they want to be, connecting both head and heart in the process.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At Head2Heart, we believe that true transformation happens when logic meets emotion, when strategies align with values, and when the mind and heart work together in harmony.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We change lives from within by empowering and transforming mental, emotional and physical wellbeing through purpose driven guidance.
              <br />Why - Because we care.
            </p>
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

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate(`/team/${member.id}`)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className={`w-40 h-40 rounded-full bg-gradient-to-br ${member.bgColor} p-1`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover border-4 border-white"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>

                  <div className="flex justify-center mb-4">
                    <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${member.bgColor}`}>
                      Coach
                    </span>
                  </div>

                  <p className="text-center text-gray-700 font-medium mb-3">{member.role}</p>

                  <p className="text-gray-600 text-center leading-relaxed">
                    {member.shortBio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Head2Heart was founded on the belief that true and lasting transformation comes from integrating intellectual insight with emotional intelligence. While we've been supporting individuals in various ways for years, we officially came together as an organization in April 2025 with a shared vision to help people reconnect with themselves through a holistic blend of mindfulness, emotional awareness, and practical growth tools. We have a vision to reach people globally.
            </p>

            <p className="text-lg text-gray-600">
              At our core, we understand the universal human desire to be seen, heard, guided, and transformed. And throughout this journey, we've been deeply humbled and inspired by the profound changes we've witnessed. There's a kind of magic that unfolds when people align their thoughts with their emotions, their goals with their values, and their minds with their hearts.
            </p>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default About;
