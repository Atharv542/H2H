import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Target,
  Lightbulb,
  Users,
  Sparkles,
} from "lucide-react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const [user, setUser] = useState<any>(null);
  const navigate= useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const sections = [
    {
      icon: Heart,
      title: "Connect With Your Inner Self",
      description:
        "Discover the power of aligning your thoughts and emotions. Our holistic approach helps you build a deeper connection between your mind and heart, creating lasting transformation from within.",
      image:
        "https://images.pexels.com/photos/3759660/pexels-photo-3759660.jpeg?auto=compress&cs=tinysrgb&w=800",
      reverse: false,
    },
    {
      icon: Target,
      title: "Achieve Your Life Goals",
      description:
        "Transform your dreams into reality with personalized coaching strategies. We work together to identify your goals, overcome obstacles, and create actionable plans that lead to meaningful success.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      reverse: true,
    },
    {
      icon: Lightbulb,
      title: "Unlock Your True Potential",
      description:
        "Break through limiting beliefs and discover the limitless possibilities within you. Our proven methodologies help you tap into your strengths and develop the confidence to pursue your passions.",
      image:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
      reverse: false,
    },
    {
      icon: Users,
      title: "Build Meaningful Relationships",
      description:
        "Strengthen your connections with others by first understanding yourself. Learn communication techniques and emotional intelligence skills that transform your personal and professional relationships.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      reverse: true,
    },
    {
      icon: Sparkles,
      title: "Create Lasting Change",
      description:
        "Experience sustainable transformation that goes beyond temporary fixes. Our comprehensive approach ensures you develop habits, mindsets, and practices that support your growth for years to come.",
      image:
        "https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=800",
      reverse: false,
    },
  ];

  const services = [
    {
      title: "Discover Your Purpose",
      description:
        "Discover your true calling and create a life aligned with your deepest values and passions.",
      image:
        "https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/purpose-coaching",
    },

    {
      title: "Find Your Clarity & Focus",
      description:
        "Unlock your full potential with personalized strategies for sustainable growth and success.",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/clarity-coaching",
    },
    {
      title: "Experience Mindfulness",
      description: "Cultivate inner peace and present-moment awareness.",
      image:
        "https://images.pexels.com/photos/3820360/pexels-photo-3820360.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/mindfulness-coaching",
    }
  ];

  const handleStartJourney = async () => {
  if (!user) {
    navigate("/login");
    return;
  }

  // Check if user has booked free session
  const ref = doc(db, "user_sessions", user.uid);
  const snap = await getDoc(ref);

  if (snap.exists() && snap.data().hasBookedFreeSession === true) {
    // Already booked → Smooth scroll to Services section
    if (window.location.pathname === "/") {
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("services")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100); // slight delay to wait for DOM
    }
  } else {
    // Not booked yet → Go to free booking page
    navigate("/booking");
  }
};

  return (
    <div className="min-h-screen">
      {/* Feature Sections */}
      <div className="bg-gradient-to-br from-blue-50 to-slate-50">
        {sections.map((section, index) => (
          <FeatureSection key={index} section={section} index={index} />
        ))}
      </div>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
                How We Can Help You
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover our comprehensive range of services designed to support
                your personal growth and transformation.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.2}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      to={service.link}
                      className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 transition-colors group"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Book your free consultation today and take the first step towards
              a better you.
            </p>

            <div className="flex flex-col md:flex-row md:justify-center items-center gap-4">
              {/* Book Free Consultation */}
              <button
  onClick={handleStartJourney}
  className="inline-flex cursor-pointer items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-xl"
>
  <span>Book Your Free Session</span>
  <ArrowRight className="h-5 w-5" />
</button>
              <Link to="/email">
                <button className="inline-flex cursor-pointer items-center ml-5 md:ml-0 justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg border-2 border-gray-200 hover:border-gray-300">
                  <span>Download Free E-Book</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

// ✅ Updated FeatureSection Component
const FeatureSection: React.FC<{ section: any; index: number }> = ({
  section,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const Icon = section.icon;

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
            section.reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: section.reverse ? 50 : -50 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
            className={section.reverse ? "lg:col-start-2" : ""}
          >
            {/* Icon + Title beside each other */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h2 className="font-bold text-3xl md:text-4xl text-gray-900 leading-tight">
                {section.title}
              </h2>
            </div>

            {/* Description below */}
            <p className="text-lg text-gray-600 leading-relaxed">
              {section.description}
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: section.reverse ? -50 : 50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: section.reverse ? -50 : 50 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
            className={section.reverse ? "lg:col-start-1 lg:row-start-1" : ""}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-slate-700 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src={section.image}
                alt={section.title}
                className="relative rounded-2xl shadow-2xl w-full h-64 md:h-96 object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Animation Wrapper
const AnimatedSection: React.FC<{
  children: React.ReactNode;
  delay?: number;
}> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default Home;
