import React, { useRef, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Compass, Lightbulb, Focus, Wind, CheckCircle2, Calendar, DollarSign, Users, Eye } from 'lucide-react';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
const ClarityCoaching = () => {
  const [user,setUser] = useState<any>(null);
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    }, []);
  const features = [
    {
      icon: Compass,
      title: 'Mental Clarity',
      description: 'Cut through mental noise and gain crystal-clear focus on what matters.'
    },
    {
      icon: Wind,
      title: 'Emotional Balance',
      description: 'Develop regulation skills and resilience through reflection and breathwork.'
    },
    {
      icon: Focus,
      title: 'Mindful Habits',
      description: 'Build sustainable daily practices aligned with your goals and values.'
    },
    {
      icon: Lightbulb,
      title: 'Calm Confidence',
      description: 'Strengthen self-belief and maintain composure under pressure.'
    }
  ];

  const weeklyJourney = [
    {
      week: 'Week 1',
      title: 'Awareness & Intention',
      description: 'Gain clarity on your current challenges and set mindful intentions for your growth journey.'
    },
    {
      week: 'Week 2',
      title: 'Understanding the Mind',
      description: 'Learn how thoughts, emotions, and behaviours interact and how mindfulness can create space between them.'
    },
    {
      week: 'Week 3',
      title: 'Managing Stress & Anxiety',
      description: 'Identify your stress triggers and practice tools for calming the nervous system in daily life.'
    },
    {
      week: 'Week 4',
      title: 'Emotional Balance',
      description: 'Develop emotional regulation and resilience using reflection and breathwork.'
    },
    {
      week: 'Week 5',
      title: 'Mindful Habits & Routines',
      description: 'Create practical, sustainable habits that align with your goals and values.'
    },
    {
      week: 'Week 6',
      title: 'Overcoming Procrastination',
      description: 'Address avoidance patterns and self-doubt; build momentum through mindful action.'
    },
    {
      week: 'Week 7',
      title: 'Calm Confidence & Focus',
      description: 'Strengthen focus, self-belief, and clarity of thought especially under pressure.'
    },
    {
      week: 'Week 8',
      title: 'Integration & Future Plan',
      description: 'Reflect, celebrate progress, and design your long-term self-management roadmap.'
    }
  ];

  const outcomes = [
    'Feel calmer, more centered, and in control of your emotions',
    'Experience greater focus and mental clarity',
    'Replace anxiety with confidence and self-awareness',
    'Build sustainable mindfulness habits for daily life',
    'Navigate stress and uncertainty with composure'
  ];

  const included = [
    '8 × 60-minute 1:1 weekly coaching sessions',
    'Personal clarity assessment + goal mapping',
    'Guided mindfulness and relaxation techniques',
    'Emotional intelligence & stress-response toolkit',
    'Reflection workbook + weekly habit tracker',
    'Mid-program review + accountability check-in',
    'Post-program summary & growth roadmap',
    'Between-session voice/text support'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-slate-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
              <Eye className="h-4 w-4" />
              <span className="text-sm font-medium">8-Week Personal Coaching</span>
            </div>

            <h1 className="font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Clarity & Calm
            </h1>

            <p className="text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
              Find Focus, Ease, and Balance in a Busy World
            </p>

            <p className="text-lg text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
              By: Sachin Kaintura & Sandeep Sharma
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={user ? "/booking" : "/login"}
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-xl"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Free Consultation</span>
              </Link>

              <a
                href="#investment"
                className="inline-flex items-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-200"
              >
                <span>View Pricing</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-800 italic"
          >
            "When your mind is calm, your path becomes clear."
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-bold text-4xl text-gray-900 mb-6">
                  Program Overview
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  The Clarity & Calm program is designed for professionals who feel overwhelmed, distracted, or emotionally drained and are ready to regain focus, confidence, and inner peace.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This 8-week journey combines mindfulness, emotional intelligence, and personal development tools to help you shift from stress and overthinking to calm awareness and purposeful action.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-700 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-gray-900 mb-4">
                What's Included
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Complete toolkit for personal transformation and lasting change
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {included.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-sm"
                >
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 8-Week Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-gray-900 mb-4">
                Your 8-Week Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From overwhelm to clarity, from anxiety to calm confidence
              </p>
            </div>

            <div className="space-y-6">
              {weeklyJourney.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                    <div className="flex-shrink-0 mb-4 md:mb-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-slate-700 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-sm text-center">{item.week}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-xl text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-gray-900 mb-4">
                Outcomes
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                By the end of this 8-week journey, you will:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 leading-relaxed">{outcome}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Investment */}
      <section id="investment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-gray-900 mb-4">
                Investment
              </h2>
              <p className="text-lg text-gray-600">
                Invest in your personal growth and wellbeing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600 to-slate-700 p-8 rounded-3xl shadow-xl text-white"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <DollarSign className="h-6 w-6" />
                  <h3 className="font-bold text-2xl">1:1 Coaching Program</h3>
                </div>
                <p className="text-blue-100 mb-6">8 weeks of personalized guidance</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$1499</span>
                  <span className="text-blue-100 ml-2">NZD</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>8 × 60-min sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>All digital materials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Ongoing support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Growth roadmap</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Payment plans available</span>
                  </li>
                </ul>
                <Link
                  to={user ? "/booking" : "/login"}
                  className="block w-full bg-white text-blue-600 text-center px-6 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200"
                >
                  Get Started
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white border-2 border-gray-200 p-8 rounded-3xl shadow-lg"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-2xl text-gray-900">Corporate/Team</h3>
                </div>
                <p className="text-gray-600 mb-6">Custom for groups</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                  <p className="text-sm text-gray-500 mt-2">6-10 participants</p>
                </div>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Tailored program</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Group materials</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Team activities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>All resources included</span>
                  </li>
                </ul>
                <Link
                  to={user ? "/booking" : "/login"}
                  className="block w-full bg-gradient-to-r from-blue-600 to-slate-700 text-white text-center px-6 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-200"
                >
                  Request Quote
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-gray-900 mb-4">
                Who It's For
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                'Busy professionals experiencing stress or burnout',
                'Individuals seeking emotional balance and focus',
                'Anyone ready to live with greater mindfulness, calm, and clarity'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md text-center"
                >
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-slate-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Find Your Clarity?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Book your free consultation and start your journey to calm confidence.
            </p>
            <Link
              to={user ? "/booking" : "/login"}
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              <Calendar className="h-5 w-5" />
              <span>Book Free Consultation</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

const AnimatedSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ClarityCoaching;
