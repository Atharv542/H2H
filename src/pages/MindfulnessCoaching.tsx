import React, { useRef, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Brain, Shield, Users, Zap, CheckCircle2, Calendar, DollarSign, TrendingUp, Heart } from 'lucide-react';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
const MindfulnessCoaching = () => {
  const [user,setUser] = useState<any>(null);
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    }, []);
  const features = [
    {
      icon: Brain,
      title: 'Stress Management',
      description: 'Master effective techniques to manage pressure and prevent burnout.'
    },
    {
      icon: Shield,
      title: 'Emotional Resilience',
      description: 'Build the ability to recover quickly from challenges with strength.'
    },
    {
      icon: Zap,
      title: 'Enhanced Focus',
      description: 'Improve concentration, productivity, and clear decision-making.'
    },
    {
      icon: Heart,
      title: 'Leadership Presence',
      description: 'Lead with empathy, awareness, and authentic presence.'
    }
  ];

  const weeklyJourney = [
    {
      week: 'Week 1',
      title: 'Awareness & Triggers',
      description: 'Understand how stress affects your brain and body. Identify key stressors in your professional life.'
    },
    {
      week: 'Week 2',
      title: 'Mindfulness in Action',
      description: 'Learn simple daily mindfulness techniques to stay grounded under pressure.'
    },
    {
      week: 'Week 3',
      title: 'Thought Mastery & Focus',
      description: 'Recognize negative thought loops and replace them with calm, clear thinking.'
    },
    {
      week: 'Week 4',
      title: 'Emotional Resilience',
      description: 'Develop the ability to recover quickly from challenges and adapt with strength.'
    },
    {
      week: 'Week 5',
      title: 'Boundaries & Energy Management',
      description: 'Redesign your day to balance workload, rest, and recovery.'
    },
    {
      week: 'Week 6',
      title: 'Communication Under Pressure',
      description: 'Master mindful communication and conflict resolution for high-stress situations.'
    },
    {
      week: 'Week 7',
      title: 'Leadership & Emotional Intelligence',
      description: 'Lead with empathy, presence, and self-awareness to inspire your team.'
    },
    {
      week: 'Week 8',
      title: 'Integration & Sustainability',
      description: 'Create your personalized stress-management plan and reinforce daily habits for calm performance.'
    }
  ];

  const outcomes = [
    'Manage stress effectively and prevent burnout',
    'Enhance focus, emotional control, and productivity',
    'Strengthen leadership presence and team communication',
    'Build long-term mental and emotional resilience'
  ];

  const included = [
    '8 × 60-minute weekly training sessions',
    'Mindful Leadership Mastery Master Workbook',
    'Stress Awareness Workbook',
    'Mindfulness in Action Toolkit Workbook',
    'Thought Mastery Focus Optimization Workbook',
    'Emotional Resilience Energy Management Workbook',
    'Mindful Communication Leadership Presence Guide',
    'Post-program follow-up session (30 min)'
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
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
              <Brain className="h-4 w-4" />
              <span className="text-sm font-medium">8-Week Executive Program</span>
            </div>

            <h1 className="font-bold text-5xl md:text-6xl text-white mb-6 leading-tight">
              Mindfulness Program
            </h1>
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
            "When you cultivate mindfulness, your whole life begins to perform powerfully."
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
                  A high-impact 8-week program designed for executives and teams who want to manage pressure, prevent burnout, and perform with clarity.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Using mindfulness, emotional intelligence, and practical self-management tools, this program transforms stress into sustainable performance.
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
                Comprehensive tools and support for executive performance
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
     
 <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
                Is It For Me?
              </h2>
              <p className="text-xl text-gray-600 font-medium">
                If you are…
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 max-w-7xl mx-auto  mb-12">
              {[
                {
                  title: 'Seeking Focus ',
                  description: 'Individuals feeling overwhelmed and seeking focus & clarity'
                },
                {
                  title: 'Feeling Stressed',
                  description: 'Individuals feeling mental overload, stress, burnouts & seeking emotional resilience'
                },
                {
                  title: 'Seeing Improvement',
                  description: 'Individuals seeking overall improved wellbeing and performance'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative bg-white border-2 border-transparent hover:border-blue-300 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <span className="text-white font-bold text-lg">✓</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full">
                <p className="text-white font-bold text-2xl">
                  Then this course is for You
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>          

      {/* 8-Week Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-gray-900 mb-4">
                8-Week Program Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transform from overwhelm to calm, focused leadership
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
       

      {/* Expected Outcomes */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-gray-900 mb-4">
                Expected Outcomes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

      {/* Investment Options */}
      <section id="investment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-gray-900 mb-4">
                Investment Options
              </h2>
              <p className="text-lg text-gray-600">
                Flexible options for individuals, teams, and organizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600 to-slate-700 p-8 rounded-3xl shadow-xl text-white"
              >
                <div className="flex items-center space-x-2 mb-4">
                
                  <h3 className="font-bold text-2xl">Executive 1:1</h3>
                </div>
                <p className="text-blue-100 mb-6">Individual coaching</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$1499</span>
                  <span className="text-blue-100 ml-2">NZD</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>8-Week Guided Journey</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Personalized Coaching Sessions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Complete Mindfulness Resources</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Ongoing Support & Accountability</span>
                  </li>
                </ul>
                <button
  onClick={() => handleCheckout("service4")}
  className="block w-full cursor-pointer mt-14 bg-white text-blue-600 text-center px-6 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200"
>
  Get Started
</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white border-2 border-blue-600 p-8 rounded-3xl shadow-lg relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-2xl text-gray-900">Team Program</h3>
                </div>
                <p className="text-gray-600 mb-6">2-hour basis one day</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">$499</span>
                  <span className="text-gray-600 ml-2">NZD</span>
                  <p className="text-sm text-gray-500 mt-2">Per Person(upto 12 person)</p>
                </div>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Tailored Coaching Program for Team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Team Engagement Activities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Custom Group Learning.</span>
                  </li>
                   <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Action-Oriented Insights</span>
                  </li>
                </ul>
                <button
  onClick={() => handleCheckout("service5")}
  className="block cursor-pointer w-full bg-gradient-to-r from-blue-600 to-slate-700 text-white text-center px-6 py-4 rounded-full font-semibold hover:opacity-90 transition-all duration-200"
>
  Book Team Session
</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-3xl shadow-lg"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  <h3 className="font-bold text-2xl text-gray-900">Corporate</h3>
                </div>
                <p className="text-gray-600 mb-6">Custom package</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                </div>
                <ul className="space-y-3 mb-8 text-gray-700 pt-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Tailored Program Design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Multi-Session Delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Follow-Up Workshops for Sustainability</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Continuous Support & Resources</span>
                  </li>
                </ul>
                <Link
                  to={user ? "/contact" : "/login"}
                  className="block w-full bg-blue-600 text-white text-center px-6 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-200"
                >
                  Request Quote
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who It's For */}


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Transform Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Book your session and discover mindful performance.
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

export default MindfulnessCoaching;
