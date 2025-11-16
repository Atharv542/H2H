import React, { useRef, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Target, Heart, CheckCircle2, Calendar, DollarSign, Users, Sparkles } from 'lucide-react';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
const PurposeCoaching = () => {
  const [user,setUser] = useState<any>(null);
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    }, []);
  const features = [
    {
      icon: Heart,
      title: 'Purpose Discovery',
      description: 'Deep dive into your core values and uncover what truly drives you.'
    },
    {
      icon: Target,
      title: 'Values Alignment',
      description: 'Align your daily actions with your deepest values and aspirations.'
    },
    {
      icon: Sparkles,
      title: 'Vision Clarity',
      description: 'Develop a crystal-clear vision for your life and career path.'
    },
    {
      icon: Users,
      title: 'Mindfulness Practice',
      description: 'Learn meditation and journaling techniques for self-connection.'
    }
  ];

  const weeklyJourney = [
    {
      week: 'Week 1',
      title: 'Awareness & Discovery',
      description: 'Gain a deep understanding of where you are now and what\'s holding you back. Begin your self-awareness journey.'
    },
    {
      week: 'Week 2',
      title: 'Defining Your Values & Vision',
      description: 'Identify your core values and reconnect with what truly matters. Define your vision for life and work.'
    },
    {
      week: 'Week 3',
      title: 'Purpose & Direction',
      description: 'Clarify your "why" your inner compass that drives meaning, motivation, and fulfilment.'
    },
    {
      week: 'Week 4',
      title: 'Mindfulness & Self-Connection',
      description: 'Learn to quiet the noise and reconnect with your intuition through mindfulness and meditation.'
    },
    {
      week: 'Week 5',
      title: 'Managing Stress & Energy',
      description: 'Discover techniques to balance your energy, reduce anxiety, and sustain calm focus.'
    },
    {
      week: 'Week 6',
      title: 'Releasing Limiting Beliefs',
      description: 'Identify old patterns and beliefs that no longer serve you, and replace them with empowering thoughts.'
    },
    {
      week: 'Week 7',
      title: 'Alignment & Action',
      description: 'Align your purpose with your goals. Create an intentional action plan grounded in mindfulness and confidence.'
    },
    {
      week: 'Week 8',
      title: 'Inner Peace & Integration',
      description: 'Anchor your growth with self-reflection, gratitude, and daily mindfulness rituals to sustain inner peace.'
    }
  ];

  const outcomes = [
    'Gain clarity on your life purpose and direction',
    'Reconnect with your values and authentic self',
    'Develop calm focus and emotional stability',
    'Replace stress with mindfulness and gratitude',
    'Create an aligned, purpose-driven action plan'
  ];

  const included = [
    '8 × 60-minute 1:1 weekly coaching sessions',
    'Purpose Discovery & Values Alignment Assessment',
    'Mindfulness, meditation & journaling exercises',
    'Emotional intelligence & stress awareness toolkit',
    'Vision & goal alignment framework',
    'Weekly reflections & growth tracking workbook',
    'Between-session text/voice note support',
    'Post-program action plan for continued growth'
  ];

  const handleCheckout = async (item: string) => {
  if (!user) {
    // Redirect to login if not signed in
    window.location.href = "/login";
    return;
  }

  try {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item }), // item: "service1" or "team"
    });

    const data = await res.json();

    if (data.url) {
      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } else {
      console.error("No URL returned from API", data);
    }
  } catch (err) {
    console.error("Stripe checkout error:", err);
  }
};


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium">8-Week Transformation Program</span>
            </div>

            <h1 className="font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              On Purpose & Inner Peace
            </h1>

            <p className="text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
              Reconnect with Your Why. Realign Your Mind. Rediscover Your Calm.
            </p>

            

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             

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
            "When you live with purpose, inner peace follows."
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
                  The On Purpose & Inner Peace program is designed for professionals and individuals who feel stuck, disconnected, or uncertain about their direction in life.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through this 8-week coaching journey, you'll rediscover clarity of purpose, strengthen self-awareness, and cultivate lasting inner peace. Using mindfulness and personal growth strategies, this program helps you move from confusion and chaos to calm confidence and conscious living.
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
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
                Everything you need for a complete transformation journey
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
                A structured path to purpose, peace, and personal transformation
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
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
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
       {/* Who It's For */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-gray-900 mb-4">
                Who is It For
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                'Professionals seeking direction or meaning in their career',
                'Individuals feeling disconnected or unfulfilled',
                'Anyone looking to live with more clarity, purpose, and peace'
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
      {/* Outcomes */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-gray-900 mb-4">
                Program Outcomes
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                By the end of 8 weeks, you will:
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
                Choose the option that best fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-3xl shadow-xl text-white"
              >
                <div className="flex items-center space-x-2 mb-4">
                  
                  <h3 className="font-bold text-2xl">1:1 Coaching Program</h3>
                </div>
                <p className="text-blue-100 mb-6">8 weeks of personalized coaching</p>
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
                    <span>Complete workbook & tools</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Between-session support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Post-program roadmap</span>
                  </li>
                  
                 
                </ul>
                <button
  onClick={() => handleCheckout("service1")}
  className="block w-full bg-white text-blue-600 text-center px-6 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 mt-14 cursor-pointer"
>
  Get Started
</button>
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
                  <h3 className="font-bold text-2xl text-gray-900">Corporate Program</h3>
                </div>
                <p className="text-gray-600 mb-6">Custom group version</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$499</span>
                  <span className="text-gray-600 ml-2">NZD</span>
                  <p className="text-sm text-gray-500 mt-2">per person (Group of 10)</p>
                </div>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>2-hour group sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Team workbook included</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Guided meditations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Reflection tools</span>
                  </li>
                </ul>
                <button
  onClick={() => handleCheckout("team4")}
  className="block cursor-pointer w-full bg-gradient-to-r from-blue-600 to-slate-700 text-white text-center px-6 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-200"
>
  Book Team Session
</button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Discover Your Purpose?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Book your session  today and begin your journey to inner peace.
            </p>
           
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

export default PurposeCoaching;
