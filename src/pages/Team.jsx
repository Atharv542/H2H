import React from "react";
import { User, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const members = [
  {
      id: 'sachin-kaintura',
    link: "/team-new/sachin-kaintura",
      name: 'Sachin Kaintura',
      email: 'sachin.kaintura@head2heart.co.nz',
      phone: '+64211368819',
      image: '/team-new/Sachin.png',
      role: 'Personal Development & Mindfulness Coach',
      bgColor: 'from-blue-400 to-cyan-400',
      bio:
        'Hi, I\'m Sachin Kaintura  a husband, proud father, and Personal Development & Mindfulness Certified Coach with expertise in NLP. My journey began in the bustling city of Mumbai, where I studied hospitality and started my career in the service industry. Like many in India\'s middle class, I dreamed of giving my family a better life a dream that led me to take a leap of faith in 2009 and move to New Zealand. Starting over as an immigrant meant long hours, financial sacrifices, and the emotional challenge of building a new life far from home. But through it all, I stayed true to the values of honesty, respect, empathy, and authenticity principles that continue to guide me today. Despite over two decades of experience in hospitality and leadership, I often felt a sense of incompleteness. I was doing well, but something inside me was missing. Everything changed in 2019 when I discovered a marketing company that introduced me to mindfulness. That experience became a turning point, helping me overcome stress, procrastination, limiting beliefs, and imposter syndrome. Today, I help individuals break free from self-doubt, gain clarity, and create balance in their personal and professional lives. My mission is simple: to guide you in cultivating mindfulness, unlocking your potential, and living with purpose. If you\'ve ever felt stuck, overwhelmed, or like there\'s more waiting for you, you\'re not alone. I\'ve been there too, and I\'m here to help you navigate your journey.',
      shortBio: 'Personal Development & Mindfulness Certified Coach helping individuals overcome self-doubt, gain clarity, and create balance in their personal and professional lives.',
    },
    {
      id: 'sandeep-sharma',
      name: 'Sandeep Sharma',
    link: "/team-new/sandeep-sharma",
      email: 'sandeep.sharma@head2heart.co.nz',
      phone: '+6421903306',
      image: '/team-new/Sandeep.jpg',
      role: 'Mindset & Abundance Coach',
      bgColor: 'from-blue-400 to-purple-400',
      bio:
        'Hi, my name is Sandeep Sharma. I\'m truly thankful for the life I live today, and for the family and friends who surround me. I was born into a middle-class household in New Delhi, India, where my childhood was joyful despite financial limitations. Like many, I aspired to a life of success dreaming of wealth, a beautiful home, and luxuries of life but had no clear roadmap to get there. Years of chasing these ambinations left me feeling stuck, anxious, and unfulfilled. No matter what I achieved, it never felt like enough. Eventually, I had a powerful realization: I wasn\'t meant to live in fear, frustration, or emptiness. That moment became a turning point, prompting me to redefine my purpose, values, beliefs, and mindset. I came to see life as a journey made up of meaningful experiences, and that true happiness comes from embracing the present not just pursuing a distant goal. I believe that if we\'re not grateful for what we have today, we\'ll never feel truly satisfied with what we gain tomorrow. Now, I live with intention and presence, enjoying the path I\'m on. I support others who feel the way I once did helping them cultivate an abundant mindset and guiding them toward their goals with clarity and purpose.',
      shortBio: 'Supporting individuals in cultivating an abundant mindset and guiding them toward their goals with clarity and purpose through gratitude and presence.',
    },
];

const Team = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">Meet Our Team</h1>

      <div className="w-full max-w-lg space-y-6">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white p-5 rounded-xl shadow-md border hover:shadow-xl transition flex items-center justify-between group cursor-pointer"
            onClick={() => navigate(member.link)} // Whole card clickable
          >
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <User className="text-blue-600" />
              </div>

              <div>
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            </div>

            {/* Arrow also navigates */}
            <ArrowRight
              className="text-gray-400 group-hover:text-blue-600 transition"
              onClick={(e) => {
                e.stopPropagation(); // Avoid triggering the parent onClick
                navigate(member.link);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
