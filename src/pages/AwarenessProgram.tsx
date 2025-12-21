import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Heart,
  Eye,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Target,
  Users
} from 'lucide-react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const AwarenessProgram = () => {
const [user,setUser] = useState<any>(null);
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => unsubscribe();
    }, []);
    const navigate=useNavigate();

  const features = [
    {
      icon: Brain,
      title: 'Deep Self-Understanding',
      description: 'Uncover hidden patterns and gain profound insights into your thoughts and behaviors.'
    },
    {
      icon: Heart,
      title: 'Emotional Clarity',
      description: 'Connect with your emotions and understand what truly drives you.'
    },
    {
      icon: Eye,
      title: 'Mindful Awareness',
      description: 'Develop present-moment awareness and learn to ground yourself in any situation.'
    },
    {
      icon: Target,
      title: 'Clear Direction',
      description: 'Identify your next steps with confidence and intention.'
    }
  ];

  const included = [
    'Awareness & Intention Workbook to explore your thoughts, emotions, and habits',
    '60-Minute Deep Awareness Coaching Session to identify emotional patterns, stress triggers, and blocks',
    'Mindfulness check-in exercises for grounding and inner calm',
    'Daily reflection prompts to deepen awareness throughout the week',
    'Personal Awareness Summary with key insights and your recommended next step'
  ];

  const outcomes = [
    'A deeper understanding of your emotional and mental patterns',
    'Clarity about what\'s been holding you back',
    'Awareness of your triggers, habits, and energy drains',
    'A stronger connection with yourself and your inner voice',
    'Renewed calm, confidence, and direction',
    'A clear intention for the next stage of your personal growth'
  ];

  const handleBookNow = async (item: string) => {
  if (!user) {
    // Redirect to login if not signed in
    navigate('/login');
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
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-slate-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
           

            <h1 className="font-bold text-5xl md:text-6xl text-white mb-4 leading-tight">
              Awareness & Discovery
            </h1>
            
            <div className="flex items-center justify-center space-x-4 text-white">
              <span className="text-lg">60-Minute Deep Dive</span>
              
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-gray-700 leading-relaxed"
          >
            Begin your transformation with a powerful self-awareness reset. This 1-week program helps you pause, reflect, and understand where you are in life emotionally, mentally, and energetically. Through guided mindfulness tools and a personalised coaching session, you'll uncover hidden patterns, gain clarity, and reconnect with your true inner voice.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mt-4 font-medium italic"
          >
            Perfect for you if you're feeling stuck, overwhelmed, or seeking clarity.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-gray-900 mb-4">
                Why Choose This Program
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-gray-900 mb-4">
                What's Included
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need for a powerful week of self-discovery
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-bold text-4xl text-gray-900 mb-4">
                What You'll Walk Away With
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transformative insights and practical tools for your journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
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

      {/* ---------------- INVESTMENT ---------------- */}
  <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <AnimatedSection>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Investment</h2>
        <p className="text-gray-600 text-lg">
          Choose how you want to grow with this program
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        {/* ---- LEFT: PRICE CARD ---- */}
        <div className="bg-gradient-to-br from-blue-600 to-slate-700 p-8 rounded-3xl text-white shadow-xl">
          <h3 className="text-xl font-semibold text-blue-100 mb-2">
      1:1 Coaching Program
    </h3>
          <div className="text-5xl font-bold mb-6">$149</div>
        

       <ul className="space-y-3 mb-8  text-blue-100">
  <li className="flex items-start gap-2">
    <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
    <span className="leading-relaxed">
      60-minute deep awareness coaching session.
    </span>
  </li>

  <li className="flex items-start gap-2">
    <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
    <span className="leading-relaxed">
      Guided mindfulness tools to identify stress patterns.
    </span>
  </li>

  <li className="flex items-start gap-2">
    <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
    <span className="leading-relaxed">
      Personalized awareness summary with clear next-step guidance
    </span>
  </li>
</ul>


          <button
            onClick={() => handleBookNow("service4")}
            className="w-full cursor-pointer bg-white text-blue-700 py-4 rounded-full font-semibold hover:bg-gray-100 transition flex justify-center items-center gap-2"
          >
            Book Now <ArrowRight />
          </button>
        </div>

        {/* ---- RIGHT: CUSTOM QUOTE ---- */}
        <div className="bg-white border-2 border-gray-200 p-8 rounded-3xl shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-6 w-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              Corporate / Team
            </h3>
          </div>

          <p className="text-gray-600 mb-6">
            Custom coaching options tailored for teams or groups
          </p>

          <ul className="space-y-5 py-4 mb-8 text-gray-700">
            <li className="flex gap-2">
              <CheckCircle2 className="text-blue-600" />
              Tailored Coaching Program for Your Team
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="text-blue-600" />
              Interactive Group Materials & Workbooks
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="text-blue-600" />
              Engaging Team Activities & Discussions
            </li>
          </ul>

          <Link
            to={user ? "/contact" : "/login"}
            className="block w-full bg-gradient-to-r from-blue-600 to-slate-700 text-white text-center py-4 rounded-full font-semibold hover:opacity-90 transition"
          >
            Request Quote
          </Link>
        </div>

      </div>
    </AnimatedSection>
  </div>
</section>


      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
              Start Your Journey with Awareness
            </h2>
            <p className="text-xl text-blue-100 mb-2">
              The first step toward a transformed life.
            </p>
            <p className="text-lg text-blue-200 italic">
              When you understand yourself deeply, everything else begins to fall into place.
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

export default AwarenessProgram;
