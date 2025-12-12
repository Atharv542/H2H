import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, ArrowLeft } from 'lucide-react';

const MemberProfile = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();

  const team = [
    {
      id: 'sachin-kaintura',
      name: 'Sachin Kaintura',
      email: 'sachin.kaintura@head2heart.co.nz',
      phone: '+64211368819',
      image: '/team/Sachin.png',
      role: 'Co-founder and Chief Operating Officer',
      bgColor: 'from-blue-400 to-cyan-400',
      bio:
        'Hi, I\'m Sachin Kaintura  a husband, proud father, and Personal Development & Mindfulness Certified Coach with expertise in NLP. My journey began in the bustling city of Mumbai, where I studied hospitality and started my career in the service industry. Like many in India\'s middle class, I dreamed of giving my family a better life a dream that led me to take a leap of faith in 2009 and move to New Zealand. Starting over as an immigrant meant long hours, financial sacrifices, and the emotional challenge of building a new life far from home. But through it all, I stayed true to the values of honesty, respect, empathy, and authenticity principles that continue to guide me today. Despite over two decades of experience in hospitality and leadership, I often felt a sense of incompleteness. I was doing well, but something inside me was missing. Everything changed in 2019 when I discovered a marketing company that introduced me to mindfulness. That experience became a turning point, helping me overcome stress, procrastination, limiting beliefs, and imposter syndrome. Today, I help individuals break free from self-doubt, gain clarity, and create balance in their personal and professional lives. My mission is simple: to guide you in cultivating mindfulness, unlocking your potential, and living with purpose. If you\'ve ever felt stuck, overwhelmed, or like there\'s more waiting for you, you\'re not alone. I\'ve been there too, and I\'m here to help you navigate your journey.',
    },
    {
      id: 'sandeep-sharma',
      name: 'Sandeep Sharma',
      email: 'sandeep.sharma@head2heart.co.nz',
      phone: '+6421903306',
      image: '/team/Sandeep.jpg',
      role: ' Founder and Chief Executive Officer',
      bgColor: 'from-blue-400 to-purple-400',
      bio:
        'Hi, my name is Sandeep Sharma. I\'m truly thankful for the life I live today, and for the family and friends who surround me. I was born into a middle-class household in New Delhi, India, where my childhood was joyful despite financial limitations. Like many, I aspired to a life of success dreaming of wealth, a beautiful home, and luxuries of life but had no clear roadmap to get there. Years of chasing these ambitions left me feeling stuck, anxious, and unfulfilled. No matter what I achieved, it never felt like enough. Eventually, I had a powerful realization: I wasn\'t meant to live in fear, frustration, or emptiness. That moment became a turning point, prompting me to redefine my purpose, values, beliefs, and mindset. I came to see life as a journey made up of meaningful experiences, and that true happiness comes from embracing the present not just pursuing a distant goal. I believe that if we\'re not grateful for what we have today, we\'ll never feel truly satisfied with what we gain tomorrow. Now, I live with intention and presence, enjoying the path I\'m on. I support others who feel the way I once did helping them cultivate an abundant mindset and guiding them toward their goals with clarity and purpose.',
    },
  ];

  const member = team.find((m) => m.id === memberId);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Member not found</p>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:underline font-medium"
          >
            Back to Team
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`relative h-96 bg-gradient-to-br ${member.bgColor} overflow-hidden`}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-white"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute top-1/3 right-10 w-20 h-20 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-1/4 w-28 h-28 rounded-full bg-white"></div>
        </div>

        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 500">
          <defs>
            <pattern id="dots" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="3" fill="white" />
            </pattern>
          </defs>
          <rect width="1000" height="500" fill="url(#dots)" />
        </svg>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-3"
          >
            {member.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-white font-medium mb-6"
          >
            {member.role}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center space-x-8 text-white"
          >
            <a
              href={`tel:${member.phone}`}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="h-5 w-5" />
              <span className="text-sm md:text-base">{member.phone}</span>
            </a>

            <a
              href={`mailto:${member.email}`}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="h-5 w-5" />
              <span className="text-sm md:text-base">{member.email}</span>
            </a>

          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="relative -mt-24 mx-auto max-w-5xl px-4 z-20 mb-12"
      >
        <div className={`w-56 h-56 mx-auto rounded-full bg-gradient-to-br ${member.bgColor} p-1 shadow-2xl`}>
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full rounded-full object-cover border-4 border-white"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-12 md:py-20"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About</h2>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {member.bio}
        </p>
      </motion.div>
    </div>
  );
};

export default MemberProfile;
