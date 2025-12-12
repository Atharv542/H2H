import React from 'react'
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
 const services = [
     {
      title: "Discover Your Purpose",
      description:
        "Discover your true calling and create a life aligned with your deepest values and passions.",
      image:
        "https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/purpose-coaching",
      subtitle: "1-Week Self-Awareness Reset Program",
      duration: "90-Min Deep Dive",
       price: "$499",
    },

    {
      title: "Find Your Clarity & Focus",
      description:
        "Unlock your full potential with personalized strategies for sustainable growth and success.",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/clarity-coaching",
      subtitle: "1-Week Self-Awareness Reset Program",
      duration: "90-Min Deep Dive",
       price: "$499"
    },
    {
      title: "Experience Mindfulness",
      description: "Cultivate inner peace and present-moment awareness to enhance your surroundings.",
      image:
        "https://images.pexels.com/photos/3820360/pexels-photo-3820360.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/mindfulness-coaching",
      subtitle: "1-Week Self-Awareness Reset Program",
      duration: "90-Min Deep Dive",
       price: "$499"
    },

    {
      title: "Awareness & Discovery",
      subtitle: "1-Week Self-Awareness Reset Program",
      duration: "90-Min Deep Dive",
      price: "$99",
      description:
        "Begin your transformation with a powerful self-awareness reset. This 1-week program helps you pause, reflect, and understand where you are in life emotionally.",
      image:
        "https://images.pexels.com/photos/3759660/pexels-photo-3759660.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/awareness-program",
    },
    {
      title: "Purpose & Clarity",
      subtitle: "4-Week Purpose Discovery Journey",
      duration: "60-Min Sessions",
      price: "$399",
      description:
        "Discover your true calling and create a life aligned with your deepest values. Uncover what truly matters to you and design a meaningful path forward, mentally,energetically and feasible for all.",
      image:
        "https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/purpose-program",
    },
    {
      title: "Emotional Mastery",
      subtitle: "6-Week Emotional Intelligence Program",
      duration: "Weekly 75-Minute Sessions",
      price: "$699",
      description:
        "Master your emotions and build resilience. Learn to navigate life's challenges with grace while maintaining inner peace and emotional balance and accept evry challenge.",
      image:
        "https://images.pexels.com/photos/3820360/pexels-photo-3820360.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/emotional-program",
    },
    {
      title: "Confidence Builder",
      subtitle: "8-Week Self-Confidence Transformation",
      duration: "60-Minute Weekly Sessions",
      price: "$899",
      description:
        "Break free from self-doubt and step into your power. Build unshakeable confidence and learn to trust yourself completely in all areas of life without doubting your inner self.",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/confidence-program",
    },
    {
      title: "Relationship Harmony",
      subtitle: "5-Week Relationship Enhancement",
      duration: "90-Min Sessions",
      price: "$599",
      description:
        "Transform your relationships through deeper understanding and authentic communication. Create meaningful connections built on trust and mutual respect for everyone came in life.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/relationship-program",
    },
    {
      title: "Career Breakthrough",
      subtitle: "10-Week Professional Development",
      duration: "60-Min Bi-Weekly Sessions",
      price: "$1,299",
      description:
        "Accelerate your career growth and achieve professional excellence. Develop leadership skills and strategic thinking for lasting career success and harmony in life .",
      image:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/career-program",
    },
    {
      title: "Stress & Balance",
      subtitle: "6-Week Stress Management Program",
      duration: "75-Min Weekly Sessions",
      price: "$749",
      description:
        "Find balance in a busy world. Learn practical strategies to manage stress, prevent burnout, and create sustainable work-life harmony.",
      image:
        "https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/stress-program",
    },
    {
      title: "Life Transformation",
      subtitle: "12-Week Complete Life Makeover",
      duration: "90-Min Weekly Sessions",
      price: "$1,799",
      description:
        "Experience comprehensive transformation across all life areas. This holistic program combines all our methodologies for complete personal renewal.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/transformation-program",
    },
    {
      title: "Career Breakthrough",
      subtitle: "12-Week Complete Life Makeover",
      duration: "90-Min Weekly Sessions",
      price: "$1,799",
      description:
        "Experience comprehensive transformation across all life areas. This holistic program combines all our methodologies for complete personal renewal.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      link: "/transformation-program",
    },
  ];

function Services() {
  return (
    <section id="services" className="py-20 bg-white scroll-mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <section>
                <div className="text-center mb-16">
                  <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
                    Our Programs & Services
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Discover our comprehensive range of services designed to support
                    your personal growth and transformation.
                  </p>
                </div>
              </section>
    
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <section key={service.title} delay={index * 0.1}>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-3 font-medium">
                          {service.subtitle}
                        </p>
                        <div className="flex items-center justify-between mb-3 text-sm">
                          <span className="text-gray-600">{service.duration}</span>
                          <span className="text-blue-600 font-bold text-lg">
                            {service.price}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                          {service.description}
                        </p>
                        <Link
                          to={service.link}
                          className="block w-full text-center bg-gradient-to-r from-blue-600 to-slate-700 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </section>
  )
}

export default Services