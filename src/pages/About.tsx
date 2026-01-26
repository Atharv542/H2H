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
      id: 'sandeep-sharma',
      name: 'Sandeep Sharma',
      email: 'sandeep.sharma@head2heart.co.nz',
      phone: '+6421903306',
      image: '/team/Sandeep.jpg',
      role: 'Founder and Chief Executive Officer',
      bgColor: 'from-blue-400 to-cyan-400',
      bio:
        'Hi, my name is Sandeep Sharma. I\'m truly thankful for the life I live today, and for the family and friends who surround me. I was born into a middle-class household in New Delhi, India, where my childhood was joyful despite financial limitations. Like many, I aspired to a life of success dreaming of wealth, a beautiful home, and luxuries of life but had no clear roadmap to get there. Years of chasing these ambinations left me feeling stuck, anxious, and unfulfilled. No matter what I achieved, it never felt like enough. Eventually, I had a powerful realization: I wasn\'t meant to live in fear, frustration, or emptiness. That moment became a turning point, prompting me to redefine my purpose, values, beliefs, and mindset. I came to see life as a journey made up of meaningful experiences, and that true happiness comes from embracing the present not just pursuing a distant goal. I believe that if we\'re not grateful for what we have today, we\'ll never feel truly satisfied with what we gain tomorrow. Now, I live with intention and presence, enjoying the path I\'m on. I support others who feel the way I once did helping them cultivate an abundant mindset and guiding them toward their goals with clarity and purpose.',
      shortBio: 'Supporting individuals in cultivating an abundant mindset and guiding them toward their goals with clarity and purpose through gratitude and presence.',
    },
    {
      id: 'sachin-kaintura',
      name: 'Sachin Kaintura',
      email: 'sachin.kaintura@head2heart.co.nz',
      phone: '+64211368819',
      image: '/team/Sachin.png',
      role: 'Co-founder and Chief Operating Officer',
      bgColor: 'from-blue-400 to-cyan-400',
      bio:
        'Hi, I\'m Sachin Kaintura  a husband, proud father, and Personal Development & Mindfulness Certified Coach with expertise in NLP. My journey began in the bustling city of Mumbai, where I studied hospitality and started my career in the service industry. Like many in India\'s middle class, I dreamed of giving my family a better life a dream that led me to take a leap of faith in 2009 and move to New Zealand. Starting over as an immigrant meant long hours, financial sacrifices, and the emotional challenge of building a new life far from home. But through it all, I stayed true to the values of honesty, respect, empathy, and authenticity principles that continue to guide me today. Despite over two decades of experience in hospitality and leadership, I often felt a sense of incompleteness. I was doing well, but something inside me was missing. Everything changed in 2019 when I discovered a marketing company that introduced me to mindfulness. That experience became a turning point, helping me overcome stress, procrastination, limiting beliefs, and imposter syndrome. Today, I help individuals break free from self-doubt, gain clarity, and create balance in their personal and professional lives. My mission is simple: to guide you in cultivating mindfulness, unlocking your potential, and living with purpose. If you\'ve ever felt stuck, overwhelmed, or like there\'s more waiting for you, you\'re not alone. I\'ve been there too, and I\'m here to help you navigate your journey.',
      shortBio: 'Personal Development & Mindfulness Certified Coach helping individuals overcome self-doubt, gain clarity, and create balance in their lives.',
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About head2heart</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about helping people bridge the gap between where they are and where they want to be, connecting both head and heart in the process.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our story</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              head2heart was created to meet a quiet but growing need in Aotearoa New Zealand,the need for early, human, emotional support. Not everyone needs therapy. Not everyone is in crisis. But many people need a safe space to be heard, grounded, and supported. Head2Heart offers that space gently, respectfully, and without judgement.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              While we've been supporting individuals in various ways for years, we officially came together as an organization in April 2025 with a shared vision to help people reconnect with themselves through a holistic blend of mindfulness, emotional awareness, and practical growth tools. We have a vision to reach people globally.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              There's a kind of magic that unfolds when people align their thoughts with their emotions, their goals with their values, and their minds with their hearts. We believe that true and lasting transformation comes from integrating intellectual insights with emotional intelligence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At head2heart, we believe that true transformation happens when logic meets emotion, when strategies align with values, and when the mind and heart work together in harmony.
            </p>
          </div>
        </motion.div>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
>
  {/* LEFT: Mission & Vision */}
  <div>
    <h2 className="text-4xl font-bold text-gray-900 mb-6">Our mission</h2>

    <p className="text-lg text-gray-700 mb-6 font-semibold">
      At head2heart, we believe that true transformation happens when logic meets emotions,
      when strategies align with values, and when the mind and heart work together in harmony.
    </p>

    <p className="text-lg text-gray-700 mb-6 font-semibold">
      We change lives from within by empowering and transforming mental, emotional,
      and physical wellbeing through purpose-driven guidance.
    </p>

    <p className="text-lg italic font-bold text-gray-700 mb-10">
      We believe emotions are signals — not problems to fix.
    </p>
  {/* OUR VISION */}
    <h3 className="text-3xl font-bold text-gray-900 mb-4">Our vision</h3>

    <p className="text-lg text-gray-700 mb-4 leading-relaxed">
      We want to create a meaningful impact globally
    </p>
   
  </div>

  {/* RIGHT: IMAGE */}
  <div className="relative">
    <img
      src="/Mission.jpg"
      alt="Our Mission and Vision"
      className="rounded-2xl shadow-2xl w-full h-96 object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
  </div>
</motion.div>

 


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our approach</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-gray-700 flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Non-clinical and non-diagnostic</span>
              </li>
              <li className="text-lg text-gray-700 flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Emotion-first, human-centred</span>
              </li>
              <li className="text-lg text-gray-700 flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Culturally gentle and inclusive</span>
              </li>
              <li className="text-lg text-gray-700 flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>Calm, grounded, and heart-led</span>
              </li>
            </ul>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What head2heart Is (and Isn't)</h3>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">We are:</h4>
              <ul className="space-y-3">
                <li className="text-lg text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>Preventive emotional wellbeing support</span>
                </li>
                <li className="text-lg text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>A bridge before crisis</span>
                </li>
                <li className="text-lg text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>A calm place to reconnect</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-blue-600 mb-4">We are not:</h4>
              <ul className="space-y-3">
                <li className="text-lg text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>A replacement for therapy or medical care</span>
                </li>
                <li className="text-lg text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>A crisis service</span>
                </li>
                <li className="text-lg text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span>A one-size-fits-all solution</span>
                </li>
              </ul>
            </div>

            
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our core values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet our team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
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

                  <p className="text-center text-gray-700 font-medium mb-3">{member.role}</p>

                  <p className="text-gray-600 leading-relaxed">
                    {member.shortBio}
                  </p>
                  <div>
                    <button onClick={() => navigate(`/team/${member.id}`)} className='mt-2 text-blue-500 cursor-pointer underline'>Read More</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
